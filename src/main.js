import '@riotjs/hot-reload';
import * as riot from 'riot';
import App from './App.riot';

const mountApp = riot.component(App);

mountApp(document.querySelector('#app'));
