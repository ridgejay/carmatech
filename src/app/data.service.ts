import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  carInfo1 = [
    {
      name: 'BMW 5 Series',
      price: '$30,000',
      year: 2021,
      mileage: 500,
      image: "src/assets/img/bmw.jpg",
    },
  ];

  getCar1(): any[] {
    return this.carInfo1;
  }

  constructor() {}
}
