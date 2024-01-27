import { Component, OnInit } from '@angular/core';
import { Shoppinglist } from '../../Shoppinglist';
import { GetService } from '../../services/get-service/get-service.service';
import { UpdateService } from '../../services/update-service/update.service';
import { DeleteEntryService } from '../../services/delete-entry/delete-entry.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppinglist!: Shoppinglist[];
  id!: number;
  weekdays = [
   "Sonntag", "Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"
  ]
  SelectedWeekday: String = this.weekdays[this.getTodaysWeekday()];

  constructor(
    private getService: GetService,
    private deleteService: DeleteEntryService,
    private updateService: UpdateService) { }

  ngOnInit(): void {
    this.getService.getShoppinglist().subscribe((data: Shoppinglist[]) => {
      console.log(data);
      this.shoppinglist = data;
      this.getTodaysWeekday();

    });

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


  RadioEvent(event: any) {
    this.id = event.target.value;
    console.log(this.id)
  }


  deleteEntry() {
    this.deleteService.deleteEntry(this.id).subscribe();
    window.location.reload();

  }
  getTodaysWeekday(){
    var d=new Date();
    console.log(d.getDay());
    return d.getDay()
    
  }
  

}
