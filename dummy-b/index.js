module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');


    content = JSON.stringify({
        "name": "Dummy B ",
        "date": Date.now()
    });
    context.res = {
        status: 200, /* Defaults to 200 */
        body: content
    };
}
