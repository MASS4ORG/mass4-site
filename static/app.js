// MASS4 site — nav, scroll reveal, eye-candy
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasHover = window.matchMedia('(hover:hover)').matches;

  // --- Nav scroll border ---
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && menu) {
    toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // --- Scroll reveal (.reveal elements) ---
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var revealIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealIo.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { revealIo.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  if (prefersReducedMotion) return;

  // --- Staggered grid reveal ---
  // Children of grid containers animate in sequence when they enter the viewport.
  var grids = document.querySelectorAll('.pillars, .studio-values, .facts');
  if ('IntersectionObserver' in window && grids.length) {
    var gridIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Array.from(e.target.children).forEach(function (child, i) {
          child.style.opacity = '0';
          child.style.transform = 'translateY(20px)';
          setTimeout(function () {
            child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            child.style.opacity = '';
            child.style.transform = '';
            setTimeout(function () { child.style.transition = ''; }, 600);
          }, i * 85);
        });
        gridIo.unobserve(e.target);
      });
    }, { threshold: 0.08 });
    grids.forEach(function (g) {
      Array.from(g.children).forEach(function (c) { c.style.opacity = '0'; });
      gridIo.observe(g);
    });
  }

  if (!hasHover) return; // touch-only devices get no pointer effects

  // --- Cursor spotlight ---
  // A soft accent-coloured radial glow that follows the cursor across the page.
  var spotlight = document.createElement('div');
  Object.assign(spotlight.style, {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: '0',
    inset: '0',
    opacity: '0',
    transition: 'opacity 0.6s ease',
  });
  document.body.prepend(spotlight);

  var accentRgbMap = {
    guinevere: '40,198,255',
    gaya: '95,227,155',
    turian: '247,164,29',
    mystery: '255,90,60',
    mega4: '187,14,65',
    mass4: '187,14,65',
  };

  var cx = -9999, cy = -9999;

  function paintSpotlight() {
    var section = document.documentElement.dataset.section || 'mass4';
    var rgb = accentRgbMap[section] || '187,14,65';
    spotlight.style.background =
      'radial-gradient(640px circle at ' + cx + 'px ' + cy + 'px, rgba(' + rgb + ',0.065), transparent 68%)';
  }

  window.addEventListener('mousemove', function (e) {
    cx = e.clientX; cy = e.clientY;
    paintSpotlight();
    if (spotlight.style.opacity !== '1') spotlight.style.opacity = '1';
  }, { passive: true });
  document.addEventListener('mouseleave', function () {
    spotlight.style.opacity = '0';
  });

  // --- 3D tilt on .pillar cards ---
  // On hover, cards tilt toward the cursor for a tactile depth effect.
  document.querySelectorAll('.pillar').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'transform 0.08s ease, border-color 0.2s ease, box-shadow 0.25s ease';
    });
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        'perspective(900px) translateY(-4px) rotateX(' + (-y * 6) + 'deg) rotateY(' + (x * 6) + 'deg)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.5s ease, border-color 0.2s ease, box-shadow 0.25s ease';
      card.style.transform = '';
      setTimeout(function () { card.style.transition = ''; }, 500);
    });
  });

  // --- Magnetic pull on .btn-primary ---
  // Primary CTA buttons drift slightly toward the cursor, snapping back on leave.
  document.querySelectorAll('.btn-primary').forEach(function (btn) {
    btn.addEventListener('mouseenter', function () {
      btn.style.transition = 'transform 0.1s ease, background 0.2s ease, box-shadow 0.2s ease';
    });
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width * 0.5)) * 0.28;
      var y = (e.clientY - (r.top + r.height * 0.5)) * 0.28;
      btn.style.transform = 'translate(' + x + 'px, ' + (y - 2) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transition = 'transform 0.45s cubic-bezier(.22,.68,0,1.2), background 0.2s ease, box-shadow 0.2s ease';
      btn.style.transform = '';
      setTimeout(function () { btn.style.transition = ''; }, 450);
    });
  });

})();
