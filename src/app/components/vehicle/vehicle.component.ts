import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from 'src/app/model/driver';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {


  public location = ["Mumbai", "Delhi", "Kolkata", "Lucknow"];

  public type = ["Car", "Bus"];

  public category = ["AC", "NON-AC"];

  public vehicleSearchForm: FormGroup;
  public vehicle: Vehicle | any;
  public errMsg;
  public vehicles: Vehicle[];
  vehicleForm: FormGroup;
  /* isUpdate: boolean = false; */
  vehicleDriverSearchForm: FormGroup;
  public vehicledriver:Vehicle[]; 

  constructor(private fb: FormBuilder, private _vehicleService: VehicleService) {
    this.vehicles = new Array();
    /* this.vehicledriver=new Array(); */
  }

  ngOnInit(): void {

    this.vehicleForm = this.fb.group({
      //vehicleId: ['', Validators.required],
      driverId: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      capacity: ['', Validators.required],
      chargesPerKM: ['', Validators.required],
      fixedCharges: ['', Validators.required],
    });


    this.vehicleSearchForm = this.fb.group({
      searchId: ['', Validators.required],
    });

    this.vehicleDriverSearchForm = this.fb.group({
      searchDriverId: ['', Validators.required],
    });
 
  }


  addVehicle(): void {
    let dr: Driver = new Driver(
      this.vehicleForm.controls.driverId.value,
      "",
      "",
      "",
      "",
      "",
      0,
      ""
    );

    let vh: Vehicle = new Vehicle(
      0,
      dr,
      this.vehicleForm.controls.vehicleNumber.value,
      this.vehicleForm.controls.type.value,
      this.vehicleForm.controls.category.value,
      this.vehicleForm.controls.description.value,
      this.vehicleForm.controls.location.value,
      this.vehicleForm.controls.capacity.value,
      this.vehicleForm.controls.chargesPerKM.value,
      this.vehicleForm.controls.fixedCharges.value
    );


    this._vehicleService.addVehicle(vh).subscribe((data) => {
      alert(JSON.stringify(data));
      alert("Succesfully Added Vehicle : " + JSON.stringify(data.vehicleNumber));
      alert("Please Remember Your Vehicle Id : " + JSON.stringify(data.vehicleId));
    });
  }

  findVehicleById() {
    this._vehicleService.getVehicleById(this.vehicleSearchForm.controls.searchId.value).subscribe((data: any) => {
      this.vehicle = data;
    },
      error => {
        alert("Vehicle Id " + this.vehicleSearchForm.controls.searchId.value + " Not Found");
      });
  }

  findVehicle() {
    this._vehicleService.getVehicle().subscribe(data => {
      this.vehicles = data,
        error => this.errMsg = error
    });
  }



  findVehicleByDriverId(){

    this._vehicleService.getVehicleByDriverId(this.vehicleDriverSearchForm.controls.searchDriverId.value).subscribe((data: any) => {
      this.vehicledriver = data;
    },
      error => {
        alert("Driver Id " + this.vehicleDriverSearchForm.controls.searchDriverId.value + " Not Found");
      });

  }


}
