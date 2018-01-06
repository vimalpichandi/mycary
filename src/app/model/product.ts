import { Injectable } from '@angular/core';

@Injectable()
export class ProductListModel {

  public productedList:any={
     product001:{
       label:'APPLE',
       image:'apple.jpg',
       price: 12.4,
       weight:'1-kg',
       uid: 'product001'
     },

     product002:{
       label:'ORANGE',
       image:'orange.jpg',
       price: 10.4,
       weight:'1-kg',
       uid: 'product002'
     },
  product003:{
       label:'BANANA',
       image:'bananna.jpg',
       price: 9.4,
       weight:'1-kg',
       uid: 'product003'
     },
     product004:{
       label:'GRAPES',
       image:'Grapes.jpg',
       price: 14.4,
       weight:'1-kg',
       uid: 'product004'
     },
    product005: {
       label:'KIWI',
       image:'kiwi.jpg',
       price: 12.4,
       weight:'1-kg',
       uid: 'product005'
     },
  product006:{
       label:'PINEAPPLE',
       image:'pineapple.jpg',
       price: 12.4,
       weight:'1-kg',
       uid: 'product006'
     }
  }
  }
