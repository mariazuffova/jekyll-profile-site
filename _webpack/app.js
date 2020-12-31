import './app.scss';

import 'alpinejs';
import valForm from 'valform';

window.valForm = valForm;

import Turbolinks from 'turbolinks';
Turbolinks.start({
    flush: false
});

import './js/test';

const log = (msg) => {
    console.log(msg);
}

log('hello from main js file');
