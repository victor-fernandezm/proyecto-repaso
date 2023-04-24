import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventsComponent } from './events/events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HwServiceComponent } from './hw-service/hw-service.component';

const routes: Routes = [
	{path: "interpolacion", component: InterpolationComponent},
	{path: "owb", component: OneWayBindingComponent},
	{path: "eventos", component: EventsComponent},
	{path: "twb", component: TwoWayBindingComponent},
	{path: "servicio", component: HwServiceComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
