import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './domain/views/home/home.component';
import { OndeEstamosComponent } from './domain/views/onde-estamos/onde-estamos.component';
import { SobreNosComponent } from './domain/views/sobre-nos/sobre-nos.component';
import { VideosComponent } from './domain/views/videos/videos.component';
import { RoteiroComponent } from './domain/views/roteiro/roteiro.component';
import { ProjetosSociaisComponent } from './domain/views/projetos-sociais/projetos-sociais.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
	{ path: 'sobre-nos', component: SobreNosComponent, /*canActivate: [AuthGuard]*/ },
	{ path: 'onde-estamos', component: OndeEstamosComponent, /*canActivate: [AuthGuard]*/ },
	{ path: 'videos', component: VideosComponent, /*canActivate: [AuthGuard]*/ },
	{ path: 'roteiro', component: RoteiroComponent, /*canActivate: [AuthGuard]*/ },
	{ path: 'projetos-sociais', component: ProjetosSociaisComponent, /*canActivate: [AuthGuard]*/},
	{ path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
