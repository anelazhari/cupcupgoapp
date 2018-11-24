const axios = require('axios');
const apiURL = "https://ahfi1we718.execute-api.eu-central-1.amazonaws.com/dev/";

export default {
    register(email, password) {
        return new Promise((resolve, reject) => {
            axios.post(apiURL + 'auth/register', {
                email: email,
                password: password
            })
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.error);
                      } else {
                        reject();
                      }
                });
        })
    },
    login(email, password) {
        return new Promise((resolve, reject) => {
            axios.post(apiURL + 'auth/login', {
                email: email,
                password: password
            })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    if (error.response) {
                        reject(error.response.data.error);
                      } else {
                        reject();
                      }
                });
        })
    }
}