/* tslint:disable:no-unused-variable */

import { beforeEach, beforeEachProviders, describe, xdescribe, expect, it, xit, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';

beforeEachProviders(() => [ HomeComponent ]);

describe('Home Component : ', () => {
  it('should create the app',
    inject([ HomeComponent ], ( app: HomeComponent ) => {
      expect( app ).toBeTruthy();
    })
  );
  it('should say \'We Start Here\'',
    inject([ HomeComponent ], ( app: HomeComponent ) => {
      expect( app.weStartHere ).toBe( 'We Start Here!' );
    })
  );
});
