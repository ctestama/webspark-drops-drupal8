/**
 * Created by ctestama on 1/9/18.
 */
import superheroConfigs from './superheroConfigs.jsx'

//console.log(superheroConfigs, 'THE SUPERHERO CONFIGS OUTSIDE OF WRAPPER');
(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.asu_superhero_form = {
        attach: function (context, settings) {

                var react_configs = drupalSettings.asu_superhero;

                for (var property in react_configs) {
                    if (react_configs.hasOwnProperty(property)) {
                        // do stuff
                        var config = react_configs[property];

                        ReactDOM.render(React.createElement(superheroConfigs, config),  document.getElementById(config.superhero_react_id));
                    }
                }
        }
    };
})(jQuery, Drupal, drupalSettings);