import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
    ChatViewComponent,
    SelectComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  exports: [
    LogoComponent,
    GoogleButtonComponent,
    NotFoundComponent,
    ChatViewComponent,
    SelectComponent,
  ],
})
export class SharedModule {}
