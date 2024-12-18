export class Conversions {
    static MS_IN_S = 1000;
  
    static byteArrayToArduinoInt(byte1: number, byte2: number): number {
      const char1 = byte1 >= 0 ? byte1 : 256 + byte1;
      const char2 = byte2 >= 0 ? byte2 : 256 + byte2;
  
      return char2 * 256 + char1;
    }
  
    static byteArrayToArduinoUnsignedInt(byte1: number, byte2: number): number {
      return this.byteArrayToArduinoInt(byte1, byte2);
    }
  
    static byteArrayToArduinoFloat(byteArray: Uint8Array, start: number): number {
      const buffer = new ArrayBuffer(4);
      const view = new DataView(buffer);
  
      // Copy the 4 bytes from the input array
      for (let i = 0; i < 4; i++) {
        view.setUint8(i, byteArray[start + i]);
      }
  
      // Read the bytes as a little-endian float
      return view.getFloat32(0, true); // true -> little-endian
    }
  }
  