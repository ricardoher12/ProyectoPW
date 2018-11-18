import { Injectable } from '@angular/core';

import axios from "axios";
import Axios, { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";


import {Pizza} from './pizza'
import {PIZZAS} from './mock-pizzas'
import {PIZZAS2} from './mock-pizzas2'





@Injectable({
  providedIn: 'root'
})
export class PizzaService {
pizzaModel = new Pizza("", "", "", "Redonda", "Grande", "", "Si" );
pizzaList: { [id:string] : Pizza} = {};
flag = "";
modificarFlag : boolean = false;
mostrarSeparador: boolean = false;
//express-app.westus.azurecontainer.io
url :  string = "http://pizzaapp.westus.azurecontainer.io:3000/api/v1/pizzas";

private axiosClient: AxiosInstance;


igualarPizzas(pizza: Pizza)
{
  this.pizzaModel = pizza;
}

 /* getPizzaList(): {} {
    try {
      this.pizzaList = JSON.parse(localStorage.getItem("pizzas").toString());
      return this.pizzaList;
    } catch (error) {
      return this.pizzaList;
    }
    
  }*/


  getPizzaList()  {
    var pizzas = new Promise((resolve, reject) => {
      try {
        this.axiosClient.get(this.url, {
          headers:{
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*'
          }
        })
       .then(data =>{
        console.log(data);
        this.pizzaList = {};
        data.data.forEach(element => {
          this.pizzaList[element._id] = element;
          
        });
        resolve(this.pizzaList);
       })
       .catch(error =>{
        console.log(error);

        if(!error.response){
          return reject(error.message);
        }

         if(error.response.status == 404)
         {
          reject("No items found")
         }else{
          reject(error.message);
         }
       });
        
      } catch (error) {
        reject(error.message);
      } 

    });
      
    return pizzas;

  }

  get2Pizzas(): Pizza[]
  {
    return PIZZAS2;
  }

  grabar_localmente() :void {
    localStorage.setItem("pizzas", JSON.stringify(PIZZAS));
    
  }

  /*public igualarPizzas(): Pizza
  {
    //return this.global.pizza;
  }*/

 crear(pizza: Pizza) {
  var result = new Promise((resolve, reject) => {
    try {
      pizza._id = this.newGuid();
      this.axiosClient.post(this.url, {
        headers:{
          'Content-Type': "application/json",
          'Access-Control-Allow-Origin': '*'
        },
        data : JSON.stringify(pizza)
      })
     .then(data =>{
      console.log(data);
      resolve("ok");
     })
     .catch(error =>{
      if(!error.response){
        return reject(error.message);
      }
      console.log(error);
      var mensaje = error.response.data;
        reject(mensaje.errorMessage);
     });
      
    } catch (error) {
      reject(error.message);
    } 

  });

  return result;
    
  }


  eliminar(pizza: Pizza)
  {
    var result = new Promise((resolve, reject) => {
      try {
        let ruta = this.url + "/" + pizza._id;
        this.axiosClient.delete(ruta, {
          headers:{
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*'
          },
        })
       .then(data =>{
        console.log(data);
        resolve("ok");
       })
       .catch(error =>{
        if(!error.response){
          return reject(error.message);
        }
         if(error.response.status == 404){
            reject("No se pudo encontrar la pizza")
         }
         else{
          console.log(error);
          var mensaje = error.response.data;
            reject(mensaje.errorMessage);
         }
        
       });
        
      } catch (error) {
        reject(error.message);
      } 
  
    });
  
    return result;
  }

  modificar(pizza: Pizza) {
    var result = new Promise((resolve, reject) => {
      try {
        let ruta = this.url + "/" + pizza._id;
        this.axiosClient.put(ruta, {
          headers:{
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*'
          },
          data : JSON.stringify(pizza)
        })
       .then(data =>{
        console.log(data);
        resolve("ok");
       })
       .catch(error =>{
        console.log(error);
        if(!error.response){
          return reject(error.message);
        }
        if(error.response.status == 404){
          reject("No se pudo modificar la pizza");
        }else{
          var mensaje = error.response.data;
          reject(mensaje.errorMessage);
        }
        
       });
        
      } catch (error) {
        reject(error.message);
      } 
  
    });
  
    return result;
    

  }

   newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
    });
}
  constructor() { 
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
          "X-Initialized-At": Date.now().toString()
      },
      
  });
  this.axiosClient.defaults.url= this.url;
  
  
 
  }
}
