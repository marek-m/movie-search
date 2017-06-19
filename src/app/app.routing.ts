import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
