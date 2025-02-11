import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../../template/template.module';
import { LiveCellComponent } from './live-cell.component';
import { PipeModule } from '../../../lib/pipes/pipe.module';

@NgModule({
	declarations: [
		LiveCellComponent,
	],
	exports: [
		LiveCellComponent
	],
	imports: [
		TemplateModule,
		CommonModule,
		PipeModule
	]
})
export class LiveCellModule {
}
