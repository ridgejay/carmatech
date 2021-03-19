import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [DataService]
})
export class CarComponent implements OnInit {

  carInfo1Rec:any[]=[];

  getCarInfoFromServ1() {
    this.carInfo1Rec = this.http.getCar1()
  }

  constructor(private http: DataService) { }

  ngOnInit(): void {
  }

}
