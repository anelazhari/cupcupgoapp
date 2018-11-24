const axios = require('axios');
const apiURL = "https://ahfi1we718.execute-api.eu-central-1.amazonaws.com/dev/";

export default {
    activities(accountId) {
        return new Promise((resolve, reject) => {
            axios.get(apiURL + '/' + accountId + '/payments')
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
}