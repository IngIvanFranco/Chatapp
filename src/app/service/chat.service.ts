import { Injectable } from '@angular/core';
import { Imsm } from '../componentes/Imsm';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats:any=[];

  constructor(private socket:SocketService) { 

    this.onResmes()
  }

  sendmes(msm:Imsm){
    
    
this.socket.io.emit('send',msm)
this.chats.push(msm);



   }

 onResmes(){
  this.socket.io.on("respuesta",(mes)=>{
    mes.type=2
    this.chats.push(mes)
   })
   }
}
