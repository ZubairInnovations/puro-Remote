import { Conversions } from './ Conversions';
import { IPs } from './IPs';
import { Other } from './Other';
import { App } from './App';

// Example: Byte conversions
const intResult = Conversions.byteArrayToArduinoInt(0x01, 0x02);
console.log('Integer Result:', intResult);

// Example: Get IP address
IPs.getListeningAddress(true).then((ip) => {
  console.log('IP Address:', ip);
});

// Example: Hide Keyboard
Other.hideSoftKeyboard();

// Access App singleton
const appInstance = App.getInstance();
appInstance.isConnected = true;
console.log('Is Connected:', appInstance.isConnected);
