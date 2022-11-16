import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './StickyheaderWebPart.module.scss';

export interface IStickyheaderWebPartProps {
}

export default class StickyheaderWebPart extends BaseClientSideWebPart<IStickyheaderWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.stickyheader }">
    <h2>Heading 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 2</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 3</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 4</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 5</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 6</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 7</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 8</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 9</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 10</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 11</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    <h2>Heading 12</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum nisi, obcaecati fugiat perferendis eius ipsum?
      Doloribus minus enim eius. Quos voluptatum, dolorum maiores fugiat blanditiis repellat labore perferendis id ut
      cum adipisci modi vero recusandae minus inventore veritatis eum excepturi quasi, fugit, dolor eligendi! Neque
      dolores quo consequatur iusto accusantium deleniti dolor inventore nostrum amet dolorem! Repellendus provident
      est, sapiente distinctio ad omnis officiis odit illo quaerat similique at reiciendis assumenda, modi reprehenderit
      nam illum? Similique ad et iure voluptatem tenetur eum quod ipsam officiis. Deserunt aliquam non aperiam saepe
      veniam molestiae, ratione odit, iste ut modi quia asperiores consequatur? Magni porro accusamus eum! Quas maxime
      quidem rerum quod laudantium necessitatibus corporis atque. Voluptatum ea tenetur nostrum sapiente numquam,
      aperiam harum error eius ab assumenda maxime in debitis cupiditate neque perferendis eos architecto similique
      labore minima quod? Expedita quo minima beatae adipisci, maxime aliquid libero perspiciatis excepturi non
      laudantium omnis vero provident doloribus delectus harum ratione quas dignissimos cupiditate magni incidunt fugit
      odit doloremque debitis! Sit quisquam et accusamus labore assumenda necessitatibus dolores, delectus officia dolor
      doloribus autem tenetur provident culpa perferendis sequi, beatae adipisci. Ducimus facilis modi nihil, nulla
      officia dicta nostrum expedita consequatur. Est sed totam itaque!</p>
    </div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
