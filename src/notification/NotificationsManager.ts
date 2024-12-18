import PushNotification, { PushNotificationObject } from 'react-native-push-notification';
import { Platform } from 'react-native';

export class NotificationsManager {
  private static SERVICE_CHANNEL_NAME = 'SERVICE_CHANNEL';
  private static ALARM_CHANNEL_NAME = 'ALARM_CHANNEL';
  private static CHANNEL_SERVICE_ID = 1;
  private static CHANNEL_ALARM_ID = 2;

  constructor() {
    this.configureChannels();
  }

  // Configure notification channels
  private configureChannels(): void {
    if (Platform.OS === 'android') {
      // Service Channel
      PushNotification.createChannel(
        {
          channelId: NotificationsManager.SERVICE_CHANNEL_NAME, // Channel ID
          channelName: 'Service Channel', // Channel Name
          channelDescription: 'This is the Service Channel', // Description
          importance: 1, // Importance.MIN equivalent
          vibrate: false, // Vibration disabled for Service Channel
        },
        (created) => console.log(`Service Channel created: ${created}`),
      );

      // Alarm Channel
      PushNotification.createChannel(
        {
          channelId: NotificationsManager.ALARM_CHANNEL_NAME, // Channel ID
          channelName: 'Alarm Channel', // Channel Name
          channelDescription: 'This is the Alarm Channel', // Description
          importance: 4, // Importance.HIGH equivalent
          vibrate: true, // Enable vibration
        },
        (created) => console.log(`Alarm Channel created: ${created}`),
      );
    }
  }

  // Get notification for the service
  public getNotification(): PushNotificationObject {
    return {
      id: NotificationsManager.CHANNEL_SERVICE_ID,
      channelId: NotificationsManager.SERVICE_CHANNEL_NAME,
      title: 'puRO',
      message: 'Listening for puRO',
      smallIcon: 'ic_notification', // Ensure you add this icon in res
    };
  }

  // Notify an alarm with a predefined shutoff reason
  public notifyAlarm(shutOffReason: string): void {
    const options: PushNotificationObject = {
      id: NotificationsManager.CHANNEL_ALARM_ID,
      channelId: NotificationsManager.ALARM_CHANNEL_NAME,
      title: 'puRO Has an Alarm',
      message: shutOffReason,
      smallIcon: 'ic_notification',
      vibrate: true,
      vibration: 1000, // Vibrates every 1000ms
      playSound: true,
    };

    PushNotification.localNotification(options);
  }

  // Notify an alarm with a custom message
  public notifyAlarmWithString(customMessage: string): void {
    const options: PushNotificationObject = {
      id: NotificationsManager.CHANNEL_ALARM_ID,
      channelId: NotificationsManager.ALARM_CHANNEL_NAME,
      title: 'puRO Alarm',
      message: customMessage,
      smallIcon: 'ic_notification',
      vibrate: true,
      vibration: 1000, // Vibrates every 1000ms
      playSound: true,
    };

    PushNotification.localNotification(options);
  }
}
