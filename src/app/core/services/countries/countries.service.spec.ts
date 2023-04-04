import { TestBed } from "@angular/core/testing";

import { CountriesService } from "./countries.service";
import { HttpClientModule } from "@angular/common/http";

describe("CountriesService", () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CountriesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve countries", (done: DoneFn) => {
    service.getCountries().subscribe({
      next: (countries) => {
        expect(countries).toEqual([
          { name: "Ireland" },
          { name: "United Kingdom" },
        ]);
        done();
      },
      error: (error) => fail(error),
    });
  });
});
