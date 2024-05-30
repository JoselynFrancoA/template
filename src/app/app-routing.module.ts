import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

const routes: Routes = [
  {path:'template', component:TemplateFormsComponent},
  {path:'**', pathMatch:'full', redirectTo:'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
