export const postRequest = (url, data) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  return new Promise((resolve, reject) => {
    fetch(serverURL + url, {
      method: "POST",
      // credentials: "include",
      //				credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        switch (response.status) {
          case 401:
            reject({ code: response.status, error: "Not authenticated" });
            break;

          case 403:
            reject({ code: response.status, error: "Forbidden" });
            break;

          default:
            return response.json();
        }
      })
      .then(responseJson => {
        console.log("responseJson", responseJson);
        if (responseJson) {
          resolve(responseJson);
        }
        reject({ code: responseJson.code, error: responseJson.error });
      })
      .catch(error => {
        reject({ code: 0, error: error });
      });
  });
};

export const getRequest = url => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  return new Promise((resolve, reject) => {
    fetch(serverURL + url)
      .then(response => {
        switch (response.status) {
          case 401:
            reject({ code: response.status, error: "Not authenticated" });
            break;

          case 403:
            reject({ code: response.status, error: "Forbidden" });
            break;

          default:
            return response.json();
        }
      })
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject({ code: 0, error: error });
      });
  });
};
