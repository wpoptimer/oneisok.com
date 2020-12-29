import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MorePage } from './more';
import { SharedModule } from '../../shared.module';
import { LocationSelectPageModule } from '../location-select/location-select.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FormsModule,
    LocationSelectPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: MorePage
      }
    ])
  ],
  declarations: [MorePage]
})
export class MorePageModule {}
