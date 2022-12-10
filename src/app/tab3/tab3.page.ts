import { Component } from '@angular/core';
import { LogbookServiceService } from '../logbook-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = "Account";

  person = this.loadPerson();

  constructor(public dataService: LogbookServiceService, public inputDialogService: InputDialogService) {}

  updatePerson(){
    this.inputDialogService.showPersonPrompt(this.person);
    //this.person = this.loadPerson();
  }

  loadPerson(){
    return this.dataService.getPerson();
    
  }

  addMedical(){
    this.inputDialogService.showMedicalPrompt();
  }

  addLicense(){
    this.inputDialogService.showLicensePrompt();
  }

  getMedicalHistory(){
    return this.dataService.getMedicalHistory();
  }

  getLicenses(){
    return this.dataService.getLicenseInformation();
  }

}
