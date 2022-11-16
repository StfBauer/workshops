import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import {
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme,
  ISemanticColors
} from '@microsoft/sp-component-base';

import styles from './CarcardWebPart.module.scss';

export interface ICarcardWebPartProps {
}

export default class CarcardWebPart extends BaseClientSideWebPart<ICarcardWebPartProps> {

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
    this.domElement.innerHTML = `<div class="${styles.carcard}">
    <article class="${styles.card}">
  <figure class="${styles['card-media']}">
  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="" class="${styles['card-img']}" loading="lazy">
    <figcaption class="${styles['card-caption']}">Porsche Panamera</figcaption>
  </figure>
  <div class="${styles["card-data"]}">
    <h2 class="${styles["card-title"]}">Porsche Panamera</h2>
    <p><strong>Engine:</strong> V8</p>
    <p><strong>Power:</strong> 550 PS (405 kW; 542 hp) at 6,000</p>
    <p><strong>Torgue:</strong> 750 Nm (553 lbf⋅ft) at 2,250–4,500</p>
    <p><strong>Max Speed:</strong> 306 km/h (190 mph)</p>
  </div>
</article>
    <article class="${styles.card}">
  <figure class="${styles['card-media']}">
  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="" class="${styles['card-img']}" loading="lazy">
    <figcaption class="${styles['card-caption']}">Porsche Panamera</figcaption>
  </figure>
  <div class="${styles["card-data"]}">
    <h2 class="${styles["card-title"]}">Porsche Panamera</h2>
    <p><strong>Engine:</strong> V8</p>
    <p><strong>Power:</strong> 550 PS (405 kW; 542 hp) at 6,000</p>
    <p><strong>Torgue:</strong> 750 Nm (553 lbf⋅ft) at 2,250–4,500</p>
    <p><strong>Max Speed:</strong> 306 km/h (190 mph)</p>
  </div>
</article>
    <article class="${styles.card}">
  <figure class="${styles['card-media']}">
  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="" class="${styles['card-img']}" loading="lazy">
    <figcaption class="${styles['card-caption']}">Porsche Panamera</figcaption>
  </figure>
  <div class="${styles["card-data"]}">
    <h2 class="${styles["card-title"]}">Porsche Panamera</h2>
    <p><strong>Engine:</strong> V8</p>
    <p><strong>Power:</strong> 550 PS (405 kW; 542 hp) at 6,000</p>
    <p><strong>Torgue:</strong> 750 Nm (553 lbf⋅ft) at 2,250–4,500</p>
    <p><strong>Max Speed:</strong> 306 km/h (190 mph)</p>
  </div>
</article>
    <article class="${styles.card}">
  <figure class="${styles['card-media']}">
  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="" class="${styles['card-img']}" loading="lazy">
    <figcaption class="${styles['card-caption']}">Porsche Panamera</figcaption>
  </figure>
  <div class="${styles["card-data"]}">
    <h2 class="${styles["card-title"]}">Porsche Panamera</h2>
    <p><strong>Engine:</strong> V8</p>
    <p><strong>Power:</strong> 550 PS (405 kW; 542 hp) at 6,000</p>
    <p><strong>Torgue:</strong> 750 Nm (553 lbf⋅ft) at 2,250–4,500</p>
    <p><strong>Max Speed:</strong> 306 km/h (190 mph)</p>
  </div>
</article>
    <article class="${styles.card}">
  <figure class="${styles['card-media']}">
  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt="" class="${styles['card-img']}" loading="lazy">
    <figcaption class="${styles['card-caption']}">Porsche Panamera</figcaption>
  </figure>
  <div class="${styles["card-data"]}">
    <h2 class="${styles["card-title"]}">Porsche Panamera</h2>
    <p><strong>Engine:</strong> V8</p>
    <p><strong>Power:</strong> 550 PS (405 kW; 542 hp) at 6,000</p>
    <p><strong>Torgue:</strong> 750 Nm (553 lbf⋅ft) at 2,250–4,500</p>
    <p><strong>Max Speed:</strong> 306 km/h (190 mph)</p>
  </div>
</article>
    
    
    
    </div>`;
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
    // this.render();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
