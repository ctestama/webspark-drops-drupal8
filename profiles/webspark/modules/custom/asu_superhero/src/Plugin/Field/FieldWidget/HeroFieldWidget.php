<?php

namespace Drupal\asu_superhero\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\image\Plugin\Field\FieldWidget\ImageWidget;

/**
 * Plugin implementation of the 'hero_field_widget' widget.
 *
 * @FieldWidget(
 *   id = "hero_widget",
 *   label = @Translation("Hero Field Widget"),
 *   field_types = {
 *     "hero_field_type"
 *   }
 * )
 */
class HeroFieldWidget extends ImageWidget {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'size' => 60,
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['size'] = [
      '#type' => 'number',
      '#title' => t('Size of textfield'),
      '#default_value' => $this->getSetting('size'),
      '#required' => TRUE,
      '#min' => 1,
    ];

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = parent::settingsSummary();

    $summary[] = t('Textfield size: @size', ['@size' => $this->getSetting('size')]);

    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state);

    $element['caption'] = [
      '#title' => t('Caption'),
      '#type' => 'textarea',
      '#default_value' => isset($items[$delta]->caption) ? $items[$delta]->caption : NULL,
      '#size' => 500,
      '#maxlength' => 500,
    ];

    return $element;
  }

  /**
   * Overrides \Drupal\file\Plugin\Field\FieldWidget\FileWidget::formMultipleElements().
   *
   * Special handling for draggable multiple widgets and 'add more' button.
   */
  protected function formMultipleElements(FieldItemListInterface $items, array &$form, FormStateInterface $form_state) {
    $elements = parent::formMultipleElements($items, $form, $form_state);

    return $elements;
  }

}


