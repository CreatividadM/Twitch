import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './pages/guards/intro.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[IntroGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'explorer', loadChildren: () => import('./pages/explorer/explorer.module').then( m => m.ExplorerPageModule)},
  { path: 'intro', loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
