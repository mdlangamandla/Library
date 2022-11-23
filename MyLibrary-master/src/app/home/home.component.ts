import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import { cartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList : any;
  public filterCategory:any;
  searchKey:string="";
  constructor(private api :ApiService, private CartService:cartService){}
  ngOnInit():void{
    this.getAll()
    this.CartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
  
  getAll(){
    
  }
  getArt(){}
  getBiographies(){}
  getBusiness(){}
  getChildrensbook(){}
  getComics(){}
  getComputers(){}
  getFiction(){}
  getHealth(){}
  getMystery(){}
  getRomance(){}
  getScience(){}




}


 