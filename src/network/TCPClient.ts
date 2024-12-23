import TcpSocket from 'react-native-tcp-socket';

export interface OnMessageReceived {
  messageReceived(message: string): void;
}

export class TCPClient {
  private static SERVERIP: string;
  private static SERVERPORT = 1709;
  private socket: TcpSocket.Socket | null = null;
  private mMessageListener: OnMessageReceived | null;
  private mRun = false;

  constructor(listener: OnMessageReceived) {
    this.mMessageListener = listener;
  }

  public sendMessage(message: string): void {
    if (this.socket && !this.socket.destroyed) {
      this.socket.write(message, () => {
        console.log('Message sent:', message);
      });
    } else {
      console.error('Socket is not connected.');
    }
  }

  public stopClient(): void {
    this.mRun = false;
    if (this.socket) {
      this.socket.end();
      this.socket.destroy();
      this.socket = null;
      console.log('TCP Client Stopped');
    }
  }

  public async run(serverIP: string): Promise<void> {
    TCPClient.SERVERIP = serverIP;

    return new Promise((resolve, reject) => {
      console.log('Connecting to server...');

      this.socket = TcpSocket.createConnection(
        { port: TCPClient.SERVERPORT, host: TCPClient.SERVERIP, timeout: 5000 },
        () => {
          console.log('Connected to server.');
          this.mRun = true;
          this.sendMessage('Welcome to PuRO-Remote'); // Initial message
          resolve();
        }
      );

      this.socket.on('data', (data) => {
        const message = data.toString();
        console.log('Message received:', message);

        if (this.mMessageListener) {
          this.mMessageListener.messageReceived(message);
        }
      });

      this.socket.on('error', (error) => {
        console.error('Socket error:', error);
        reject(error);
      });

      this.socket.on('close', () => {
        console.log('Connection closed.');
        this.mRun = false;
        this.socket = null;
      });
    });
  }
}