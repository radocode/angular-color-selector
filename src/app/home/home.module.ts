import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ColorsService } from './colors.service';
import { ColoresSelectedComponent } from '@app/colores-selected/colores-selected.component';
import { ColoresGridComponent } from '@app/colores-grid/colores-grid.component';
import { ColoresDetailComponent } from '@app/colores-detail/colores-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ColoresGridComponent,
    ColoresSelectedComponent,
    ColoresDetailComponent,
  ],
})
export class HomeModule {}
