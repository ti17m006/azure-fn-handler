
const http = require('http');

// const fn_url = 'https://req-handler.azurewebsites.net';
const localhost = 'http://localhost:3000';
const fn_path = '/microsoft/graph/';
const fn_url = localhost + fn_path;

const dummy_a = 'dummy-a';
const dummy_b = 'dummy-b';
const dummy_c = 'dummy-c';


const callUrl = function (url) {

    console.log(` callUrl -> ${url} `);

    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            // check response.statusCode [200; 299]
            let buffer = '';
            response.on('data', (chunk) => {
                buffer += chunk
            });
            response.on('end', () => {
                resolve(buffer);
            });
            response.on('error', (error) => {
                reject(error);
            });
        });
    });
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    local_url = fn_url + dummy_a;
    console.log(`   -> local_url ${local_url}`);
    callUrl(local_url)
        .then((data) => {
            console.log(`   -> my_promise ${local_url} `);
            console.log(`   -> my_data ${data} `);
            context.res = {
                body: 'dfsdfdsfsdf'
            }
        })
        .catch((error) => {
            console.error(`${error}\n`);
            context.res = {
                status: 404,
                body: 'error'
            }
        });
}

/**
 * function getData(url, callback) {
    console.log('\n Function ->  getData', url);
    // https://nodejs.org/api/http.html#http_http_get_options_callback
    http.get(url, (response) => {
        console.log('\n Function ->  http.get');
        const { statusCode } = response;
        const contentType = response.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        }
        // } else if (!/^application\/json/.test(contentType)) {
        //     error = new Error('Invalid content-type.\n' +
        //         `Expected application/json but received ${contentType}`);
        // }
        if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            response.resume();
            return;
        }

        console.log('raw data');
        response.setEncoding('utf8');
        let rawData = '';
        response.on('data', (chunk) => { rawData += chunk; });
        response.on('end', () => {
            try {
                // const parsedData = JSON.parse(rawData);
                console.log(rawData);
                callback(rawData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}
 */


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

/**
 * http.request(options, function (respond) {
       console.log('\n http.request -> getData', respond)
       callback(null, JSON.parse(body))
       let body = '';
       respond.on('data', function (chunk) {
           body += chunk;
       })
       respond.on('end', function () {

       })
       respond.on('error', callback);

   })
       .on('error', callback)
       .end();
 */

/**
 *
 *
 */