import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LogbookServiceService } from './logbook-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertCtrl: AlertController, public dataService: LogbookServiceService) { }
  
  //shows prompt for adding or updating flight information
  async showPrompt(item?, index?){
    const prompt = await this.alertCtrl.create({
      header: item? 'Edit Flight' : 'Add Flight',
      message: item? 'Edit flight details:' : 'Add Flight Details',
      inputs: [
        
        {
          name: 'flightdate',
          placeholder: 'Date',
          value: item? item.flightdate : null,
          type:'date'
        },
        {
          name: 'origin',
          placeholder: 'Origin',
          value: item? item.origin : null
        },
        {
          name: 'destination',
          placeholder: 'Destination',
          value: item? item.destination : null
        },
        {
          name: 'tailNumber',
          placeholder: 'Tail Number',
          value: item? item.tailNumber : null
        },
        {
          name: 'time',
          placeholder: 'Total Flight Hours',
          value: item? item.time : null,
          type: 'number',
          min: 0
        },
        {
          name: 'night',
          placeholder: 'Total Night Hours',
          value: item? item.night : null,
          type: 'number',
          min: 0
        },
        {
          name: 'landing',
          placeholder: 'Number of Landings',
          value: item? item.landing : null,
          type: 'number',
          min: 0,
          max: 1
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=>{
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=>{
            console.log('Save clicked', item);
            if (index !== undefined){
              this.dataService.updateItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    await prompt.present();
  }

  //shows prompt for adding or updating flight information
  async showPersonPrompt(person){
    const prompt = await this.alertCtrl.create({
      header:  'Edit Personal Details',
      message: 'Edit personal details:',
      inputs: [
        
        {
          name: 'personName',
          placeholder: 'Name',
          value: person.personName
        },
        {
          name: 'personEmail',
          placeholder: 'Email',
          value: person.personEmail
        },
        {
          name: 'personPhone',
          placeholder: 'Phone Number',
          value: person.personPhone
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=>{
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: person=>{
            console.log('Save clicked', person);
            this.dataService.updatePerson(person);
            
            }
        }
      ]
    });
    await prompt.present();
  }

  //shows prompt for confirming deleting flight data
  async removeItemPrompt(index){
    const prompt = await this.alertCtrl.create({
      header: "Confirm Delete",
      message: "Are you sure you want to delete this flight?",
      buttons: [
        {
          text: 'No',
          handler: data=>{
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: item=>{
            console.log('Yes clicked');
            this.dataService.removeItem(index);            
          }
        }
      ]
    });
    await prompt.present();
  }

  async showMedicalPrompt(){
    const prompt = await this.alertCtrl.create({
      header:  'Add FAA Medical Details',
      message: 'Add details:',
      inputs: [
        
        {
          name: 'date',
          placeholder: 'Date',
          type: 'date'
        },
        {
          name: 'class',
          placeholder: 'Class',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=>{
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=>{
            console.log('Save clicked', item);
            this.dataService.addMedical(item);
            
            }
        }
      ]
    });
    await prompt.present();
  }

  async showLicensePrompt(){
    const prompt = await this.alertCtrl.create({
      header:  'Add License Details',
      message: 'Add details:',
      inputs: [
        
        {
          name: 'licenseNumber',
          placeholder: 'License Number'
        },
        {
          name: 'licenseType',
          placeholder: 'License Type Rating',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=>{
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=>{
            console.log('Save clicked', item);
            this.dataService.addLicense(item);
            
            }
        }
      ]
    });
    await prompt.present();
  }
}
