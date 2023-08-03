import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  constructor(private auth:CartServiceService){

  }
  ngOnInit(): void {
    
  }

  plus(prod: any){
    //console.log(prod.qnt);
    if(prod.qnt!=5){
     prod.qnt=prod.qnt+1;
    }
    
 }
 
 minus(prod :any) {
   if(prod.qnt!=1){
     prod.qnt =prod.qnt-1;
    }
 }
   
  itemCart:any=[];

  addcart(category :any){
    let cartDataNull=localStorage.getItem('localCart');
    if(cartDataNull==null){
      let storeDataGet:any=[];
      storeDataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    }
    else{
      var id=category.productId;
      let index : number= -1;
      this.itemCart=JSON.parse(localStorage.getItem('localCart')!);
      
      for(let i=0;i<this.itemCart.length;i++){
         if(parseInt(id) === parseInt(this.itemCart[i].productId)){
           this.itemCart[i].qnt=category.qnt;
           index=i;
           break;
         }
      }
      if(index==-1){
        this.itemCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemCart))
      }
    }
    this.cartnumberFunc();
  }
  
  cartnumber:number=0;
  cartnumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart')!);
    this.cartnumber=cartValue.length;
    this.auth.cartSubject.next(this.cartnumber);
  }

  productArray = [
    {
      productId:"shoe001",
      productname:"Aadi White shoes (size:9)",
      img:"https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/q/s/g/10-mrj1914-10-aadi-white-black-red-original-imagft9kusrqxbad.jpeg?q=70",
      amt: 4000,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"shoe002",
      productname:"Aadi trecking White Shoes (size:9)",
      img:"https://rukminim2.flixcart.com/image/612/612/l1i6w7k0/shoe/y/v/b/6-mrj1906-6-aadi-white-grey-original-imagdfyfpwzywwrb.jpeg?q=70",
      amt: 4000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe003",
      productname:"Puma White Formal Pant (size:36)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/3/p/e/8-mrj2099-8-aadi-white-original-imagmkfyzuazgfam.jpeg?q=70",
      amt: 4670,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe004",
      productname:"ReeBok Shoe (size:7,8,9)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/z/l/10-gc0044-11-reebok-black-original-imagznkqwx8fhvn3.jpeg?q=70",
      amt: 3000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe005",
      productname:"Rapid Box Shoes(size:6,7,8,9,10,11)",
      img:"https://rukminim2.flixcart.com/image/612/612/kuh9yfk0/shoe/x/i/v/6-rpd134-rapidbox-white-original-imag7h6qj97vyryv.jpeg?q=70",
      amt: 567,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe006",
      productname:"Puma Running Shoes (size:8,9)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/p/a/-original-imagqe2yhkpexhvz.jpeg?q=70",
      amt: 2340,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe007",
      productname:"Puma Black Shoes(size:8,9)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/f/s/-original-imagqe2zp7pkyh5z.jpeg?q=70",
      amt: 2990,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe008",
      productname:"Rebook Shoe (size:7,8)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/x/c/2/10-gc0044-11-reebok-black-original-imagznkqjeguyzg3.jpeg?q=70",
      amt: 3400,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shoe009",
      productname:"Puma Red Shoe(size:6)",
      img:"https://rukminim2.flixcart.com/image/612/612/kzhbfrk0/shoe/w/k/8/8-mrj1808-8-aadi-red-black-original-imagbgnfkhvhn9pr.jpeg?q=70",
      amt: 3200,
      qnt:1,
      rating:"3/5",
    },
  ];
}
