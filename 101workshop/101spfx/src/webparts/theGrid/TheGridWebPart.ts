import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './TheGridWebPart.module.scss';

export interface ITheGridWebPartProps {
}

export default class TheGridWebPart extends BaseClientSideWebPart<ITheGridWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.theGrid }">
      <div class="${ styles.gridItem }">
    Grid Container
    </div>
      <div class="${ styles.gridItem }">
    Grid Container
    </div>
    
    </div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
