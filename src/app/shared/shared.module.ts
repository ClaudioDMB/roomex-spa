import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, CollapseModule.forRoot()],
  exports: [MovieDetailComponent, CollapseModule],
})
export class SharedModule {}
