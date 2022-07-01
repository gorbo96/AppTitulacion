import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // redirectTo: 'spence-prediction',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/all/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar-gasto',
    loadChildren: () => import('./pages/all/registrar-gasto/registrar-gasto.module').then( m => m.RegistrarGastoPageModule)
  },
  {
    path: 'ver-gastos',
    loadChildren: () => import('./pages/all/ver-gastos/ver-gastos.module').then( m => m.VerGastosPageModule)
  },
  {
    path: 'ver-gastos-familia',
    loadChildren: () => import('./pages/admin/ver-gastos-familia/ver-gastos-familia.module').then( m => m.VerGastosFamiliaPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/all/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'createfamily',
    loadChildren: () => import('./pages/all/createfamily/createfamily.module').then( m => m.CreatefamilyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/all/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'update-family',
    loadChildren: () => import('./pages/admin/update-family/update-family.module').then( m => m.UpdateFamilyPageModule)
  },
  {
    path: 'list-familymembers',
    loadChildren: () => import('./pages/admin/list-familymembers/list-familymembers.module').then( m => m.ListFamilymembersPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/all/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'spence-prediction',
        loadChildren: () => import('./pages/admin/spence-prediction/spence-prediction.module').then( m => m.SpencePredictionPageModule)
  },
  {
    path: 'registrar-presupuestos',
    loadChildren: () => import('./pages/admin/registrar-presupuestos/registrar-presupuestos.module').then( m => m.RegistrarPresupuestosPageModule)
  },
  {
    path: 'ver-presupuestos',
    loadChildren: () => import('./pages/all/ver-presupuestos/ver-presupuestos.module').then( m => m.VerPresupuestosPageModule)
  },
  {
    path: 'reporte-gastos-admin',
    loadChildren: () => import('./pages/admin/reporte-gastos-admin/reporte-gastos-admin.module').then( m => m.ReporteGastosAdminPageModule)
  },
  {
    path: 'member-spence',
    loadChildren: () => import('./pages/admin/member-spence/member-spence.module').then( m => m.MemberSpencePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
