const http = require('http');

const fn_url = "https://req-handler.azurewebsites.net/microsoft/graph/";

const dummy_a_query_code = "dummy-a?code=N7u0QKE/VtpqK3RjZjygSzGWk1aWWJWCvZn3t5WMCXHczBDJmWYtKA==";
const dummy_a = fn_url + dummy_a_query_code;

module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');

    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST'
    };

    req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.write('data\n');
    req.write('data\n');
    req.end();


    context.res = {
        body: 'output'
    };
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