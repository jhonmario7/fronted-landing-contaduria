import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Team } from '../../sections/team/team';
import { WhyUs } from '../../sections/why-us/why-us';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Team, Services, WhyUs],
  templateUrl: './home.html',
})
export class Home {}
