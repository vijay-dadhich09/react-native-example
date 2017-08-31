import { NativeModules } from 'react-native';
import Config from './config.json';

console.log(NativeModules);
//const environment = NativeModules.RNConfig.buildEnvironment;

// const getAPIURL = () => {
//   console.log('Current ENV: ', environment);
//   return Config[environment].apiURL;
// };
//
// export default {
//   baseURL: getAPIURL(),
//   imageURL: getAPIURL().replace('/graphql', '')
// };
