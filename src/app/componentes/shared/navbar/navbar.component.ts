import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading } from 'notiflix';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public rutas:Router) { }

  ngOnInit(): void {
  }

  cerrarsession(){
    localStorage.removeItem('user')
    Loading.circle()
    Loading.remove(1923)
    this.rutas.navigateByUrl('/')
  }

}
