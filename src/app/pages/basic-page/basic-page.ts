import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Locale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocalService);

  nameLower = signal("name");
  nameUpper = signal("NAME");
  fullName = signal("FulL NamE");

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)

    onCleanUp(() => {
      clearInterval(interval)
    })
  });

  changeLocal(locale: Locale) {
    this.localeService.changeLocal(locale)
  }
}
