import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {
	MatCardModule,
	MatSelectModule,
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatListModule,
	MatButtonModule,
	MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ExampleModule, EXAMPLES, APP_ROUTES } from '../examples/example.module';

import { FilterSearchPipe } from './app.filter.pipe';
import { PipeModule } from 'ng2-qgrid';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './app.highlight.pipe';

@NgModule({
	declarations: [
		AppComponent,
		FilterSearchPipe,
		HighlightPipe
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSelectModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatButtonModule,
		RouterModule.forRoot([{
			path: '',
			redirectTo: 'action-bar-basic',
			pathMatch: 'full'
		}]),
		PipeModule,
		ExampleModule,
		FormsModule
	],
	bootstrap: [AppComponent],
	entryComponents: EXAMPLES
})
export class AppModule {
	constructor(router: Router) {
		router.config.unshift(...APP_ROUTES);
	}
}
