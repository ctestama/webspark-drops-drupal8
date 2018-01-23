<?php
/**
 * Created by PhpStorm.
 * User: colt
 * Date: 8/23/17
 * Time: 8:49 PM
 */
use Drupal\Component\Utility\Unicode;
use Drupal\Core\Template\Attribute;
use Drupal\Component\Utility\NestedArray;



/**
 * Prepares variables for image formatter templates.
 *
 * Default template: image-formatter.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - item: An ImageItem object.
 *   - item_attributes: An optional associative array of html attributes to be
 *     placed in the img tag.
 *   - image_style: An optional image style.
 *   - url: An optional \Drupal\Core\Url object.
 */
function template_preprocess_hero_formatter(&$variables) {

  if ($variables['image_style']) {
    $variables['image'] = [
      '#theme' => 'image_style',
      '#style_name' => $variables['image_style'],
    ];
  }
  else {
    $variables['image'] = [
      '#theme' => 'image',
    ];
  }

  $variables['image']['#attributes'] = $variables['item_attributes'];

  $item = $variables['item'];

  // Do not output an empty 'title' attribute.
  if (Unicode::strlen($item->title) != 0) {
    $variables['image']['#title'] = $item->title;
    $variables['title'] = $item->title;
  }

  if (($entity = $item->entity) && empty($item->uri)) {
    $variables['image']['#uri'] = $entity->getFileUri();
  }
  else {
    $variables['image']['#uri'] = $item->uri;
  }

  $variables['description'] = $item->description;

  foreach (['width', 'height', 'alt'] as $key) {
    $variables['image']["#$key"] = $item->$key;
  }

  //kint($variables, 'THE VARIABLES IN TEMP PREPROCS');

}

function template_preprocess_node__asu_superhero(&$variables) {
  //kint($variables, 'THE VARIABLES IN NODE PREPROCESS');
  $variables['autoplay'] = TRUE;
  $variables['controls'] = TRUE;
  $variables['superhero_items'] = $variables['elements']['field_asu_superhero_items'];
}


function template_preprocess_field__hero_field_type(&$variables) {

  $element = $variables['element'];

  // Creating variables for the template.
  $variables['entity_type'] = $element['#entity_type'];
  $variables['field_name'] = $element['#field_name'];
  $variables['field_type'] = $element['#field_type'];
  $variables['label_display'] = $element['#label_display'];

  $variables['label_hidden'] = ($element['#label_display'] == 'hidden');
  // Always set the field label - allow themes to decide whether to display it.
  // In addition the label should be rendered but hidden to support screen
  // readers.
  $variables['label'] = $element['#title'];

  $variables['multiple'] = $element['#is_multiple'];

  static $default_attributes;
  if (!isset($default_attributes)) {
    $default_attributes = new Attribute();
  }

  // Merge attributes when a single-value field has a hidden label.
  if ($element['#label_display'] == 'hidden' && !$variables['multiple'] && !empty($element['#items'][0]->_attributes)) {
    $variables['attributes'] = NestedArray::mergeDeep($variables['attributes'], (array) $element['#items'][0]->_attributes);
  }

  // We want other preprocess functions and the theme implementation to have
  // fast access to the field item render arrays. The item render array keys
  // (deltas) should always be numerically indexed starting from 0, and looping
  // on those keys is faster than calling Element::children() or looping on all
  // keys within $element, since that requires traversal of all element
  // properties.
  $variables['items'] = [];
  $delta = 0;
  while (!empty($element[$delta])) {
    $variables['items'][$delta]['content'] = $element[$delta];

    // Modules (e.g., rdf.module) can add field item attributes (to
    // $item->_attributes) within hook_entity_prepare_view(). Some field
    // formatters move those attributes into some nested formatter-specific
    // element in order have them rendered on the desired HTML element (e.g., on
    // the <a> element of a field item being rendered as a link). Other field
    // formatters leave them within $element['#items'][$delta]['_attributes'] to
    // be rendered on the item wrappers provided by field.html.twig.
    $variables['items'][$delta]['attributes'] = !empty($element['#items'][$delta]->_attributes) ? new Attribute($element['#items'][$delta]->_attributes) : clone($default_attributes);
    $delta++;
  }

}