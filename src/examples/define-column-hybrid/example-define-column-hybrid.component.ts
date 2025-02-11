import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { Column } from 'ng2-qgrid';

@Component({
	selector: 'example-define-column-hybrid',
	templateUrl: 'example-define-column-hybrid.component.html',
	styleUrls: ['example-define-column-hybrid.component.scss'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDefineColumnHybridComponent {
	static id = 'define-column-hybrid';

	rows: Observable<Atom[]>;
	columns: Column[] = [{
		key: 'mass',
		title: 'should be js Mass'
	}, {
		key: 'symbol',
		title: 'shouldnt be js Symbol',
		width: 200
	}];

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
