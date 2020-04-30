console.log('Requester - Index');
// curl --location --request GET 'http://localhost:3000/azureFunctionPlayground/api/v1/requester'

const http = require('http');

// const fn_url = 'https://req-handler.azurewebsites.net';
const localhost = 'http://localhost:3000';
const fn_path = '/azureFunctionPlayground/api/v1/requester/';
const fn_url = localhost + fn_path;

const dummy_a = 'dummy-a';
const dummy_b = 'dummy-b';
const dummy_c = 'dummy-c';

local_url = [];
local_url.push(`${fn_url}${dummy_a}`);
local_url.push(`${fn_url}${dummy_b}`);
local_url.push(`${fn_url}${dummy_c}`);


const callUrl = function (url) {

    console.log(` callUrl -> ${url} `);

    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            // check response.statusCode [200; 299]
            if (response.statusCode < 200 && response.statusCode < 300) {
                reject(new Error(`Status code: ${response.statusCode}`));
            }
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

const collectData = function () {
    return new Promise((resolve, reject) => {
        try {
            all_data = [];
            callUrl(local_url[0])
                .then((data_a) => {
                    // console.log(data_a);
                    // all_data.push(data_a);
                    // console.log(all_data[0]);
                    callUrl(local_url[1])
                        .then((data_b) => {
                            // console.log(data_b);
                            // all_data.push(data_b);
                            // console.log(all_data[1]);
                            callUrl(local_url[2])
                                .then((data_c) => {
                                    // console.log(data_c);
                                    all_data.push(data_a);
                                    all_data.push(data_b);
                                    all_data.push(data_c);
                                    console.log(all_data);
                                })
                                .catch((error) => {
                                    console.error(`An error has ocurred ${error}`);
                                    all_data.push(error);
                                });
                        })
                        .catch((error) => {
                            console.error(`An error has ocurred ${error}`);
                            all_data.push(error);
                        });
                })
                .catch((error) => {
                    console.error(`An error has ocurred ${error}`);
                    all_data.push(error);
                });
            console.log(`all_data -> ${all_data}`);
            resolve(all_data);
        } catch (exception) {
            reject(exception);
        }
    });
}

module.exports = async function (context, req) {
    console.log('Main function');
    context.res = {
        status: 200,
        body: await collectData()
    };
}

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

    //let local_data = [];
    // local_url.forEach(async element => {
    // local_data.push(callUrl(element));
    // });
    // local_url.forEach(async element => {
    //     console.log(await callUrl(element));
    // });

    // local_url.forEach(async element => {
    //     callUrl(element)
    //         .then(async t => {
    //             local_data.push(t);
    //             console.log(t);
    //         })
    // });

    // local_url.forEach(async element => {
    //     global_data.push(await callUrl(element));
    // });

    // const data_a = await callUrl(local_url[0]);
    // const data_b = await callUrl(local_url[1]);
    // const data_c = await callUrl(local_url[2]);

    // context.res = {
    //     body: `${data_a},\n${data_b},\n${data_c}\n`
    // };

    //callUrl(local_url)
    //.then((data) => {
    // context.res = {
    //     body: data
    // }
    // })
    // .catch((error) => {
    //     console.error(`${error}\n`);
    //     context.res = {
    //         status: 404,
    //         body: 'error'
    //     }
    // });

// }

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