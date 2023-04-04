import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import Core modules in the AppModule only.'
      );
    }
  }
}
