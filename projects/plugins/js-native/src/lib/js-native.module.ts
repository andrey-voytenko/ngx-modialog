import { NgModule } from '@angular/core';

import { Modal as BaseModal } from 'ngx-modialog-11';

import { Modal } from './modal';

export const providers: any[] = [
  { provide: BaseModal, useClass: Modal },
  { provide: Modal, useClass: Modal }
];

@NgModule({
  providers
})
export class JSNativeModalModule {

  static getProviders(): any[] {
    return providers;
  }

}
