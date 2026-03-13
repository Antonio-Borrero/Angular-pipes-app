import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly-pipe';
import { HeroColorPipe } from '../../pipes/heroColor-pipe';
import { HeroTextColorPipe } from '../../pipes/heroTextColor-pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from "../../pipes/heroCreator-pipe";
import { HeroSortByPipe } from '../../pipes/heroSortBy-pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/heroFilter-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage { 

  name = signal('Antonio Borrero');
  upperCase = signal<boolean>(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('')
}
