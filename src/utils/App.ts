import { NotificationsManager } from './NotificationsManager';

export class App {
  static instance: App;

  notificationsManager: NotificationsManager;

  isConnected: boolean = false;

  // Parameters from UDP message - general
  ip: string | null = null;
  state: number = 0;
  shutOffReason: number = 0;
  runningMessage: number = 0;
  runningMessageString: string = '';
  shutOffText: string = '';

  // Parameters from UDP message - indicators
  productTDS: number = 0;
  literLeft: number = 0;
  feedTDS: number = 0;

  systemRecoverRate: number = 0;
  productFlowRate: number = 0;
  drainFlowRate: number = 0;
  recycleFlowRate: number = 0;
  rejectionRate: number = 0;
  membranePressure: number = 0;
  feedPressure: number = 0;
  waterTemperature: number = 0;

  // Other
  isToListenToSelfIP: boolean = false;
  buttonLoading: boolean = false;

  private constructor() {
    this.notificationsManager = new NotificationsManager();
  }

  static getInstance(): App {
    if (!this.instance) {
      this.instance = new App();
    }
    return this.instance;
  }
}
