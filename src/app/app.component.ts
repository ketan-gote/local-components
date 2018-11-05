import { Component, HostListener, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  currentdatetime : Date;
  userid : string = "2";

  dropdowndata : any[];
  private value: string = 'Hello World';
  gridata : any[];
  constructor(private httpClient : HttpClient){
    this.dropdowndata = [];
    this.dropdowndata.push({'id':1,'value':'India'});
    this.dropdowndata.push({'id':1,'value':'USA'});
    this.dropdowndata.push({'id':1,'value':'UK'});
  }

  ngOnInit(){
    let response : any [];
    this.gridata = [{"id":"1","firstName":"Araf","lastName":"Karsh","genderId":"1","age":35,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"3","countryName":"India","stateName":"Kerala","gender":"Male","deptName":"Admin"},{"id":"2","firstName":"Ketan","lastName":"Gote","genderId":"1","age":35,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Male","deptName":"HR"},{"id":"3","firstName":"Araf","lastName":"Jadhav","genderId":"1","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"6","countryName":"India","stateName":"Rajasthan","gender":"Male","deptName":"Finance"},{"id":"4","firstName":"Dattaram","lastName":"Gawas","genderId":"1","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Male","deptName":"Admin"},{"id":"5","firstName":"Rashmi","lastName":"Thakkar","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"4","countryName":"India","stateName":"Gujrat","gender":"Female","deptName":"Finance"},{"id":"6","firstName":"Deepali","lastName":"Arvind","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"HR"},{"id":"7","firstName":"Ashwini","lastName":"Arge","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"Admin"},{"id":"8","firstName":"Manisha","lastName":"Boddu","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"5","countryName":"India","stateName":"Tamil Nadu","gender":"Female","deptName":"Finance"},{"id":"9","firstName":"Ankita","lastName":"Jain","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"3","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"Finance"},{"id":"10","firstName":"Kedar","lastName":"Kokil","genderId":"2","age":25,"phone":"0987654321","email":"abcd@abc.com","departmentId":"2","countryId":"356","stateId":"1","countryName":"India","stateName":"Maharastra","gender":"Female","deptName":"HR"}];
  }

  addData(){
    debugger;
    this.gridata.push({"id":new Date().getTime(),"firstName":"Araf","lastName":"Karsh","genderId":"1","age":35,"phone":"0987654321","email":"abcd@abc.com","departmentId":"1","countryId":"356","stateId":"3","countryName":"India","stateName":"Kerala","gender":"Male","deptName":"Admin"});
    //this.cd.markForCheck();
  }
  currentDate(){
    this.currentdatetime = new Date();
  }

  changeTitle(){
    //this.title = "Title Changed On "+new Date().getTime()
  }
}
