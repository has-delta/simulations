import {MDCDrawer} from '@material/drawer';
import {MDCTopAppBar} from '@material/top-app-bar';
import {baseURL} from './consts';

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const indexUrl = baseURL + '/index.json';
fetch(indexUrl)
.then(res => res.json())
.then(data => {
  const topics = data.topics;
  const drawerElem = document.getElementById('drawer');
  for (const topic of topics) {
    const topicElem = document.createElement('a');
    topicElem.setAttribute('class', 'mdc-list-item');
    topicElem.setAttribute('href', '#');
    topicElem.setAttribute('aria-current', 'page');
    topicElem.text = topic.desc.ko;
    drawerElem.appendChild(topicElem);
  }
});
