import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header-component.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [   
    HeaderComponent,
    LeftNavComponent]
})
export class NavigationModule { }
