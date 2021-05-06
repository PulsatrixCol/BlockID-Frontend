import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './guards/guest.guard';
import { AuthUserGuard } from './guards/auth-user.guard';
/*import { AuthMunicipioGuard } from './guards/auth-municipio.guard';
import { AuthEstablecimientoGuard } from './guards/auth-establecimiento.guard';
import { AuthPersonaGuard } from './guards/auth-persona.guard';*/
const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/noAuth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'userhome',
    loadChildren: () => import('./pages/Auth/userhome/userhome.module').then( m => m.UserhomePageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'superman',
    loadChildren: () => import('./pages/Auth/superman/superman.module').then( m => m.SupermanPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'sendassets',
    loadChildren: () => import('./pages/Auth/sendassets/sendassets.module').then( m => m.SendassetsPageModule)
  },
  {
    path: 'create-candidate',
    loadChildren: () => import('./pages/Auth/superman/create-candidate/create-candidate.module').then( m => m.CreateCandidatePageModule)
  },
  {
    path: 'create-entity',
    loadChildren: () => import('./pages/Auth/superman/create-entity/create-entity.module').then( m => m.CreateEntityPageModule)
  },
  {
    path: 'create-election',
    loadChildren: () => import('./pages/Auth/superman/create-election/create-election.module').then( m => m.CreateElectionPageModule)
  },
  {
    path: 'cast-vote',
    loadChildren: () => import('./pages/Auth/userhome/cast-vote/cast-vote.module').then( m => m.CastVotePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/noAuth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./pages/Auth/changepass/changepass.module').then( m => m.ChangepassPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
