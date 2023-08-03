import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
    
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
      productId:"pant001",
      productname:"Puma White Formal Pant (size:36)",
      img:"https://rukminim2.flixcart.com/image/612/612/l51d30w0/trouser/1/h/t/34-el-p-cot-el-cielo-original-imagfszgzyjxqy8y.jpeg?q=70",
      amt: 4000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"pant002",
      productname:"Puma Printed Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/a/o/x/30-chino-grey-urbano-fashion-original-imagjzqfqgtbrzta.jpeg?q=70",
      amt: 1500,
      qnt:1,
      rating:"4/5",
    },{
      productId:"pant003",
      productname:"Red Check Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/kydb3ww0/trouser/v/q/4/34-vhtftulf193453-van-heusen-original-imagamkqze9mhfcd.jpeg?q=70",
      amt: 1800,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"pant004",
      productname:"Striped Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/q/j/x/28-kctr-frml-99-carbon-fubar-original-imagggdzfwpxpfqz.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"pant005",
      productname:"Pink Striped Shirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/d/y/u/38-hljn001422-highlander-original-imag5fy9b4xjsnrn-bb.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"pant006",
      productname:"Blue Plain Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/w/r/p/32-fp-half-strip-fude-pride-original-imagmyggqmxrgh6n.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
  ];
}
