import { Component,OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit  {
  
  constructor(private auth:CartServiceService){}
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
      productId:"shirt001",
      productname:"Puma White Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/kv5kfww0/shirt/o/a/c/xl-k-313-briny-lions-original-imag84cufxvuptwf.jpeg?q=70",
      amt: 4000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt002",
      productname:"Puma Printed Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/b/6/m-men-slim-fit-printed-spread-collar-casual-shirt-qugue-original-imagjhg2zhgu3fpa.jpeg?q=70",
      amt: 1500,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt003",
      productname:"Mildin Formal Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/i/h/xxl-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imaggvvnywmgthyq.jpeg?q=70",
      amt: 1500,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt004",
      productname:"Red Check Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/shirt/4/0/a/5xl-pk19sh09r-surhi-original-imaft953scfuvus8.jpeg?q=70",
      amt: 1800,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt005",
      productname:"Striped Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"3.5/5",
    },
    {
      productId:"shirt006",
      productname:"Pink Striped Shirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/e/q/xxl-st10-vebnor-original-imagzezrqcgghjjg.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt007",
      productname:"Blue Plain Shirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt008",
      productname:"Yellow Shirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/2/k/3xl-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagfh9bespwscun.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt009",
      productname:"Blue Striped Shirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/l2nmnww0/shirt/x/j/8/m-men-regular-super-slim-fit-striped-casual-shirt-combraided-original-imagdyy4rkqyphx3.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt010",
      productname:"Mix Striped Shirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/w/2/d/l-new-good-looking-printed-casual-shirt-quqzaka-original-imagkbd2hww4hy4t.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt011",
      productname:" Puma TShirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/q/n/m-67504501-puma-original-imaghu4uh2f5uyqw.jpeg?q=70",
      amt: 1800,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"shirt012",
      productname:"Puma RCB TShirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/l0mr7gw0/t-shirt/o/p/d/-original-imagcdga4yubvwr8.jpeg?q=70",
      amt: 1999,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt013",
      productname:"Puma Black TShirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/1/f/4/-original-imagpbekzhzfgzgx.jpeg?q=70",
      amt: 1909,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt014",
      productname:"Nike TShirt (size:M)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/8/e/m-dx2116-101-nike-original-imaghg3zkvcbx5yy.jpeg?q=70",
      amt: 1900,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt015",
      productname:"Black Nike TShirt (size:L)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/9/3/-original-imaghg2hdhzwysdh.jpeg?q=70",
      amt: 1090,
      qnt:1,
      rating:"4/5",
    },
    {
      productId:"shirt016",
      productname:"Yellow Puma TShirt (size:S)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/o/e/-original-imagk3ffbv6uxkzh.jpeg?q=70",
      amt: 1000,
      qnt:1,
      rating:"4/5",
    },
    
  ];
}
