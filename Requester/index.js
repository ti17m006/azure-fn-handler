const http = require('http');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


};

/** Draft */
/**
http.get('someUrl', function (success) {
    if (success) {
        http.get('someOtherUrl', function (array) {
            array.forEach(element => {
                element.http.get('someAPI')
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
}).on("error", (error) => {
    console.log(`Error: ${error.message}`);
    context.res = {
        status: 400,
        body: "An error has occured"
    };
});
 */