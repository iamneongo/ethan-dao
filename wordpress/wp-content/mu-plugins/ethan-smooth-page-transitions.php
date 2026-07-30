<?php
/**
 * Plugin Name: Ethan Smooth Page Transitions
 * Description: Adds lightweight page enter/exit transitions for internal navigation.
 * Version: 1.0.0
 * Author: Ethan Dao Theme
 */

if (!defined('ABSPATH')) {
    exit;
}

function ethan_smooth_page_transitions_assets(): void
{
    if (is_admin()) {
        return;
    }
    ?>
    <style id="ethan-smooth-page-transitions-css">
      @media (prefers-reduced-motion: no-preference) {
        html.ethan-page-transition-ready body {
          opacity: 1;
          transition: opacity 360ms cubic-bezier(.22,1,.36,1);
        }

        html.ethan-page-entering body {
          opacity: 0;
        }

        html.ethan-page-leaving body {
          opacity: 0;
          pointer-events: none;
        }
      }
    </style>
    <script id="ethan-smooth-page-transitions-js">
      (() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const root = document.documentElement;
        root.classList.add("ethan-page-transition-ready", "ethan-page-entering");

        const showPage = () => {
          requestAnimationFrame(() => root.classList.remove("ethan-page-entering"));
        };

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", showPage, { once: true });
        } else {
          showPage();
        }

        window.addEventListener("pageshow", () => {
          root.classList.remove("ethan-page-leaving");
          showPage();
        });

        document.addEventListener("click", (event) => {
          if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

          const link = event.target.closest("a[href]");
          if (!link) return;

          const href = link.getAttribute("href") || "";
          if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target || link.hasAttribute("download")) return;

          let url;
          try {
            url = new URL(href, window.location.href);
          } catch {
            return;
          }

          if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;
          if (url.href === window.location.href) return;

          event.preventDefault();
          root.classList.add("ethan-page-leaving");
          window.setTimeout(() => {
            window.location.href = url.href;
          }, 220);
        });
      })();
    </script>
    <?php
}
add_action('wp_head', 'ethan_smooth_page_transitions_assets', 30);
