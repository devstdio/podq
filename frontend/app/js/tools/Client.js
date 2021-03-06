require('whatwg-fetch')

export default class Client {
  constructor() {
    this.url = `${BACKEND_ENDPOINT}/`;
    this.mockurl = '/mockdata/';
    this.mockdata = false;
    this.debug = false;
  }

  fetch(service) {
    var url = this.url + service;
    if (this.mockdata) {
      if (url.match('entries')) {
          url = this.mockurl + 'entries';
      } else {
          url = this.mockurl + 'feeds';
      }
    }
    this.log('fetch', url);
    return fetch(url)
              .then((response) => {
                return response.json();
              }).catch((ex) => {
                this.log('FETCH FAILED!', ex);
              });
  }

  log(msgA, msgB) {
    if (!this.debug) {
      return;
    }
    console.log('[Client]', msgA, msgB);
  }
}
