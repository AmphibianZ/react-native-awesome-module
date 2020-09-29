import { NativeModules } from 'react-native';
import { getModel } from 'react-native-device-info';

type AwesomeModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

export const deviceInfo = {
  model: getModel(),
};

const { AwesomeModule } = NativeModules;

export default AwesomeModule as AwesomeModuleType;
