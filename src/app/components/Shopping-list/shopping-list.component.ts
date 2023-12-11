import { Component, OnInit } from '@angular/core';
import { Shoppinglist } from '../../Shoppinglist';
import { GetServiceService } from '../../services/get-service/get-service.service';
import { UpdateserviceService } from '../../services/update-service/updateservice.service';
import { DeleteEntryService } from '../../services/delete-entry/delete-entry.service';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppinglist!: Shoppinglist[];
  id!: number;
  imgLink!: String;
  SelectedWeekday!: String;
  weekdays = [
    "Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samnstag"
  ]
  constructor(
    private getShoppinglistService: GetServiceService,
    private deleteService: DeleteEntryService,
    private updateService: UpdateserviceService) { }

  ngOnInit(): void {
    this.getShoppinglistService.getShoppinglist().subscribe((data: Shoppinglist[]) => {
      console.log(data);
      this.shoppinglist = data;

    });
  }
  ConvertToDate(toConvert: any) {
    const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    let ConvertDate = new Date(toConvert);
    let month = ConvertDate.getUTCMonth() + 1; //months from 1-12
    let day = ConvertDate.getUTCDate();
    let weekday = ConvertDate.getDay();
    if(day < 10){
      let dayzero = "0" + day
      let output = dayzero + "." + month  + "  " + weekdays[weekday] ;
      return output
    }
    else{
    let output = day + "." + month + "  " +  weekdays[weekday];
    return output;
    }




  }
  ShowIfEntryIsDone(a:any, id: any) {
    if (a === false) {
      document.getElementById("entryIsDone" + id)!.innerHTML = '<img style="width: 26px; margin-left: 30%" class="img" src="/assets/red.png" alt="">'
    }
    else {
      document.getElementById("entryIsDone" + id)!.innerHTML = '<img style="width: 24px; margin-left 40%" class="img" src="/assets/green.png" alt="">'
    }

  }
  SetEntryToIsDone() {
    this.updateService.SetEntryToIsDone(this.id).subscribe();
    window.location.reload();
  }


  MakeButtonsVisibleOnRadioEvent(event: any) {
    this.id = event.target.value;
    console.log(this.id)

    document.getElementById("deleteEntry")!.style.visibility = "visible";
    document.getElementById("isDone")!.style.visibility = "visible";

  }


  deleteEntry() {
    this.deleteService.deleteEntry(this.id).subscribe();
    window.location.reload();

  }
  

}
