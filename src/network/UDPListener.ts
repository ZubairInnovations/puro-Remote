import dgram from 'react-native-udp';

export class UDPListener {
  private socket: dgram.Socket;

  constructor() {
    this.socket = dgram.createSocket('udp4');
    this.socket.bind(4000);
    this.socket.on('message', this.handleMessage.bind(this));
  }

  private handleMessage(msg: Buffer, rinfo: dgram.RemoteInfo): void {
    const message = msg.toString();
    try {
      const data = JSON.parse(message);
      console.log('UDP message received:', data);
      // Update the app state/UI with the received data
    } catch (error) {
      console.error('Error parsing UDP message:', error);
    }
  }
}