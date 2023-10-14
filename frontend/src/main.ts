import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Как сделать так, чтобы в ангуляр при изменении на сервере тут же обновлялась страничка
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
