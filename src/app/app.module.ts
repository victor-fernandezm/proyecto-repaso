import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventsComponent } from './events/events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { HwServiceComponent } from './hw-service/hw-service.component';
import { DirectivesComponent } from './directives/directives.component';
import { SingleParamComponent } from './single-param/single-param.component';
import { MultiParamComponent } from './multi-param/multi-param.component';
import { SingleParamSenderComponent } from './single-param-sender/single-param-sender.component';
import { MultiParamSenderComponent } from './multi-param-sender/multi-param-sender.component';
import { CommListaNumsComponent } from './comm-lista-nums/comm-lista-nums.component';
import { CommOperacionesNumComponent } from './comm-operaciones-num/comm-operaciones-num.component';
import { CommEntradaNumComponent } from './comm-entrada-num/comm-entrada-num.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    OneWayBindingComponent,
    EventsComponent,
    TwoWayBindingComponent,
    HwServiceComponent,
    DirectivesComponent,
    SingleParamComponent,
    MultiParamComponent,
    SingleParamSenderComponent,
    MultiParamSenderComponent,
    CommListaNumsComponent,
    CommOperacionesNumComponent,
    CommEntradaNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
