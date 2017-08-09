<?php
/**
 * @file
 * Install, update and uninstall functions for the Webspark install profile.
 */

/**
 * Implements hook_install().
 *
 * Perform actions to set up the site for this profile.
 *
 * @see system_install()
 */
function webspark_install() {
  // First, do everything in standard profile.
  include_once DRUPAL_ROOT . '/core/profiles/standard/standard.install';
  standard_install();

  // Can add code in here to make nodes, terms, etc.
}
