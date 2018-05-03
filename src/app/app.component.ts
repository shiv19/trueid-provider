import { Component, OnInit } from '@angular/core';
import web3 from './web3/web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMetaMaskPresent: boolean;
  isMetaMaskLoggedIn: boolean;

  async ngOnInit() {
    this.isMetaMaskPresent = web3 ? true : false;

    if (this.isMetaMaskPresent) {
      const accounts = await web3.eth.getAccounts();
      localStorage.setItem('accounts', JSON.stringify(accounts));
      this.isMetaMaskLoggedIn = accounts.length ? true : false;
    }
  }
}
