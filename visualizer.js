/* visualizer.js
 * Attaches a real-time audio visualizer to a canvas.
 * Usage: attachVisualizer(audioContext, canvas, { source, mode })
 *   mode: 'bars' | 'wave' | 'radial'
 */
(function(){
  'use strict';

  function hexToRgb(hex){
    hex = hex.replace('#','');
    if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
    var n = parseInt(hex, 16);
    return { r: (n>>16)&255, g: (n>>8)&255, b: n&255 };
  }

  function attachVisualizer(ctx, canvas, opts){
    if (!ctx || !canvas) throw new Error('attachVisualizer needs (audioContext, canvas)');
    opts = opts || {};

    var analyser = ctx.__vizAnalyser;
    if (!analyser) {
      analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.82;
      try { analyser.connect(ctx.destination); } catch(e){}
      ctx.__vizAnalyser = analyser;
    }

    if (opts.source) {
      try { opts.source.connect(analyser); } catch(e){}
    }

    var W = canvas.width;
    var H = canvas.height;

    function resize(){
      var dpr = window.devicePixelRatio || 1;
      var rect = canvas.getBoundingClientRect();
      W = Math.max(200, Math.round(rect.width * dpr));
      H = Math.max(80, Math.round(rect.height * dpr));
      canvas.width = W;
      canvas.height = H;
    }
    resize();
    window.addEventListener('resize', resize);

    var freq = new Uint8Array(analyser.frequencyBinCount);
    var wave = new Uint8Array(analyser.fftSize);
    var rafId = null;
    var running = true;
    var accent = opts.accent || '#2f6fe0';
    var accent2 = opts.accent2 || '#5b92f0';
    var mode = opts.mode || 'bars';

    function getAccent(){
      return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || accent;
    }

    function draw(){
      if (!running) return;
      rafId = requestAnimationFrame(draw);
      if (document.hidden) return;

      var g = canvas.getContext('2d');
      g.clearRect(0, 0, W, H);

      var a = getAccent();
      var rgb = hexToRgb(a || accent);
      var rgb2 = hexToRgb(accent2);

      analyser.getByteFrequencyData(freq);
      analyser.getByteTimeDomainData(wave);

      if (mode === 'wave') {
        g.lineWidth = 2 * (window.devicePixelRatio || 1);
        g.strokeStyle = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
        g.beginPath();
        var step = W / wave.length;
        for (var i=0; i<wave.length; i++){
          var x = i * step;
          var y = H/2 + ((wave[i] - 128) / 128) * (H/2 - 6);
          if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
        }
        g.stroke();
      } else if (mode === 'radial') {
        var cx = W/2, cy = H/2;
        var r0 = Math.min(W, H) * 0.15;
        var rMax = Math.min(W, H) * 0.45;
        var bars = 64;
        for (var j=0; j<bars; j++){
          var idx = Math.floor((j / bars) * freq.length * 0.6);
          var v = freq[idx] / 255;
          var r = r0 + v * (rMax - r0);
          var ang = (j / bars) * Math.PI * 2 - Math.PI/2;
          var x1 = cx + Math.cos(ang) * r0;
          var y1 = cy + Math.sin(ang) * r0;
          var x2 = cx + Math.cos(ang) * r;
          var y2 = cy + Math.sin(ang) * r;
          g.strokeStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + (0.35 + v*0.65) + ')';
          g.lineWidth = 2 * (window.devicePixelRatio || 1);
          g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
        }
      } else {
        var n = 64;
        var bw = W / n;
        for (var k=0; k<n; k++){
          var fIdx = Math.floor(Math.pow(k / n, 1.6) * freq.length);
          var val = freq[fIdx] / 255;
          var bh = val * H;
          var xk = k * bw;
          var grd = g.createLinearGradient(0, H - bh, 0, H);
          grd.addColorStop(0, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.95)');
          grd.addColorStop(1, 'rgba(' + rgb2.r + ',' + rgb2.g + ',' + rgb2.b + ',0.6)');
          g.fillStyle = grd;
          g.fillRect(xk + bw*0.15, H - bh, bw*0.7, bh);
        }
      }
    }

    draw();

    return {
      stop: function(){ running = false; if (rafId) cancelAnimationFrame(rafId); },
      analyser: analyser,
      setMode: function(m){ mode = m; }
    };
  }

  window.attachVisualizer = attachVisualizer;
})();
