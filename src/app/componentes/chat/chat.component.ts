import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { Confirm, Loading, Notify } from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  txt: string =''
  date:Date = new Date()
  username: any =""
  constructor(
    public chat:ChatService, 
    public rutas:Router
    ) {
   
   }

  ngOnInit(): void {
   this.iniciarsesion()
  }
  iniciarsesion() {

    if (localStorage.getItem('user')==  undefined) {
      
    Confirm.prompt(
      'Hola Bienvenido A Nuestro ChatBan',
      'Ingresa tu Nikname',
      '',
      'Ingresar',
      'Salir',
      (nameuser1:string)=>{
      this.asignarusername(nameuser1)
      
      },()=>{
      this.rutas.navigateByUrl('/')
      }
      
     )
    }else{
this.asignarusername(localStorage.getItem('user'))

    }

  }
  asignarusername(nameuser1: any) {
  this.username = nameuser1
  localStorage.setItem('user',nameuser1)
  this.chat.iniciarsesion(nameuser1)
  Loading.circle()
  Loading.remove(1923)
  }

  enviarmsm(){
    let date1 = new Date();
      let msg = this.txt
    let mensaje = {
      txt:msg,
      type:1,
      username:this.username,
      hora: date1
    }
    this.chat.sendmes(mensaje)
    this.txt=""
  }

}



