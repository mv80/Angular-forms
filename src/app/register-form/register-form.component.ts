import { Component, OnInit } from '@angular/core';
import { RegisterUser , MaxNumberOfPreviosWorkPlaces } from './registerUser';

const maxNumberOfPreviosWorkPlaces = MaxNumberOfPreviosWorkPlaces;
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  constructor() { }
  user : RegisterUser;
  maxNumberOfPreviosWorkPlaces : number = MaxNumberOfPreviosWorkPlaces;
  maxDate : Date;
  minDate :Date;

  ngOnInit() {

    this.user = {
      firstName : '',
      lastName : '',
      previousWorkplaces : [{
        workPlaceName : '',
        startDate : null,
        endDate: null,
      }]
    };
    this.maxDate = new Date();
    this.minDate = new Date(1950, 0, 1);

    console.log(MaxNumberOfPreviosWorkPlaces);
  }
  register(value){
    debugger
    console.log(value)

  }
  AddWorkPlace(){
    if(this.user.previousWorkplaces.length < this.maxNumberOfPreviosWorkPlaces){
      this.user.previousWorkplaces.push({
        workPlaceName : '',
        startDate : null,
        endDate: null,
      })
    }
  }

}
