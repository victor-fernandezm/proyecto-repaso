import { Component } from '@angular/core';

enum TripleEstado {
	YES,
	NO,
	MAYBE
}

@Component({
	selector: 'app-directives',
	templateUrl: './directives.component.html',
	styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
	valor: boolean = true;

	listaNums: number[] = this.range(0, 10);

	range(min: number, max: number, step: number = 1): number[] {
		let out: number[] = [];
		for (let i = min; i < max; i += step) {
			out.push(i);
		}
		return out;
	}

	triState: TripleEstado = TripleEstado.YES;
	get tripleEstadoOptions(): [number, string][] {
		let keys: string[] = Object.keys(TripleEstado);
		return keys.slice(keys.length/2).map((v,i,arr) => [i,v]);
	}
}
