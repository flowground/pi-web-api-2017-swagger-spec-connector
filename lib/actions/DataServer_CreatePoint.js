/**
 * Auto-generated action file for "PI Web API 2017 Swagger Spec" API.
 *
 * Generated at: 2019-09-24T15:37:46.721Z
 * Mass generator version: 1.0.0
 *
 * flowground :- Telekom iPaaS / pi-web-api-2017-swagger-spec-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'DataServer_CreatePoint'
 * Endpoint Path: '/dataservers/{webId}/points'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "webId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "webId": "webId",
    "Descriptor": "Descriptor",
    "DigitalSetName": "DigitalSetName",
    "EngineeringUnits": "EngineeringUnits",
    "Future": "Future",
    "Id": "Id",
    "Attributes": "Attributes",
    "DataServer": "DataServer",
    "EndValue": "EndValue",
    "InterpolatedData": "InterpolatedData",
    "PlotData": "PlotData",
    "RecordedData": "RecordedData",
    "Self": "Self",
    "SummaryData": "SummaryData",
    "Value": "Value",
    "Links": "Links",
    "Name": "Name",
    "Path": "Path",
    "PointClass": "PointClass",
    "PointType": "PointType",
    "Step": "Step",
    "WebId": "WebId",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'DataServer_CreatePoint',
        pathName: '/dataservers/{webId}/points',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}