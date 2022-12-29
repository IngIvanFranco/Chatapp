import { UpperCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Notify } from 'notiflix';
import { Imsm } from '../componentes/Imsm';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats:any=[];

  constructor(private socket:SocketService) { 

    this.onResmes()
    this.onInformarsesion()
  }

  sendmes(msm:Imsm){
    
    
this.socket.io.emit('send',msm)
this.chats.push(msm);



   }

 onResmes(){
  this.socket.io.on("respuesta",(mes)=>{
    mes.type=2
    
    this.chats.push(mes)

    Notify.info(`${mes.username } ha escrito un nuevo mensaje`,{
      position:'left-top'
         })
    const audio = new Audio('http://54.174.81.71/Chat/assets/sonidos/msn-alert.mp3') 
    audio.play();
   })
   }

   iniciarsesion(nickname:string){
   let inicio ={
    username:nickname
   }

    this.socket.io.emit("avisarinicio",inicio)

   }

   onInformarsesion(){
    this.socket.io.on('infosesion',(datos)=>{
      
    Notify.success(`${datos.username } ha iniciado sesion`,{
      position:'right-top'
    
     
    })
    const audio = new Audio('http://54.174.81.71/Chat/assets/sonidos/session.mp3') 
    audio.play();
    })
   }
}
