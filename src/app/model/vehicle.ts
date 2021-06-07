import { Driver } from "./driver";

export class Vehicle {

    vehicleId:number;
    driver:Driver;
    vehicleNumber:string;
    type:string;
    category:string;
    description:string;
    location:string;
    capacity:string;
    chargesPerKM:number;
    fixedCharges:number;

    constructor(vehicleId: number, driver: Driver, vehicleNumber: string, type: string, category: string, description: string,
        location: string, capacity: string, chargesPerKM: number, fixedCharges: number) {
        this.vehicleId = vehicleId;
        this.driver = driver;
        this.vehicleNumber = vehicleNumber;
        this.type = type;
        this.category = category;
        this.description = description;
        this.location = location;
        this.capacity = capacity;
        this.chargesPerKM = chargesPerKM;
        this.fixedCharges = fixedCharges;
    }

}