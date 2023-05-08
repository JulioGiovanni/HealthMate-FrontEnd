import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { LogoComponent } from './components/logo/logo.component';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectComponent,
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
    ChatViewComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    SelectComponent,
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
    ChatViewComponent,
  ],
})
export class SharedModule {}
