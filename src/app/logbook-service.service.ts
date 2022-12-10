import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogbookServiceService {
  //logbook flight entries 
  items = [
    {
      flightdate: '2022-12-02',
      origin: 'ORD',
      destination: 'CHA',
      tailNumber: '357',
      time: '1.5',
      night: '0',
      landing: '1'
    },
    {
      flightdate: '2022-12-01',
      origin: 'DCA',
      destination: 'TYS',
      tailNumber: '485',
      time: '2.0',
      night: '.8',
      landing: '1'
    },
    {
      flightdate: '2022-12-01',
      origin: 'BOS',
      destination: 'LGA',
      tailNumber: '612',
      time: '1.8',
      night: '1.8',
      landing: '0'
  }
  ];

  person =
    {
      personName: 'John Doe',
      personEmail: 'JDoe@gmail.com',
      personPhone: '812-555-9898',
      personMedicalHistory: [{date:'2022-10-12', class:'1st class'}],
      personLicenseHistory: []
    };

  //store the categories of flight time
  totalFlightTime = this.getTotalFlightTime();
  totalNightTime = this.getTotalNightTime();
  totalLandings = this.getTotalLandings();

  constructor() { }

  //sums the total flight time
  getTotalFlightTime():number{
    let totalFlightTime = 0;
    if (this.items.length != 0){
      for (var item of this.items){
        totalFlightTime += Number(item.time);
    }
    
    }
    return totalFlightTime;
  } 

  //sums the total night flight hours
  getTotalNightTime():number{
    let totalNightTime = 0;
    if (this.items.length != 0){
      for (var item of this.items){
        totalNightTime += Number(item.night);
      }
    }
    return totalNightTime;
  }

  //sums the total number of landings
  getTotalLandings():number{
    let totalLandings = 0;
    if (this.items.length != 0){
      for (var item of this.items){
        totalLandings += Number(item.landing);
      }
    }
    return totalLandings;
  }

  //update flight time totals after changes to logbook
  updateFlightTotals(){
    this.totalFlightTime = this.getTotalFlightTime();
    this.totalNightTime = this.getTotalNightTime();
    this.totalLandings = this.getTotalLandings();
  }

  //returns list of flights
  getItems(){
    return this.items;
  }

  //returns person information
  getPerson(){
    return this.person;
  }

  //remove flight from logbook
  removeItem(index){
    this.items.splice(index, 1);
    this.updateFlightTotals();
  }

  //add flight to logbook
  addItem(item){
    this.items.push(item);
    this.updateFlightTotals();
  }

  //change  logbook flight entry
  updateItem(item, index){
    this.items[index] = item;
    this.updateFlightTotals();
  
  }

  addMedical(item){
    this.person.personMedicalHistory.push(item);
  }

  getMedicalHistory(){
    return this.person.personMedicalHistory;
  }

  getLicenseInformation(){
    return this.person.personLicenseHistory;
  }

  addLicense(item){
    this.person.personLicenseHistory.push(item);
  }

  //update person name, email, phone
  updatePerson(person){
    this.person.personName = person.personName;
    this.person.personEmail = person.personEmail;
    this.person.personPhone = person.personPhone;
    
  }


}
