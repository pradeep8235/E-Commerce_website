import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

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
      productId:"watch001",
      productname:"FastTrack",
      img:"https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70",
      amt: 3000,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch002",
      productname:"Sonata",
      img:"https://rukminim2.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/k/u/t/c-77085pp04-sonata-original-imaf8qx7tstcg36n.jpeg?q=70",
      amt: 3600,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch002",
      productname:"Sonata",
      img:"https://rukminim2.flixcart.com/image/612/612/k4rcmfk0pkrrdj/watch-refurbished/k/u/t/c-77085pp04-sonata-original-imaf8qx7tstcg36n.jpeg?q=70",
      amt: 3600,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch003",
      productname:"Peter England",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/f/2/-original-imagrdzghye4wtqq.jpeg?q=70",
      amt: 1600,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch004",
      productname:"Rustet",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/q/u/-original-imaghny5gh93xy5f.jpeg?q=70",
      amt: 1300,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch005",
      productname:"LimeStone",
      img:"https://rukminim2.flixcart.com/image/612/612/jwzabgw0/watch/c/h/g/ls2821-limestone-original-imafhjcr3xkxgqaz.jpeg?q=70",
      amt: 1200,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch006",
      productname:"ReBorn",
      img:"https://rukminim2.flixcart.com/image/612/612/krme93k0/watch/d/l/k/9060-black-digital-sport-multifunction-day-date-display-casual-original-imag5dmkfxucafxs.jpeg?q=70",
      amt: 3600,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch007",
      productname:"FastTrack",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70",
      amt: 1400,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch008",
      productname:"Timex",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/m/o/n/1-tw2v18400u9-timex-men-original-imagzex28jcumgx6.jpeg?q=70",
      amt: 12000,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch009",
      productname:"Sonata",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/d/e/l/-original-imagz4wvrswzjhgn.jpeg?q=70",
      amt: 768,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch0010",
      productname:"Casio",
      img:"https://rukminim2.flixcart.com/image/612/612/kdlzte80/watch/v/y/i/a1176-casio-original-imafuheghwmfaxdt.jpeg?q=70",
      amt: 1233,
      qnt:1,
      rating:"3.3/5",
    },
    {
      productId:"watch0011",
      productname:"Titan",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/e/q/-original-imagz75fvhmxyyh6.jpeg?q=70",
      amt: 2300,
      qnt:1,
      rating:"5/5",
    },
    {
      productId:"watch0012",
      productname:"HYMT",
      img:"https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/v/y/-original-imagrdzgt79z7wf4.jpeg?q=70",
      amt: 3600,
      qnt:1,
      rating:"5/5",
    },

    

  ];

}
