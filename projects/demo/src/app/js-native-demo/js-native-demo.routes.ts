import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JSNativeDemo } from './js-native-demo';

export const routing: ModuleWithProviders<any> = RouterModule.forChild([
  { path: 'js-native-demo', component: JSNativeDemo }
]);

