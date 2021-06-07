import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public drivers: Driver[];
  public errMsg;
  public driver: Driver | any;
  driverForm: FormGroup;
  driverSearchForm: FormGroup;
  isUpdate: boolean = false;


  constructor(private fb: FormBuilder, private _driverService: DriverService) {
    this.drivers = new Array();
  }

  ngOnInit() {

    this.driverForm = this.fb.group({
      //driverId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', [Validators.required,Validators.pattern]],
      email: ['', [Validators.required,Validators.pattern]],
      address: ['', Validators.required],
      chargesPerDay: ['', Validators.required],
      licenseNo: ['', Validators.required],
    });

    this.driverSearchForm = this.fb.group({
      searchId: ['', Validators.required],
    });

  }

  addDriver(): void {
    let dr: Driver = new Driver(
      this.driverForm.controls.driverId.value,
      this.driverForm.controls.firstName.value,
      this.driverForm.controls.lastName.value,
      this.driverForm.controls.contactNumber.value,
      this.driverForm.controls.email.value,
      this.driverForm.controls.address.value,
      this.driverForm.controls.chargesPerDay.value,
      this.driverForm.controls.licenseNo.value);

    this._driverService.addDriver(dr).subscribe(data => {
      alert("Please Remember Your Driver Id : " + JSON.stringify(data.driverId));
      //this.drivers.push(dr);
    });
  }

  findDriver() {
    this._driverService.getDriver().subscribe(data => {
      this.drivers = data,
        error => this.errMsg = error
    });
  }

  
  findDriverById() {
    this._driverService.getDriverById(this.driverSearchForm.controls.searchId.value).subscribe((data: any) => {
      this.driver = data;
    },
    error => {alert("Driver Id "+ this.driverSearchForm.controls.searchId.value +" Not Found");
    });
  }


  updateDriver(driverId: number) {
    alert("Driver id "+driverId);
    let dr = this.drivers.find(d => d.driverId == driverId)
    alert("Fetching details of Driver Id : " + dr.driverId);
    this.driverForm = this.fb.group({
      driverId: [dr.driverId, Validators.required],
      firstName: [dr.firstName, Validators.required],
      lastName: [dr.lastName, Validators.required],
      contactNumber: [dr.contactNumber, Validators.required],
      email: [dr.email, Validators.required],
      address: [dr.address, Validators.required],
      chargesPerDay: [dr.chargesPerDay, Validators.required],
      licenseNo: [dr.licenseNo, Validators.required],
    });
    // alert(`Driver Updated Successfully! ${driverId}`)
    this.isUpdate = true;
  }

  saveDriver(): void {
    let dr: Driver = this.driverForm.value;
    //logic for saving the driver
    if (!this.isUpdate) {
      this._driverService.addDriver(dr)
        .subscribe(data => {
          alert("Please Remember Your Driver Id : " + JSON.stringify(data.driverId));
          alert("Succesfully Added Driver : " + JSON.stringify(data.firstName));
        });
    }
    //updating the driver
    else {
      alert("Updating Driver Id " + JSON.stringify(dr.driverId));
      this._driverService.updateDriver(dr).subscribe(data => {
        alert("Driver " + JSON.stringify(data.driverId) + " is Updated");
        this._driverService.getDriver().subscribe(d => {
          this.driver = dr;
        });
      });
      this.isUpdate = false;
    }
    this.driverForm.reset();

  }

}
