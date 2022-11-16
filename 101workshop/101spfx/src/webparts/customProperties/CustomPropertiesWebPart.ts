import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './CustomPropertiesWebPart.module.scss';

import {
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme,
  ISemanticColors
} from '@microsoft/sp-component-base';

export interface ICustomPropertiesWebPartProps {
}

export default class CustomPropertiesWebPart extends BaseClientSideWebPart<ICustomPropertiesWebPartProps> {

  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  private setCSSVariables(theming: any) {

    // request all key defined in theming
    let themingKeys = Object.keys(theming);
    // if we have the key
    if (themingKeys !== null) {
      // loop over it
      themingKeys.forEach(key => {
        // add CSS variable to style property of the web part
        this.domElement.style.setProperty(`--${key}`, theming[key])

      });

    }

  }

  public render(): void {
    this.domElement.innerHTML = `<div class="${styles.customProperties}">Custom Property</div>`;
  }

  protected onInit(): Promise<void> {

    // Consume the new ThemeProvider service
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);

    // If it exists, get the theme variant
    this._themeVariant = this._themeProvider.tryGetTheme();

    // If there is a theme variant
    if (this._themeVariant) {

      // we set transfer semanticColors into CSS variables
      this.setCSSVariables(this._themeVariant.semanticColors);
      this.setCSSVariables(this._themeVariant.palette);

    } else if (window["__themeState__"].theme) {

      // FALLBACK TO App Page

      // we set transfer semanticColors into CSS variables
      this.setCSSVariables(window["__themeState__"].theme);

    }

    // Register a handler to be notified if the theme variant changes
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);


    return super.onInit();
  }

  /**
* Update the current theme variant reference and re-render.
*
* @param args The new theme
*/
  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {

    // assign new _themeVariant
    this._themeVariant = args.theme;
    this.setCSSVariables(this._themeVariant.semanticColors);
    this.setCSSVariables(this._themeVariant.palette);
    // this.render();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
