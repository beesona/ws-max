import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header-component.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MaskSsnPipe } from '../../shared/mask-ssn.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [ 
    MaskSsnPipe,  
    HeaderComponent,
    LeftNavComponent,
    RightBarComponent,
    FooterComponent,
    ],
    exports: [
      HeaderComponent,
      LeftNavComponent,
      RightBarComponent,
      MaskSsnPipe,
      FooterComponent
    ]
})
export class NavigationModule { }
