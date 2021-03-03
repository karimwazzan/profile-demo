import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { ProfileDetailsComponent } from '@components/profile-details/profile-details.component';
import { ProfileListComponent } from '@components/profile-list/profile-list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '', // child route path
        component: ProfileListComponent, // child route component that the router renders
      },
      {
        path: ':id',
        component: ProfileDetailsComponent, // another child route component that the router renders
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
