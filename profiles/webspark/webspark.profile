<?php
/**
 * @file
 * Enables modules and site configuration for a standard site installation.
 */

 use \Drupal\Core\Form\FormStateInterface;

 function webspark_form_install_configure_form_alter(&$form, FormStateInterface $form_state) {

   $host = \Drupal::request()->getHost();
   if ($host == 'localhost' || $host == '127.0.0.1') {
     $host = 'localhost.local';
   }

   // Site information defaults
   $form['site_information']['account']['mail']['#default_value'] = 'admin@' . $host;

   // Account information defaults
   $form['admin_account']['account']['name']['#default_value'] = 'admin';
   $form['admin_account']['account']['mail']['#default_value'] = 'admin@' . $host;

   // Date/time settings
   $form['regional_settings']['site_default_country']['#default_value'] = 'US';
   $form['regional_settings']['date_default_timezone']['#default_value'] = 'America/Phoenix';

 }
