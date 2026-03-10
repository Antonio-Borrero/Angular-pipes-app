import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: "Fabian",
  gender: "male",
  age: 35,
  address: "Quito, Ecuador"
}

const client2 = {
  name: "Claudia",
  gender: "female",
  age: 32,
  address: "Vienna, Austria"
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.html',
})

export default class UncommonPage {

  // i18nSelect

  client = signal(client1);
  
  invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    return this.client.set(client1)
  }

  // i18nPlural

  clients = signal(['Maria', 'Pedro', 'Fernando', 'Melissa', 'Marta', 'Natalia', 'Andrea', 'Juan', 'Carlos']);

  clientsMap = signal({
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos clientes esperando',
    other: 'Tenemos # clientes esperando'
  })

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}
