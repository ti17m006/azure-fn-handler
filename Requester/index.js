
const http = require('http');

const fn_url = 'https://req-handler.azurewebsites.net';
const fn_path = '/microsoft/graph/dummy-a'
const dummy_a_query_code = "?code=N7u0QKE/VtpqK3RjZjygSzGWk1aWWJWCvZn3t5WMCXHczBDJmWYtKA==";

const options = {
    host: fn_url,
    port: 80,
    path: `${fn_path}${dummy_a_query_code}`,
    method: 'GET'
}

function getData(options, callback) {
    http.request(options, function (respond) {
        let body = '';
        respond.on('data', function (chunk) {
            body += chunk;
        })
        respond.on('end', function () {
            callback(null, JSON.parse(body))
        })
        respond.on('error', callback);

    })
        .on('error', callback)
        .end();
}

module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');  

    getData(options, function (error, result) {
        if (error) {
            context.res = {
                status: 400,
                body: error
            }
        }
        context.res = {
            status: 200,
            body: 'result'
        }
    });
    context.res = {
        status: 200,
        body: 'result'
    }
}



// const df = require("durable-functions");
// const t = yield context.df.callActivity("dummy-a")

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