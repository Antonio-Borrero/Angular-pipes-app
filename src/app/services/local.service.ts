import { Injectable, signal } from '@angular/core';

export type Locale = "es" | "fr" | "en";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocale = signal<Locale>("es");

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locale) ?? 'es')
  }

  get getLocale() {
    return this.currentLocale()
  }

  changeLocal(locale: Locale) {
    localStorage.setItem("locale", locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
