import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { DirectMessagePage } from './direct-message';

@NgModule({
  declarations: [
    DirectMessagePage,
  ],
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DirectMessagePage
      }
    ])
  ],
  exports: [
    DirectMessagePage
  ]
})
export class DirectMessagePageModule {}
