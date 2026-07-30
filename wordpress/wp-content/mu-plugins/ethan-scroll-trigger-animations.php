<?php
/**
 * Plugin Name: Ethan Scroll Trigger Animations
 * Description: Adds smooth scroll-triggered reveal animations for the Ethan Dao theme.
 * Version: 1.0.0
 * Author: Ethan Dao
 */

if (!defined('ABSPATH')) {
    exit;
}

function ethan_scroll_trigger_animation_head(): void
{
    ?>
    <script id="ethan-scroll-trigger-ready">
      document.documentElement.classList.add('ethan-scrollfx-ready');
    </script>
    <style id="ethan-scroll-trigger-css">
      html.ethan-scrollfx-ready .reveal {
        opacity: 0;
        transform: translate3d(0, 30px, 0);
        filter: blur(8px);
        transition:
          opacity 820ms cubic-bezier(.22, 1, .36, 1),
          transform 820ms cubic-bezier(.22, 1, .36, 1),
          filter 820ms cubic-bezier(.22, 1, .36, 1);
        transition-delay: var(--scrollfx-delay, 0ms);
        will-change: opacity, transform, filter;
      }

      html.ethan-scrollfx-ready .reveal.is-visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        filter: blur(0);
      }

      html.ethan-scrollfx-ready .subpage-hero .reveal,
      html.ethan-scrollfx-ready .hero .reveal {
        transform: translate3d(0, 22px, 0) scale(.985);
      }

      html.ethan-scrollfx-ready .subpage-hero .reveal.is-visible,
      html.ethan-scrollfx-ready .hero .reveal.is-visible {
        transform: translate3d(0, 0, 0) scale(1);
      }

      html.ethan-scrollfx-ready .listing-grid .reveal,
      html.ethan-scrollfx-ready .service-grid .reveal,
      html.ethan-scrollfx-ready .testimonial-grid .reveal,
      html.ethan-scrollfx-ready .process-timeline .reveal,
      html.ethan-scrollfx-ready .neighborhood-grid .reveal,
      html.ethan-scrollfx-ready .area-grid .reveal {
        transform: translate3d(0, 24px, 0);
      }

      @media (max-width: 767px) {
        html.ethan-scrollfx-ready .reveal {
          transform: translate3d(0, 18px, 0);
          filter: blur(4px);
          transition-duration: 640ms;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html.ethan-scrollfx-ready .reveal,
        html.ethan-scrollfx-ready .hero .reveal,
        html.ethan-scrollfx-ready .subpage-hero .reveal {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }
      }
    </style>
    <?php
}
add_action('wp_head', 'ethan_scroll_trigger_animation_head', 80);

function ethan_scroll_trigger_animation_footer(): void
{
    ?>
    <script id="ethan-scroll-trigger-js">
      (() => {
        const root = document.documentElement;
        const items = [...document.querySelectorAll('.reveal')];
        if (!items.length) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion || !('IntersectionObserver' in window)) {
          items.forEach((item) => item.classList.add('is-visible'));
          return;
        }

        const staggerGroups = [
          '.listing-grid',
          '.service-grid',
          '.testimonial-grid',
          '.process-timeline',
          '.neighborhood-grid',
          '.area-grid',
          '.blog-grid',
          '.video-grid',
        ];

        staggerGroups.forEach((selector) => {
          document.querySelectorAll(selector).forEach((group) => {
            [...group.querySelectorAll('.reveal')].forEach((item, index) => {
              item.style.setProperty('--scrollfx-delay', `${Math.min(index, 5) * 75}ms`);
            });
          });
        });

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            });
          },
          {
            threshold: 0.16,
            rootMargin: '0px 0px -10% 0px',
          }
        );

        items.forEach((item) => observer.observe(item));
        window.addEventListener('pageshow', () => root.classList.add('ethan-scrollfx-ready'));
      })();
    </script>
    <?php
}
add_action('wp_footer', 'ethan_scroll_trigger_animation_footer', 80);
