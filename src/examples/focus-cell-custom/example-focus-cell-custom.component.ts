import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { GridComponent, Grid } from 'ng2-qgrid';

@Component({
	selector: 'example-focus-cell-custom',
	templateUrl: 'example-focus-cell-custom.component.html',
	styleUrls: ['example-focus-cell-custom.component.scss'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleFocusCellCustomComponent {
	static id = 'focus-cell-custom';

	@ViewChild(GridComponent) grid: GridComponent;
	rows: Observable<Atom[]>;

	constructor(dataService: DataService, private qgrid: Grid) {
		this.rows = dataService.getAtoms();
	}

	focus(rowIndex) {
		const { model } = this.grid;
		const gridService = this.qgrid.service(model);

		// navigate to the 2nd page to the bottom
		gridService.focus(Number.parseInt(rowIndex, 10));
	}
}
