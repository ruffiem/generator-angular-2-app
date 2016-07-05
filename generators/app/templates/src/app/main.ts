import { enableProdMode }       from '@angular/core';
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS }     from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { KernelComponent, environment } from './kernel/index';

if (environment.production) {
  enableProdMode();
}

bootstrap( KernelComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS ]);
