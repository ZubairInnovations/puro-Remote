import { Keyboard } from 'react-native';

export class Other {
  static hideSoftKeyboard(): void {
    try {
      Keyboard.dismiss();
    } catch (error) {
      console.error('Error hiding keyboard:', error);
    }
  }
}
