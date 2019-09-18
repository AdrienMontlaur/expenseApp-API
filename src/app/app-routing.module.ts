import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'client', loadChildren: './client/client.module#ClientPageModule' },
  { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },
  { path: 'deplacement', loadChildren: './deplacement/deplacement.module#DeplacementPageModule' },
  { path: 'edit-client', loadChildren: './client/edit-client/edit-client.module#editClientPageModule' },
  { path: 'edit-client/:id', loadChildren: './client/edit-client/edit-client.module#editClientPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
