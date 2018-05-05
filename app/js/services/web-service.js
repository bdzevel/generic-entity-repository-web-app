class WebService {
  sendRequest(url, req, options = { parse: true }) {
    const payload = Object.assign({
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }, req);
    return fetch(`${process.env.API_SERVER_URL}${url}`, payload)
      .then(function(resp) {
        if (options && options.parse) {
          return resp.json();
        }
        return resp;
      });
  }
}

export default new WebService();
