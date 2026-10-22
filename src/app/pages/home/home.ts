import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';
import { Team } from '../../sections/team/team';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Team],
  templateUrl: './home.html',
})
export class Home {}
