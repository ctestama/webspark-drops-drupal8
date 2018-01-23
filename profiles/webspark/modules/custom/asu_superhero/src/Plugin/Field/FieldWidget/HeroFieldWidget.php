<?php

namespace Drupal\asu_superhero\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\image\Plugin\Field\FieldWidget\ImageWidget;
use Drupal\Component\Serialization\Json;

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

    $configs = isset($items[$delta]->superhero_configs) ? Json::decode($items[$delta]->superhero_configs) : $this->getDefaultSuperheroConfigs();

    $element['description'] = [
      '#title' => t('Description/Tagline'),
      '#type' => 'textarea',
      '#default_value' => isset($items[$delta]->description) ? $items[$delta]->description : NULL,
      '#size' => 500,
      '#maxlength' => 500,
    ];

    $form_item_id = 'asu-superhero-settings-container-'.$delta;
    $react_id = 'asu-superhero-react-form-controls-'.$delta;

    $element['superhero_configs'] = [
      '#title' => t('ASU Superhero Configs'),
      '#type' => 'textarea',
      '#default_value' => isset($items[$delta]->superhero_configs) ? $items[$delta]->superhero_configs : NULL,
      '#size' => 2000,
      '#maxlength' => 2000,
      '#id' => $form_item_id,
      '#prefix' => '<div id="'.$react_id.'"></div>',
    ];

    $element['#attached'] = [
      'library' =>  array(
        'webspark/react',
        'webspark/react.dom',
        'asu_superhero/superhero.react.form',
      )
    ];

    $element['#attached']['drupalSettings']['asu_superhero']['superhero_'.$delta] = [
      'superhero_input_id' => $form_item_id,
      'superhero_react_id' => $react_id,
      'configs' => $configs
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

  public function getDefaultSuperheroConfigs () {
    return [
            "buttonTitle1" => "",
            "buttonUrl1" => "",
            "buttonTitle2"=> "",
            "buttonUrl2" => ""

    ];
  }

}


