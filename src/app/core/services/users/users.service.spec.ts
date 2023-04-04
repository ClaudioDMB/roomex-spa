import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { User } from '../../models/users/user.model';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should save the user', (done: DoneFn) => {
    const user = new User({
      name: 'Claudio',
      username: 'c@c.com',
      country: 'Ireland',
      postalCode: '123456',
      movieId: 'tt0120338',
    });

    service.createUser(user);
    service.getSavedUser().subscribe({
      next: (user) => {
        expect(user).toBe(user);
        done();
      },
      error: (error) => fail(error),
    });
  });
});
