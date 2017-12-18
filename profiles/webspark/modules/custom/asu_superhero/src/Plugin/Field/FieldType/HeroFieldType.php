<?php

namespace Drupal\asu_superhero\Plugin\Field\FieldType;

use Drupal\Component\Utility\Random;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\Core\TypedData\DataDefinition;
use Drupal\image\Plugin\Field\FieldType\ImageItem;


/**
 * Plugin implementation of the 'hero_field_type' field type.
 *
 * @FieldType(
 *   id = "hero_field_type",
 *   label = @Translation("Hero Field"),
 *   description = @Translation("Hero Field Type Plugin"),
 *   default_widget = "hero_widget",
 *   default_formatter = "hero",
 *   list_class = "\Drupal\file\Plugin\Field\FieldType\FileFieldItemList",
 * )
 */
class HeroFieldType extends ImageItem {

  /**
   * The entity manager.
   *
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityManager;

  /**
   * {@inheritdoc}
   */
  public static function defaultStorageSettings() {
    return [
    ] + parent::defaultStorageSettings();
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    $properties = parent::propertyDefinitions($field_definition);

    // Prevent early t() calls by using the TranslatableMarkup.
    $properties['caption'] = DataDefinition::create('string')
      ->setLabel(new TranslatableMarkup('Image Caption'))
      ->setSetting('case_sensitive', TRUE)
      ->setRequired(FALSE);

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    $schema = parent::schema($field_definition);

    $schema['columns']['caption'] = [
      'description' => "Caption for the image.",
      'type' => 'text'
    ];

    return $schema;
  }

  /**
   * {@inheritdoc}
   */
  public function getConstraints() {
    $constraints = parent::getConstraints();
    /*
    if ($max_length = $this->getSetting('max_length')) {
      $constraint_manager = \Drupal::typedDataManager()->getValidationConstraintManager();
      $constraints[] = $constraint_manager->create('ComplexData', [
        'value' => [
          'Length' => [
            'max' => $max_length,
            'maxMessage' => t('%name: may not be longer than @max characters.', [
              '%name' => $this->getFieldDefinition()->getLabel(),
              '@max' => $max_length
            ]),
          ],
        ],
      ]);
    }*/

    return $constraints;
  }

  /**
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {

    $values = parent::generateSampleValue($field_definition);

    $random = new Random();
    $values['caption'] = $random->word(mt_rand(1, 500));
    return $values;
  }

  /**
   * {@inheritdoc}
   */
  public function storageSettingsForm(array &$form, FormStateInterface $form_state, $has_data) {

    //$elements = [];
    $elements = parent::storageSettingsForm($form, $form_state, $has_data);
    /*
    $elements['case_sensitive'] = [
      '#type' => 'radio',
      '#title' => t('Maximum length'),
      '#default_value' => $this->getSetting('case_sensitive'),
      '#description' => t('Case sensitive.'),
      '#disabled' => $has_data,
    ];*/

    return $elements;
  }

  /**
   * Gets the entity manager.
   *
   * @return \Drupal\Core\Entity\EntityManagerInterface
   */
  protected function getEntityManager() {
    if (!isset($this->entityManager)) {
      $this->entityManager = \Drupal::entityManager();
    }
    return $this->entityManager;
  }
}
