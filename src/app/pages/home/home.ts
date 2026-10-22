import { Component } from '@angular/core';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Header, Hero],
  templateUrl: './home.html',
})
export class Home {}
