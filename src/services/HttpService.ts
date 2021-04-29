export default class HttpService {
  baseUrl: string
  url: string

  constructor(url: string) {
    this.baseUrl = process.env.REACT_APP_BACKEND_URL || "";
    this.url = url;
  }

  async _get({ additionalUrl = '' }): Promise<any> {
    const headers: { [key: string]: any }  = {}

    try {
      const response = await fetch(this.baseUrl + this.url + additionalUrl, {
        method: 'GET',
        headers,
        redirect: 'follow',
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

    } catch (e) {
      console.warn(e);
      throw e;
    }

    return {};
  }

  async _post({ body = {}, additionalUrl = '', isUseToken = true }): Promise<any> {

    const headers: { [key: string]: any } = {
      'Content-type': 'application/json',
      'Connection': 'keep-alive'
    };

    try {
      const response = await fetch(this.baseUrl + this.url + additionalUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }
    } catch (e) {
      console.warn(e);
      throw e;
    }

    return {};
  }

  async _put({ body = {}, additionalUrl = '', isUseToken = true }): Promise<any> {
    const headers: { [key: string]: any } = {
      'Content-type': 'application/json',
      'Connection': 'keep-alive'
    };

    try {
      const response = await fetch(this.baseUrl + this.url + additionalUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }
    } catch (e) {
      console.warn(e);
      throw e;
    }

    return {};
  }
}