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
    "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
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
  ShowIfEntryIsDone(isDone: any, id: any) {
    if (isDone === false) {
      const isDoneImg = document.getElementById("entryIsDone" + id)
      isDoneImg!.innerHTML = '<img style="width: 26px; float: right" class="img" src="/assets/red.png" alt="">'
      return isDoneImg
    }
    const isDoneImg = document.getElementById("entryIsDone" + id)
    isDoneImg!.innerHTML = '<img style="width: 24px; float: right" class="img" src="/assets/green.png" alt="">'
    return isDoneImg

  }
  SetEntryToIsDone() {
    this.updateService.SetEntryToIsDone(this.id).subscribe();
    setTimeout(this.reload, 500

    )
  }
  reload() {
    window.location.reload()
  }

  RadioEvent(event: any) {
    this.id = event.target.value;
    console.log(this.id)
  }


  deleteEntry() {
    this.deleteService.deleteEntry(this.id).subscribe();
    setTimeout(this.reload, 500
    )
  }
  getTodaysWeekday() {
    var today = new Date();
    console.log(today.getDay());
    return today.getDay()
  }
}
