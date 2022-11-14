import { Injectable } from '@angular/core';
import { Product } from './product';
import {from} from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  products :any
  id:any

  constructor(private httpClient:HttpClient) { 
    
  }
  async dbnewproduct(){
    let httpHeaders = new HttpHeaders({
      'content-Type':'application/json'
    });
    await this.httpClient.get('https://blog20itr022.herokuapp.com/insert',{headers:httpHeaders}).toPromise()
   

  }

  async ProductRegister(){
    let httpHeaders = new HttpHeaders({
      'content-Type':'application/json'
    });
    this.products=await this.httpClient.get('https://blog20itr022.herokuapp.com/products',{headers:httpHeaders}).toPromise()
    console.log(this.products)
    return this.products
  }
async getSpecificData(id:any){
  let httpHeaders = new HttpHeaders({
    'content-Type':'application/json'
  });
  this.products=await this.httpClient.get(`https://blog20itr022.herokuapp.com/products/${id}`,{headers:httpHeaders}).toPromise()
  console.log(this.products)
  return this.products
}

  get(data:any){
    this.products=data
  }

  setdata(id:any){
    console.log('at service')
    this.id=id;
    console.log(this.id)
  }

  post(){
    return this.products
  }
}