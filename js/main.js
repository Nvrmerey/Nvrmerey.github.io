/* Nurmerey Aidos — Personal Website interactions */

(function () {
    'use strict';

    var html = document.documentElement;
    html.classList.remove('no-js');
    html.classList.add('js');

    var header = document.getElementById('site-header');
    var navBurger = document.getElementById('nav-burger');
    var navLinks = document.getElementById('nav-links');
    var themeToggle = document.getElementById('theme-toggle');

    /* ---------- Theme toggle ---------- */
    var storedTheme = null;
    try {
        storedTheme = localStorage.getItem('theme');
    } catch (e) { /* storage unavailable */ }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) { /* ignore */ }
    }

    if (storedTheme === 'dark' || storedTheme === 'light') {
        applyTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    }

    themeToggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    /* ---------- Header shadow on scroll ---------- */
    function onScroll() {
        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile nav ---------- */
    function setNav(open) {
        navLinks.classList.toggle('open', open);
        navBurger.classList.toggle('open', open);
        navBurger.setAttribute('aria-expanded', String(open));
    }

    navBurger.addEventListener('click', function () {
        setNav(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            setNav(false);
        });
    });

    /* ---------- Active nav link highlighting ---------- */
    var sections = Array.prototype.map.call(
        document.querySelectorAll('main section[id]'),
        function (s) { return s; }
    );

    function highlightNav() {
        var pos = window.scrollY + (header.offsetHeight || 68) + 80;
        var currentId = sections[0] ? sections[0].id : '';
        sections.forEach(function (section) {
            if (section.offsetTop <= pos) {
                currentId = section.id;
            }
        });

        navLinks.querySelectorAll('.nav-link').forEach(function (link) {
            var target = link.getAttribute('href'); // e.g. "#experience"
            link.classList.toggle('active', target === '#' + currentId);
        });
    }
    window.addEventListener('scroll', highlightNav, { passive: true });
    window.addEventListener('resize', highlightNav);
    highlightNav();

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');

    var prefersReducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();