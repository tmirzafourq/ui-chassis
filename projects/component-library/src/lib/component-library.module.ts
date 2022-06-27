import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

@NgModule({
  declarations: [ComponentLibraryComponent, UiButtonComponent],
  imports: [],
  exports: [ComponentLibraryComponent, UiButtonComponent],
})
export class ComponentLibraryModule {}
