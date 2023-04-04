import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserFormComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    SharedModule
  ],
  providers: [MoviesService, CountriesService],
})
export class UserModule {}
