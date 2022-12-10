import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LogbookServiceService } from '../logbook-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ionViewWillEnter(){
    this.totalFlightTime = this.dataService.getTotalFlightTime();
    this.totalNightTime = this.dataService.getTotalNightTime();
    this.totalLandings = this.dataService.getTotalLandings();

  }
  totalFlightTime = this.dataService.getTotalFlightTime();
  totalNightTime = this.dataService.getTotalNightTime();
  totalLandings = this.dataService.getTotalLandings();



  constructor(public navCtrl: NavController, public dataService: LogbookServiceService) {}

}
