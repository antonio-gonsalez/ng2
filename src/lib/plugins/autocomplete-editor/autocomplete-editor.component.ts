import { Component } from '@angular/core';
import { ViewCoreService } from '../../main/core/view/view-core.service';
import { PluginService } from '../plugin.service';
import { predicateFactory } from 'ng2-qgrid/core/services/predicate';
import { Column } from 'ng2-qgrid';

@Component({
	selector: 'q-grid-autocomplete-editor',
	templateUrl: './autocomplete-editor.component.html',
	providers: [PluginService]
})
export class AutocompleteEditorComponent {
	options: any[] = [];

	context: { $implicit: AutocompleteEditorComponent } = {
		$implicit: this
	};

	constructor(
		private plugin: PluginService,
		private view: ViewCoreService
	) {
	}

	filter(search: string) {
		const test = predicateFactory(search);
		const getLabel = this.itemLabelFactory(this.cell.column);
		this.options = this.items.filter(item => test(getLabel(item)));
	}

	reset() {
		this.options = [];
	}

	get items() {
		return (this.cell.fetch as any).result;
	}

	get title() {
		return this.cell.column.title;
	}

	get value() {
		return this.cell.value;
	}

	set value(value) {
		this.cell.value = value;
	}

	itemLabelFactory(column: Column) {
		const { itemLabel } = column;
		if (itemLabel) {
			return (item) => {
				return itemLabel(item);
			};
		}

		return item => item;
	}

	private get cell() {
		return this.view.edit.cell;
	}
}
