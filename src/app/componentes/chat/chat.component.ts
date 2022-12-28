import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  txt: string =''
  constructor(public chat:ChatService) {
   
   }
date = new Date();
  ngOnInit(): void {
  }

  enviarmsm(){
   
   let msg = this.txt
    let mensaje = {
      txt:msg,
      type:1
    }
    this.chat.sendmes(mensaje)
    this.txt=""
  }

}
