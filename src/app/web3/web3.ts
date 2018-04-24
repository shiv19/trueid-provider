declare var require: any;
const Web3 = require('web3');

declare var window: any;
let web3 = null;

if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
}

export default web3;
