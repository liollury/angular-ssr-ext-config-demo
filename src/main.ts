import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { catchError, from, switchMap, throwError } from 'rxjs';
import { AppModule } from './app/app.module';
import { CONFIGURATION, MyConfiguration } from './my-configuration.interface';

const configurationPath = '/config.json';

from(fetch(configurationPath)).pipe(
  switchMap((data) => from(data.json())),
  catchError((err: any) => {
    console.error(err);
    return throwError(err)
  })
).subscribe((config: MyConfiguration) => {
  if (config.production) {
    enableProdMode();
  }

  function bootstrap() {
    platformBrowserDynamic([
      {
        provide: CONFIGURATION,
        useValue: config
      }
    ]).bootstrapModule(AppModule)
      .catch(err => console.error(err));
  };

  if (document.readyState === 'complete') {
    bootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', bootstrap);
  }
});

