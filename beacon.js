var eddystoneBeacon = require('eddystone-beacon');
var url = 'http://10.64.12.97:3000/';

var options = {
  name: 'Beaconnn',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};
console.log('starting');
eddystoneBeacon.advertiseUrl(url/*, options*/);
console.log('Im here');
