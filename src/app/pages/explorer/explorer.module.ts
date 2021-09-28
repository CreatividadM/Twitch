import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorerPageRoutingModule } from './explorer-routing.module';

import { ExplorerPage } from './explorer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorerPageRoutingModule
  ],
  declarations: [ExplorerPage]
})
export class ExplorerPageModule {}
