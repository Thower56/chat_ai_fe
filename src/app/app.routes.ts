import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

export const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
];
