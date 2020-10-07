import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { ChauffeursAdminComponent } from './menu/chauffeurs-admin/chauffeurs-admin.component';
import { VehiculesAdminComponent } from './menu/vehicules-admin/vehicules-admin.component';
import { OccupationChauffeurComponent } from './menu/occupation-chauffeur/occupation-chauffeur.component';
import { PlanningChauffeurComponent } from './menu/planning-chauffeur/planning-chauffeur.component';
import { StatistiquesCollabComponent } from './menu/statistiques-collab/statistiques-collab.component';
import { AnnoncesCollabComponent } from './menu/annonces-collab/annonces-collab.component';
import { ReservationsCollabComponent } from './menu/reservations-collab/reservations-collab.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';


const routes: Routes =  [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  { path: 'collaborateur/reservations', component: ReservationsCollabComponent},
  { path: 'collaborateur/annonces', component: AnnoncesCollabComponent},
  { path: 'collaborateur/statistiques', component: StatistiquesCollabComponent},
  { path: 'chauffeur/planning', component: PlanningChauffeurComponent},
  { path: 'chauffeur/occupation', component: OccupationChauffeurComponent},
  { path: 'administrateur/chauffeurs', component: ChauffeursAdminComponent},
  { path: 'administrateur/statistiques', component: VehiculesAdminComponent}
  { path: 'collaborateur', component: PageCollabComponent},
  { path: 'chauffeur', component: PageChauffeurComponent},
  { path: 'admin', component: PageAdminComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }