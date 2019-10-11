import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' }, // 重定向路由
  { path: '**', component: PageNotFoundComponent }, // 通配符路由
  { path: 'message', component: MessageBoxComponent, outlet: 'popup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
