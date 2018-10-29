<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lojacoisasdaterra');

/** MySQL database username */
define('DB_USER', 'coisas');

/** MySQL database password */
define('DB_PASSWORD', 'cdt');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', 'utf8_general_ci');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Y:nBB8;R,#p6+k.GYE 9XW3mB+[KgtXX=L5lK}Ndl9d.A-L>3M*s1;D2B:lO2%xz');
define('SECURE_AUTH_KEY',  'l[5YQ?s](*[[iN>czN_90Z!pW%f^n6$z$4d2Vx3[SUuT!a4ka20B&_}|+0b#CU3i');
define('LOGGED_IN_KEY',    'G/;$R@$})Z4y8TS)5FjO?:d;9Yc`QthQ?e1@T>&!Q{?KOxa&(G5g,$jbH%@CCuwu');
define('NONCE_KEY',        'O[mI9[jgU4)O5|NB(TfGqj7`p^m|-i]a7z+q]ST?B$.wR| 6Gf-sfnXq{b{N%f`+');
define('AUTH_SALT',        'Gq%WRCl38k4F6QJ94fct;;>9r9/~k.i6a)u?0dJBR~;^#p.|9Rs+;L8I-}poXLcC');
define('SECURE_AUTH_SALT', 'R*`S%Ua9gD0bt_5JU_69T7-ouNUIr0Ge6~~vc[P<7b<R=}NRqLW7?-AA4P4+Ph 5');
define('LOGGED_IN_SALT',   'J[:c6v[z-b,`9Wln]8)Xo4b|?pl2&K?sww?EX/kK2d+;wM=4}o8!?lb&SELOG!qz');
define('NONCE_SALT',       '-tHsuqV3@1K^@-e/r{mbJ2-yEuPHmh=[c}#So-I2=TlvWmN-vbZT@H7RAi/@HuoV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
