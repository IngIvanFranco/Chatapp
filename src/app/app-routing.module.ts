import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'chat', component:ChatComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
