import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { LogbookServiceService } from '../logbook-service.service';
import { InputDialogService } from '../input-dialog.service';
import { Printer, PrintOptions} from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Summary";


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: LogbookServiceService, public inputDialogService: InputDialogService, private printer: Printer) {}

  loadItems(){
    return this.dataService.getItems();
  }

  updateItem(item, index){
    console.log("Updating item -", item);
    this.inputDialogService.showPrompt(item, index);
  }

  removeItem(item, index){
    console.log('Removing item -', item);
    this.inputDialogService.removeItemPrompt(index);
  }

  addItem(){
    console.log("Adding item");
    this.inputDialogService.showPrompt();   
  }

  print() {
    this.printer.isAvailable().then((onSuccess: any) => {
    let content = document.getElementById('printer').innerHTML;
    let options: PrintOptions = {
    name: 'Logbook Summary',
    duplex: true,
    orientation: "portrait",
    monochrome: true
    };
    this.printer.print(content, options).then((value: any) => {
    console.log('value:', value);
    }, (error) => {
    console.log('eror:', error);
    });
    }, (err) => {
    console.log('err:', err);
    });
  }

}
