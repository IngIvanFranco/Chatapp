import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Imsm } from '../componentes/Imsm';

@Injectable({
  providedIn: 'root'
})
export class SocketService {


io = io("http://localhost:3000/",{
  withCredentials:true,
  autoConnect:true
})
  constructor() {

   }
}
