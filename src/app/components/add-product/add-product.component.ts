import { Component } from '@angular/core';
import { Shoppinglist } from '../../Shoppinglist';
import { PostServiceService } from '../../services/post-service/post-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  shoppinglist: Shoppinglist = new Shoppinglist();
  constructor(private postService: PostServiceService) { }

  submit() {
    if(this.shoppinglist.date!)
    console.log(this.shoppinglist)
    this.postService.postEntry(this.shoppinglist).subscribe();
    window.location.reload();
  }
}
