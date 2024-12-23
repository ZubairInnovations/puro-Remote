import dgram from 'react-native-udp';
import { App } from '../App';

export class IPDiscovery {
  private socket: dgram.Socket;
  private app: App;

  constructor(app: App) {
    this.app = app;
    this.socket = dgram.createSocket('udp4');
    this.socket.bind(4000);
    this.socket.on('message', this.handleMessage.bind(this));
  }

  private handleMessage(msg: Buffer, rinfo: dgram.RemoteInfo): void {
    const message = msg.toString();
    try {
      const data = JSON.parse(message);
      this.app.ip = rinfo.address;
      console.log('Discovered IP:', this.app.ip);
    } catch (error) {
      console.error('Error parsing UDP message:', error);
    }
  }
}