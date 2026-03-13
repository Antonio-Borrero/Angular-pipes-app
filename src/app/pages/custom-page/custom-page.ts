import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage { 

  name = signal('Antonio Borrero')
  upperCase = signal<boolean>(true);
  heroes = signal(heroes)
}
