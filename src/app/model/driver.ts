export class Driver {

    driverId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    address: string;
    chargesPerDay: number;
    licenseNo: string;

    constructor(driverId:number,firstName: string, lastName: string, contactNumber: string, email: string, address: string, chargesPerDay: number, licenseNo: string) {
        this.driverId = driverId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.address = address;
        this.chargesPerDay = chargesPerDay;
        this.licenseNo = licenseNo;
    }


    toString():string{
        return "driverId: "+this.driverId+", firstName : "+this.firstName+", lastName: "+this.lastName+", ContactNo: "+this.contactNumber+", eMAIL :"+this.email+", address :"+this.address+", charges /day :"+this.chargesPerDay+", license :"+this.licenseNo;
    }
}