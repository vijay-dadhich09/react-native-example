import { AppRegistry } from 'react-native';
import App from './src/App';
import AppConfig from './appConfig';

const appServerRootURL = AppConfig.appServerRootURL;

AppRegistry.registerComponent('tech_stack', () => App);
