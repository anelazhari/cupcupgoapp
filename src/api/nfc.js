export default {
    readWriteNfc: function() {
        if ('nfc' in navigator) {
          navigator.nfc.watch(function (message) {
              document.getElementById('log').innerHTML += '\n' + ("NFC message received from URL " + message.url);
              if (message.data[0].recordType === 'empty') {
                navigator.nfc.push([{
                  url: message.url,
                  data: [{
                    recordType: "text",
                    data: 'Hello World'
                  }]
                }]);
              }
              processMessage(message);
            }, {mode: 'any'})
            .then(() => document.getElementById('log').innerHTML += '\n' + ("Added a watch."))
            .catch(err => document.getElementById('log').innerHTML += '\n' + ("Adding watch failed: " + err.name));
        } else {
          document.getElementById('log').innerHTML += '\n' + ('NFC API not supported.');
        }
      },
    processMessage: function (message) {
        document.getElementById('log').innerHTML += '\n' + (message);
        message.data.forEach(function (record) {
          if (record.recordType == "string") {
            document.getElementById('log').innerHTML += '\n' + ('Data is string: ' + record.data);
          } else if (record.recordType == "json") {
            processJSON(record.data);
          } else if (record.recordType == "url") {
            document.getElementById('log').innerHTML += '\n' + ("Data is URL: " + record.data);
          } else if (record.recordType == "opaque" && record.mediaType == 'image/png') {
            processPng(record.data);
          };
        });
      }
}