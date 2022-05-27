<?php

/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

use App\Actions;
use Timber\Menu;
use Timber\Site;
use Timber\Timber;
use Timber\Twig;
use Twig\Extension\StringLoaderExtension;
use Twig\TwigFilter;
use Twig\Environment as TwigEnv;
use Whoops\Handler\PrettyPageHandler;

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($composer_autoload)) {
	require_once $composer_autoload;
	$timber = new Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if (!class_exists('Timber')) {

	add_action(
		'admin_notices',
		function () {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function ($template) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array('templates', 'views');

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Site
{
	/** Add timber support. */
	public function __construct()
	{

		add_action('after_setup_theme', array($this, 'theme_supports'));
		add_filter('timber/context', array($this, 'add_to_context'));
		add_filter('timber/twig', array($this, 'add_to_twig'));
		add_action('init', array($this, 'register_post_types'));
		add_action('init', array($this, 'register_taxonomies'));
		add_action('wp_enqueue_scripts', [Actions::class, "remove_wp_block_library_css"], 100);
		add_filter('wp_mail_from_name', [$this, 'mail_from_name']);
		add_filter('wp_mail_from', [$this, 'mail_from']);
		Actions::remove_default_links();
		$this->registerOptionPage();
		$this->debug();
		parent::__construct();
	}


	public function debug()
	{
		if (WP_DEBUG === true) {
			$whoops = new \Whoops\Run();
			$whoops->pushHandler(new PrettyPageHandler);
			$whoops->register();
		}
	}

	/** This is where you can register custom post types. */
	public function register_post_types()
	{
	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies()
	{
	}

	/**
	 * Get builded assets
	 */

	public function getAssets(): array
	{

		$templatePath = get_template_directory();

		// dd(get_template_directory());

		$entrypointsPath = sprintf("%s/public/build/entrypoints.json", $templatePath);

		$json = json_decode(file_get_contents($entrypointsPath), true);

		$assets = $json["entrypoints"]["app"];

		return $assets;
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context($context)
	{

		$context["assets"] = $this->getAssets();
		$context['menu']  = new Menu();
		$context['site']  = $this;
		$context["footer"] = get_field("footer", "option");
		$context["header"] = ["mobile" => get_field("mobile", "option"), "button" => get_field("contact_button", "option"), "contact_modal" => get_field("contact_modal", "option")];
		$context["site"]->logo  = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full');
		// dd($context);
		return $context;
	}

	public function theme_supports()
	{
		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support('menus');

		add_theme_support('custom-logo');
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig(TwigEnv $twig)
	{

		$twig->addExtension(new StringLoaderExtension());
		// $twig->addFilter(new TwigFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

	public function registerOptionPage()
	{

		if (function_exists('acf_add_options_page')) {

			acf_add_options_page(array(
				'page_title' 	=> 'Theme General Settings',
				'menu_title'	=> 'Theme Settings',
				'menu_slug' 	=> 'theme-general-settings',
				'capability'	=> 'edit_posts',
				'redirect'		=> false
			));

			acf_add_options_sub_page(array(
				'page_title' 	=> 'Theme Header Settings',
				'menu_title'	=> 'Header',
				'parent_slug'	=> 'theme-general-settings',
			));

			acf_add_options_sub_page(array(
				'page_title' 	=> 'Theme Footer Settings',
				'menu_title'	=> 'Footer',
				'parent_slug'	=> 'theme-general-settings',
			));
		}
	}

	public function mail_from_name($name)
	{

		return $this->name;
	}

	public function mail_from($email)
	{
		return $this->admin_email;
	}
}

new StarterSite();
