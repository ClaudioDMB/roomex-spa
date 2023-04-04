export class User {
  constructor(data: User){
    Object.assign(this, data);
  }
  name: string;
  username: string;
  country: string;
  postalCode?: string;
  movieId: string;
}
