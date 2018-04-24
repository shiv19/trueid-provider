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
    const users = localStorage.getItem('users');
    if (!users) {
      const usersJSONObj = [
        {
          fullName: 'Suvarna Mishra',
          address: '0x281055afc982d96fab65b3a49cac8b878184cb16',
          contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
          gender: 'Female',
          birthdate: new Date('04/19/1995'),
          country: 'India',
          isAbove18: true,
          fatherName: 'John Doe',
          motherName: 'Jane Doe',
          email: 'someone@something.com',
          mobileNumber: '9977665544'
        },
        {
          fullName: 'Shristi PA',
          address: '0x90e63c3d53e0ea496845b7a03ec7548b70014a91',
          contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
          gender: 'Female',
          birthdate: new Date('04/19/1995'),
          country: 'India',
          isAbove18: true,
          fatherName: 'John Doe',
          motherName: 'Jane Doe',
          email: 'someone@something.com',
          mobileNumber: '9977665544'
        },
        {
          fullName: 'Shubham',
          address: '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e',
          contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
          gender: 'Male',
          birthdate: new Date('04/19/1995'),
          country: 'India',
          isAbove18: true,
          fatherName: 'John Doe',
          motherName: 'Jane Doe',
          email: 'someone@something.com',
          mobileNumber: '9977665544'
        },
        {
          fullName: 'Shivanshu',
          address: '0x53d284357ec70ce289d6d64134dfac8e511c8a3d',
          contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
          gender: 'Male',
          birthdate: new Date('04/19/1995'),
          country: 'India',
          isAbove18: true,
          fatherName: 'John Doe',
          motherName: 'Jane Doe',
          email: 'someone@something.com',
          mobileNumber: '9977665544'
        },
      ];
      localStorage.setItem('users', JSON.stringify(usersJSONObj));
      const providers = localStorage.getItem('providers');
      if (!providers) {
        const providersJSONObj = [
          {
            name: 'Airtel',
            address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88'
          },
          {
            name: 'BSNL',
            address: '0x6f46cf5569aefa1acc1009290c8e043747172d89'
          },
          {
            name: 'Idea',
            address: '0x281055afc982d96fab65b3a49cac8b878184cb16'
          },
          {
            name: 'Vodafone',
            address: '0x90e63c3d53e0ea496845b7a03ec7548b70014a91'
          },
          {
            name: 'Jio',
            address: '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e'
          }
        ];
        localStorage.setItem('providers', JSON.stringify(providersJSONObj));
      }
    }

    if (this.isMetaMaskPresent) {
      const accounts = await web3.eth.getAccounts();
      localStorage.setItem('accounts', JSON.stringify(accounts));
      this.isMetaMaskLoggedIn = accounts.length ? true : false;
    }
  }
}
