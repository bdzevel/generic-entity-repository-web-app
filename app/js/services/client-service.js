import webService from './web-service';

class ClientService {
  createClient(name, friendlyName) {
    const body = { name: name.toLowerCase(), friendlyName };
    return webService.sendRequest('/api/client', { method: 'POST', body }, { parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      });
  }

  getAllClients() {
    return webService.sendRequest('/api/client', { method: 'GET' });
  }
}

export default new ClientService();
