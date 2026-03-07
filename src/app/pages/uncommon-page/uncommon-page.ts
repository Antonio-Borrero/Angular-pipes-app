import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})

export default class UncommonPage { 

  client = signal(client1);
  invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  }

  changeClient() {
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }
    return this.client.set(client1)
  }
}
