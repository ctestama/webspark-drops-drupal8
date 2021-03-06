<?php
/**
 * Created by PhpStorm.
 * User: colt
 * Date: 8/23/17
 * Time: 8:49 PM
 */
use Drupal\Component\Utility\Unicode;

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
  }

  if (($entity = $item->entity) && empty($item->uri)) {
    $variables['image']['#uri'] = $entity->getFileUri();
  }
  else {
    $variables['image']['#uri'] = $item->uri;
  }

  $variables['caption'] = $item->caption;

  foreach (['width', 'height', 'alt'] as $key) {
    $variables['image']["#$key"] = $item->$key;
  }
}