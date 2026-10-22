/* embed.js — product videos (assets/video/*.mp4) inside website pages.
   Only the most-visible slot (>=55% in view) plays, so one video plays at a time. A slot
   restarts from 0 each time it becomes the active one and pauses when it stops being it.
   Clicking a slot restarts it. The .vposter overlay (play button + label) hides while a
   video is playing. With prefers-reduced-motion nothing autoplays: the poster and play
   button show until the visitor clicks. */
(function () {
  var slots = [], ratios = new Map(), active = null;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function vid(s) { return s.querySelector('video'); }
  function start(s) {
    var v = vid(s); if (!v) return;
    v.currentTime = 0;
    var p = v.play(); if (p && p.catch) p.catch(function () {});
  }
  function stop(s) { var v = vid(s); if (v) v.pause(); }
  function pick() {
    var best = null, br = 0.55;
    slots.forEach(function (s) { var r = ratios.get(s) || 0; if (r >= br) { best = s; br = r; } });
    if (best === active) return;
    if (active && (ratios.get(active) || 0) > 0.25 && !best) return;
    if (active) stop(active);
    active = best;
    if (best && !reduce) start(best);
  }
  function init() {
    slots = [].slice.call(document.querySelectorAll('.vslot'));
    slots.forEach(function (s) {
      var v = vid(s); if (!v) return;
      var p = document.createElement('div'); p.className = 'vposter';
      p.innerHTML = '<span class="vplay" aria-hidden="true"></span><span class="vlabel">' + (v.getAttribute('aria-label') || '').replace(/ video$/, '') + '</span>';
      s.appendChild(p);
      v.addEventListener('playing', function () { s.classList.add('live'); });
      v.addEventListener('pause', function () { s.classList.remove('live'); });
      v.addEventListener('ended', function () { s.classList.remove('live'); });
      s.addEventListener('click', function () {
        if (active && active !== s) stop(active);
        active = s; start(s);
      });
    });
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { ratios.set(e.target, e.intersectionRatio); });
      pick();
    }, { threshold: [0, 0.25, 0.4, 0.55, 0.7, 0.85, 1] });
    slots.forEach(function (s) { io.observe(s); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
