import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Header } from '../../sections/header/header';
import { Hero } from '../../sections/hero/hero';
import { Process } from '../../sections/process/process';
import { Services } from '../../sections/services/services';
import { Team } from '../../sections/team/team';
import { WhyUs } from '../../sections/why-us/why-us';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Team, Services, WhyUs, Process, Contact],
  templateUrl: './home.html',
})
export class Home {}
