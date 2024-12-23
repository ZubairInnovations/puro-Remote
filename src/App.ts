import { NotificationsManager } from './utils/NotificationsManager';

export class App {
  static instance: App;
  notificationsManager: NotificationsManager;
  shutOffText: string = '';

  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  handleShutOffMessage(data: any): void {
    if (data.state === 3) {
      this.shutOffText = data.shutOffText;
      this.notificationsManager.NotifyAlarmWithString(this.shutOffText);
    }
  }
}