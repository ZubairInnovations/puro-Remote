import { NetworkInfo } from 'react-native-network-info';

export class IPs {
  static async getListeningAddress(listenToSelfIP: boolean): Promise<string | null> {
    try {
      const ipAddress = await NetworkInfo.getIPV4Address();
      if (listenToSelfIP) {
        return ipAddress;
      }
      // Add broadcast IP calculation logic if necessary
      console.log('Device IP Address:', ipAddress);
      return ipAddress;
    } catch (error) {
      console.error('Error fetching IP Address:', error);
      return null;
    }
  }
}
