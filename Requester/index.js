const http = require('http');
const url = require('url');

const df = require("durable-functions");

const dummy_a_url = "https://req-handler.azurewebsites.net/microsoft/graph/dummy-a";
const dummy_a_query_code = "?code=N7u0QKE/VtpqK3RjZjygSzGWk1aWWJWCvZn3t5WMCXHczBDJmWYtKA==";
const dummy_a = dummy_a_url + dummy_a_query_code;

module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');

    const t = yield context.df.callActivity("dummy-a")
    context.res = {
        body: query
    };
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