const axios = require('axios');
const apiURL = "https://ahfi1we718.execute-api.eu-central-1.amazonaws.com/dev/";

export default {
    activities(accountId) {
        return new Promise((resolve, reject) => {
            axios.get(apiURL + 'account/' + accountId + '/payments')
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
    },
    tags(accountId) {
        return new Promise((resolve, reject) => {
            axios.get(apiURL + 'account/' + accountId + '/tag')
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