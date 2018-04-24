declare var require: any;
const trueIDJson = require('../contract/TrueID.json');
import web3 from './web3';
import config from '../config';

let trueID;
if (web3) {
    trueID = new web3.eth.Contract(JSON.parse(trueIDJson.interface), config.trueIDAddress);
}

export default trueID;
