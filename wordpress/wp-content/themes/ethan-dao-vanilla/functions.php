<?php
/**
 * Ethan Dao Vanilla theme bootstrap.
 */

if (!defined('ABSPATH')) {
    exit;
}

function ethan_dao_vanilla_static_pages(): array
{
    return [
        'about' => 'about.php',
        'agent-collaborations' => 'agent-collaborations.php',
        'blog' => 'blog.php',
        'browse-properties' => 'browse-properties.php',
        'buy' => 'buy.php',
        'buyer-guide' => 'buyer-guide.php',
        'buyer-information' => 'buyer-information.php',
        'contact' => 'contact.php',
        'featured-properties' => 'featured-properties.php',
        'garland' => 'garland.php',
        'home-valuation' => 'home-valuation.php',
        'index' => 'index.php',
        'join-team' => 'join-team.php',
        'lavon' => 'lavon.php',
        'mckinney' => 'mckinney.php',
        'neighborhoods' => 'neighborhoods.php',
        'past-transactions' => 'past-transactions.php',
        'properties' => 'properties.php',
        'sell' => 'sell.php',
        'seller-guide' => 'seller-guide.php',
        'selling-consultation' => 'selling-consultation.php',
        'services' => 'services.php',
        'testimonials' => 'testimonials.php'
    ];
}

function ethan_dao_vanilla_query_vars(array $vars): array
{
    $vars[] = 'ethan_static_page';
    return $vars;
}
add_filter('query_vars', 'ethan_dao_vanilla_query_vars');

function ethan_dao_vanilla_rewrite_rules(): void
{
    foreach (ethan_dao_vanilla_static_pages() as $slug => $file) {
        if ($slug === 'index') {
            continue;
        }
        add_rewrite_rule('^' . preg_quote($slug, '/') . '/?$', 'index.php?ethan_static_page=' . $slug, 'top');
    }
}
add_action('init', 'ethan_dao_vanilla_rewrite_rules');

function ethan_dao_vanilla_template_include(string $template): string
{
    $slug = get_query_var('ethan_static_page');
    if (empty($slug) && (is_front_page() || is_home())) {
        $slug = 'index';
    }

    $pages = ethan_dao_vanilla_static_pages();
    if ($slug && isset($pages[$slug])) {
        $candidate = get_template_directory() . '/templates/' . $pages[$slug];
        if (file_exists($candidate)) {
            return $candidate;
        }
    }

    return $template;
}
add_filter('template_include', 'ethan_dao_vanilla_template_include');

function ethan_dao_vanilla_activate(): void
{
    ethan_dao_vanilla_rewrite_rules();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'ethan_dao_vanilla_activate');

function ethan_dao_vanilla_deactivate(): void
{
    flush_rewrite_rules();
}
add_action('switch_theme', 'ethan_dao_vanilla_deactivate');

function ethan_dao_vanilla_register_menu_locations(): void
{
    register_nav_menus([
        'primary' => 'Primary Menu',
        'drawer' => 'Mobile Menu',
        'footer' => 'Footer Menu',
    ]);
}
add_action('after_setup_theme', 'ethan_dao_vanilla_register_menu_locations');

function ethan_dao_vanilla_page_titles(): array
{
    return [
        'buy' => 'Mua NhÃ ',
        'buyer-guide' => 'HÆ°á»›ng Dáº«n Mua NhÃ ',
        'buyer-information' => 'ThÃ´ng Tin NgÆ°á»i Mua',
        'browse-properties' => 'Xem NhÃ ',
        'sell' => 'BÃ¡n NhÃ ',
        'seller-guide' => 'HÆ°á»›ng Dáº«n BÃ¡n NhÃ ',
        'selling-consultation' => 'TÆ° Váº¥n BÃ¡n NhÃ ',
        'home-valuation' => 'Äá»‹nh GiÃ¡ NhÃ ',
        'past-transactions' => 'NhÃ  ÄÃ£ BÃ¡n Gáº§n ÄÃ¢y',
        'properties' => 'Báº¥t Äá»™ng Sáº£n',
        'featured-properties' => 'NhÃ  Ná»•i Báº­t',
        'neighborhoods' => 'Khu Vá»±c',
        'mckinney' => 'McKinney',
        'lavon' => 'Lavon',
        'garland' => 'Garland',
        'about' => 'Vá» Ethan',
        'testimonials' => 'Cáº£m Nháº­n KhÃ¡ch HÃ ng',
        'services' => 'Dá»‹ch Vá»¥',
        'blog' => 'BÃ i Viáº¿t',
        'contact' => 'LiÃªn Há»‡',
        'join-team' => 'Gia Nháº­p Äá»™i NgÅ©',
        'agent-collaborations' => 'Há»£p TÃ¡c Äáº¡i LÃ½',
    ];
}

function ethan_dao_vanilla_menu_blueprints(): array
{
    return [
        'primary' => [
            ['slug' => 'buy', 'title' => 'MUA NHÃ€', 'children' => ['buy', 'buyer-guide', 'buyer-information', 'browse-properties', 'mckinney', 'lavon', 'garland', 'neighborhoods']],
            ['slug' => 'sell', 'title' => 'BÃN NHÃ€', 'children' => ['sell', 'seller-guide', 'selling-consultation', 'home-valuation', 'past-transactions']],
            ['slug' => 'properties', 'title' => 'Báº¤T Äá»˜NG Sáº¢N', 'children' => ['properties', 'featured-properties', 'browse-properties', 'past-transactions', 'neighborhoods']],
            ['slug' => 'about', 'title' => 'GIá»šI THIá»†U', 'children' => ['about', 'testimonials', 'services', 'blog']],
            ['slug' => 'contact', 'title' => 'LIÃŠN Há»†', 'children' => ['contact', 'join-team', 'agent-collaborations']],
        ],
        'drawer' => [
            ['slug' => 'home', 'title' => 'TRANG CHá»¦'],
            ['slug' => 'buy', 'title' => 'MUA NHÃ€'],
            ['slug' => 'sell', 'title' => 'BÃN NHÃ€'],
            ['slug' => 'properties', 'title' => 'Báº¤T Äá»˜NG Sáº¢N'],
            ['slug' => 'about', 'title' => 'Vá»€ ETHAN'],
            ['slug' => 'testimonials', 'title' => 'Cáº¢M NHáº¬N KHÃCH HÃ€NG'],
            ['slug' => 'services', 'title' => 'Dá»ŠCH Vá»¤'],
            ['slug' => 'neighborhoods', 'title' => 'KHU Vá»°C'],
            ['slug' => 'home-valuation', 'title' => 'Äá»ŠNH GIÃ NHÃ€'],
            ['slug' => 'blog', 'title' => 'BÃ€I VIáº¾T'],
            ['slug' => 'contact', 'title' => 'LIÃŠN Há»†'],
            ['slug' => 'join-team', 'title' => 'GIA NHáº¬P Äá»˜I NGÅ¨'],
        ],
        'footer' => [
            ['slug' => 'home', 'title' => 'TRANG CHá»¦'],
            ['slug' => 'about', 'title' => 'Vá»€ ETHAN'],
            ['slug' => 'featured-properties', 'title' => 'NHÃ€ Ná»”I Báº¬T'],
            ['slug' => 'past-transactions', 'title' => 'NHÃ€ ÄÃƒ BÃN Gáº¦N ÄÃ‚Y'],
            ['slug' => 'neighborhoods', 'title' => 'KHU Vá»°C'],
            ['slug' => 'home-valuation', 'title' => 'Äá»ŠNH GIÃ NHÃ€'],
            ['slug' => 'contact', 'title' => 'LIÃŠN Há»†'],
        ],
    ];
}

function ethan_dao_vanilla_get_or_create_page(string $slug, string $title): int
{
    $existing = get_page_by_path($slug);
    if ($existing instanceof WP_Post) {
        return (int) $existing->ID;
    }

    return (int) wp_insert_post([
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_name' => $slug,
        'post_title' => $title,
        'post_content' => '',
    ]);
}

function ethan_dao_vanilla_create_menu_item(int $menu_id, array $item, int $parent_id = 0): int
{
    $slug = (string) ($item['slug'] ?? '');
    $title = (string) ($item['title'] ?? '');

    if ($slug === 'home') {
        return (int) wp_update_nav_menu_item($menu_id, 0, [
            'menu-item-title' => $title,
            'menu-item-url' => home_url('/'),
            'menu-item-type' => 'custom',
            'menu-item-status' => 'publish',
            'menu-item-parent-id' => $parent_id,
        ]);
    }

    $page_titles = ethan_dao_vanilla_page_titles();
    $page_id = ethan_dao_vanilla_get_or_create_page($slug, $page_titles[$slug] ?? $title);

    return (int) wp_update_nav_menu_item($menu_id, 0, [
        'menu-item-title' => $title ?: ($page_titles[$slug] ?? $slug),
        'menu-item-object-id' => $page_id,
        'menu-item-object' => 'page',
        'menu-item-type' => 'post_type',
        'menu-item-status' => 'publish',
        'menu-item-parent-id' => $parent_id,
    ]);
}

function ethan_dao_vanilla_seed_wordpress_menus(): void
{
    if (get_option('ethan_dao_vanilla_menu_seeded') === '2026-07-30-2') {
        return;
    }

    foreach (ethan_dao_vanilla_page_titles() as $slug => $title) {
        ethan_dao_vanilla_get_or_create_page($slug, $title);
    }

    $locations = get_theme_mod('nav_menu_locations', []);
    foreach (ethan_dao_vanilla_menu_blueprints() as $location => $items) {
        $menu_name = 'Ethan Dao ' . ucwords($location) . ' Menu';
        $menu = wp_get_nav_menu_object($menu_name);
        if (!$menu) {
            $menu_id = (int) wp_create_nav_menu($menu_name);
        } else {
            $menu_id = (int) $menu->term_id;
        }

        $existing_items = wp_get_nav_menu_items($menu_id);
        if (empty($existing_items)) {
            foreach ($items as $item) {
                $parent_id = ethan_dao_vanilla_create_menu_item($menu_id, $item);
                foreach (($item['children'] ?? []) as $child_slug) {
                    $titles = ethan_dao_vanilla_page_titles();
                    ethan_dao_vanilla_create_menu_item($menu_id, [
                        'slug' => $child_slug,
                        'title' => $titles[$child_slug] ?? $child_slug,
                    ], $parent_id);
                }
            }
        }

        if (empty($locations[$location])) {
            $locations[$location] = $menu_id;
        }
    }

    set_theme_mod('nav_menu_locations', $locations);
    update_option('ethan_dao_vanilla_menu_seeded', '2026-07-30-2');
}
add_action('init', 'ethan_dao_vanilla_seed_wordpress_menus', 30);

function ethan_dao_vanilla_menu_tree(string $location): array
{
    $locations = get_nav_menu_locations();
    if (empty($locations[$location])) {
        return [];
    }

    $items = wp_get_nav_menu_items((int) $locations[$location]);
    if (empty($items)) {
        return [];
    }

    $nodes = [];
    foreach ($items as $item) {
        $nodes[(int) $item->ID] = [
            'id' => (int) $item->ID,
            'parent' => (int) $item->menu_item_parent,
            'title' => $item->title,
            'url' => $item->url,
            'children' => [],
        ];
    }

    $tree = [];
    foreach ($nodes as $id => &$node) {
        if ($node['parent'] && isset($nodes[$node['parent']])) {
            $nodes[$node['parent']]['children'][] = &$node;
        } else {
            $tree[] = &$node;
        }
    }
    unset($node);

    return $tree;
}

function ethan_dao_vanilla_render_primary_nav(): string
{
    $items = ethan_dao_vanilla_menu_tree('primary');
    if (empty($items)) {
        return '<nav class="desktop-nav"></nav>';
    }

    $html = '<nav class="desktop-nav"><a href="tel:+14699895786">(469) 989-5786</a>';
    foreach ($items as $item) {
        $title = esc_html($item['title']);
        $url = esc_url($item['url']);
        if (!empty($item['children'])) {
            $html .= '<div class="nav-group"><a class="nav-top" href="' . $url . '">' . $title . ' <svg><use href="#icon-chevron-down"/></svg></a><ul>';
            foreach ($item['children'] as $child) {
                $html .= '<li><a href="' . esc_url($child['url']) . '">' . esc_html($child['title']) . '</a></li>';
            }
            $html .= '</ul></div>';
        } else {
            $html .= '<a href="' . $url . '">' . $title . '</a>';
        }
    }
    $html .= '<a class="icon-button" href="' . esc_url(home_url('/browse-properties/')) . '" aria-label="TÃ¬m kiáº¿m"><svg><use href="#icon-search"/></svg></a></nav>';

    return $html;
}

function ethan_dao_vanilla_flat_menu_links(string $location): string
{
    $items = ethan_dao_vanilla_menu_tree($location);
    $links = '';
    $walk = function (array $nodes) use (&$walk, &$links): void {
        foreach ($nodes as $node) {
            $links .= '<a href="' . esc_url($node['url']) . '">' . esc_html($node['title']) . '</a>';
            if (!empty($node['children'])) {
                $walk($node['children']);
            }
        }
    };
    $walk($items);

    return $links;
}

function ethan_dao_vanilla_render_drawer_nav(): string
{
    return '<aside class="side-menu" data-side-menu><button class="close-menu" data-close-menu aria-label="ÄÃ³ng menu">&times;</button><nav>' .
        ethan_dao_vanilla_flat_menu_links('drawer') .
        '</nav><div class="side-contact"><a href="tel:+14699895786">(469) 989-5786</a><a href="mailto:ethandao.realtor@gmail.com">ethandao.realtor@gmail.com</a><div class="social-links gold"></div></div></aside>';
}

function ethan_dao_vanilla_render_footer_nav(): string
{
    return '<div class="footer-nav"><nav>' . ethan_dao_vanilla_flat_menu_links('footer') . '</nav><div class="social-links gold"></div></div>';
}


