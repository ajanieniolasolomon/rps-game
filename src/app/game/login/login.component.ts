import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = '';
  constructor(public r: Router) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
this.r.navigateByUrl('game');
    }
  }
play() {
  if (this.username === '') {
return ;
  }
  localStorage.setItem('username', this.username);
this.r.navigateByUrl('game');
}
}
