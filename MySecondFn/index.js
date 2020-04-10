const http = require('http');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    http.get('someUrl', function (success) {
        if (success) {
            http.get('someOtherUrl', async function (array) {
                array.forEach(element => {
                    await element.http.get('someAPI')
                        .then(() => {
                            context.res = {
                                status: 200,
                                body: "Success"
                            };
                        })
                        .catch(() => {
                            context.res = {
                                status: 400,
                                body: "An error has occured"
                            };
                        });
                });
            });
        }
    });
};