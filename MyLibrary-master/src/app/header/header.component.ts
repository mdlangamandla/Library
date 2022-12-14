import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  public searchTerm:string='';
  constructor(private CartService:cartService) { }

  ngOnInit(): void {
    this.CartService.getProduct()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.CartService.search.next(this.searchTerm)
    
  }

}
