import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { Confirm, Notify } from 'notiflix';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  txt: string =''
  date:Date = new Date()
  username: string =""
  constructor(public chat:ChatService) {
   
   }

  ngOnInit(): void {
   this.iniciarsesion()
  }
  iniciarsesion() {
    Confirm.prompt(
      'Hola Bienvenido A Nuestro ChatBan',
      'Ingresa tu Nikname',
      '',
      'Ingresar',
      'Salir',
      (nameuser1:string)=>{
      this.asignarusername(nameuser1)
      
      },()=>{
        this.asignarusername("el pendejo no puso nombre")
      }
      
     )
  }
  asignarusername(nameuser1: string) {
  this.username = nameuser1
  this.chat.iniciarsesion(nameuser1)
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



