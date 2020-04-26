module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Hello Azure');

    // const apiUrl = "https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=javascript";


    context.res = {
        // status: 200, /* Defaults to 200 */
        /** get req body -> JSON format */

        body: "Hello " + req.query.name
    };

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         /** get req body -> JSON format */

    //         body: "Hello " + req.query.name + " " + req.body.name
    //     };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body and :)"
    //     };
    // }
};