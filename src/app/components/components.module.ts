import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderViewComponent } from './header-view/header-view.component';
import { DescrittionComponent } from './descrittion/descrittion.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderViewComponent,
    DescrittionComponent,
    KeyboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderViewComponent,
    DescrittionComponent,
    KeyboardComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
