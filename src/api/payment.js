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
            axios.get(apiURL + 'account/' + accountId + '/tags')
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
    newTag(accountId, tagName, tagNumber) {
        return new Promise((resolve, reject) => {
            axios.post(apiURL + 'account/' + accountId + '/tags', {
                'name': tagName,
                'tag_number': tagNumber
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
    },
    deleteTag(accountId, tagNumber) {
        return new Promise((resolve, reject) => {
            axios.delete(apiURL + 'account/' + accountId + '/tags/' + tagNumber)
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
}