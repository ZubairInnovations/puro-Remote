import TcpSocket from 'react-native-tcp-socket';

export interface OnMessageReceived {
  messageReceived(message: string): void;
}

export class TCPClient {
  private serverMessage: string | null = null;
  private static SERVERIP: string; // Replace with actual server IP
  private static SERVERPORT = 1709;
  private socket: TcpSocket.Socket | null = null;
  private mMessageListener: OnMessageReceived | null;
  private mRun = false;

  constructor(listener: OnMessageReceived) {
    this.mMessageListener = listener;
  }

  /**
   * Sends a message to the server.
   * @param message The message to send.
   */
  public sendMessage(message: string): void {
    if (this.socket && !this.socket.destroyed) {
      this.socket.write(message, () => {
        console.log('Message sent:', message);
      });
    } else {
      console.error('Socket is not connected.');
    }
  }

  /**
   * Stops the TCP client and closes the socket.
   */
  public stopClient(): void {
    this.mRun = false;
    if (this.socket) {
      this.socket.end();
      this.socket.destroy();
      this.socket = null;
      console.log('TCP Client Stopped');
    }
  }

  /**
   * Connects to the TCP server and listens for messages.
   * @param serverIP The server IP to connect to.
   * @returns A Promise that resolves when the client connects.
   */
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

      // Handle incoming messages
      this.socket.on('data', (data) => {
        this.serverMessage = data.toString();
        console.log('Message received:', this.serverMessage);

        if (this.mMessageListener) {
          this.mMessageListener.messageReceived(this.serverMessage);
        }
      });

      // Handle socket errors
      this.socket.on('error', (error) => {
        console.error('Socket error:', error);
        reject(error);
      });

      // Handle socket close
      this.socket.on('close', () => {
        console.log('Connection closed.');
        this.mRun = false;
        this.socket = null;
      });
    });
  }
}
