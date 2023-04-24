import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventsComponent } from './events/events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HwServiceComponent } from './hw-service/hw-service.component';
import { DirectivesComponent } from './directives/directives.component';
import { SingleParamComponent } from './single-param/single-param.component';
import { MultiParamComponent } from './multi-param/multi-param.component';
import { SingleParamSenderComponent } from './single-param-sender/single-param-sender.component';
import { MultiParamSenderComponent } from './multi-param-sender/multi-param-sender.component';

const routes: Routes = [
	{path: "interpolacion", component: InterpolationComponent},
	{path: "owb", component: OneWayBindingComponent},
	{path: "eventos", component: EventsComponent},
	{path: "twb", component: TwoWayBindingComponent},
	{path: "servicio", component: HwServiceComponent},
	{path: "directivas", component: DirectivesComponent},
	{path: "single", component: SingleParamSenderComponent},
	{path: "single/:id", component: SingleParamComponent},
	{path: "multi", component: MultiParamSenderComponent},
	{path: "multi/receive", component: MultiParamComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
