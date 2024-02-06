import { Component } from '@angular/core';
import { Shoppinglist } from '../../Shoppinglist';
import { PostService } from '../../services/post-service/post-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  weekdays = [
   "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
  ]
  shoppinglist: Shoppinglist = new Shoppinglist();
  constructor(private postService: PostService) { }

  addNewProduct() {
    if (this.shoppinglist.weekday!)
    this.shoppinglist.isDone= false
      console.log(this.shoppinglist)
    this.postService.postShoppinglistItem(this.shoppinglist).subscribe();
    setTimeout(this.reload, 500

      ) 
  }  
  reload(){
    window.location.reload()
  }
}
