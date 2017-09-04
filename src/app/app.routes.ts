import {RouterModule, Routes} from '@angular/router'
import {RegisterComponent} from './register/register.component'
import {RegisterSucessoComponent} from './register/register.sucesso.component'
const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register-sucesso', component: RegisterSucessoComponent }
];
export const routing = RouterModule.forRoot(appRoutes,{ useHash: true });
