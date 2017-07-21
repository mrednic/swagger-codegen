/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at <a href=\"http://swagger.io\">http://swagger.io</a> or on irc.freenode.net, #swagger.  For this sample, you can use the api key \"special-key\" to test the authorization filters
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@wordnik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class PetApi {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Array<string> = [];
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    private extendObj<T1, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPet(body?: models.Pet): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/pet';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/xml'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePet(petId: number, apiKey?: string): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/pet/{petId}'.replace('{' + 'petId' + '}', String(petId));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }



        localVarPath = localVarPath + "?" + $.param(queryParameters);
        headerParams['api_key'] = String(apiKey);

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'DELETE',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus(status?: Array<string>): JQueryPromise<{ response: JQueryXHR; body: Array<models.Pet>;  }> {
        let localVarPath = this.basePath + '/pet/findByStatus';

        let queryParameters: any = {};
        let headerParams: any = {};

        if (status) {
            status.forEach((element: any) => {
                queryParameters['status'].push(element);
            });
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: Array<models.Pet>, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTags(tags?: Array<string>): JQueryPromise<{ response: JQueryXHR; body: Array<models.Pet>;  }> {
        let localVarPath = this.basePath + '/pet/findByTags';

        let queryParameters: any = {};
        let headerParams: any = {};

        if (tags) {
            tags.forEach((element: any) => {
                queryParameters['tags'].push(element);
            });
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: Array<models.Pet>, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Find pet by ID
     * Returns a pet when ID &lt; 10.  ID &gt; 10 or nonintegers will simulate API error conditions
     * @param petId ID of pet that needs to be fetched
     */
    public getPetById(petId: number): JQueryPromise<{ response: JQueryXHR; body: models.Pet;  }> {
        let localVarPath = this.basePath + '/pet/{petId}'.replace('{' + 'petId' + '}', String(petId));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headerParams['api_key'] = this.configuration.apiKey;
        }

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: models.Pet, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePet(body?: models.Pet): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/pet';

        let queryParameters: any = {};
        let headerParams: any = {};


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/xml'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(body);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm(petId: string, name?: string, status?: string): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/pet/{petId}'.replace('{' + 'petId' + '}', String(petId));

        let queryParameters: any = {};
        let headerParams: any = {};
        let formParams = new FormData();
        let reqHasFile = false;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }




        localVarPath = localVarPath + "?" + $.param(queryParameters);
        if (name !== null && name !== undefined) {
            formParams.append('name', <any>name);
        }

        if (status !== null && status !== undefined) {
            formParams.append('status', <any>status);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }

        if (!reqHasFile) {
            headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }
        requestOptions.data = formParams;
        if (reqHasFile) {
            requestOptions.contentType = false;
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: any): JQueryPromise<{ response: JQueryXHR; body?: any;  }> {
        let localVarPath = this.basePath + '/pet/{petId}/uploadImage'.replace('{' + 'petId' + '}', String(petId));

        let queryParameters: any = {};
        let headerParams: any = {};
        let formParams = new FormData();
        let reqHasFile = false;

        // verify required parameter 'petId' is not null or undefined
        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }




        localVarPath = localVarPath + "?" + $.param(queryParameters);
        if (additionalMetadata !== null && additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', <any>additionalMetadata);
        }

        reqHasFile = true;
        if (file !== null && file !== undefined) {
            formParams.append('file', <any>file);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'application/xml'
        ];

        // authentication (petstore_auth) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headerParams['Authorization'] = 'Bearer ' + accessToken;
        }

        if (!reqHasFile) {
            headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }
        requestOptions.data = formParams;
        if (reqHasFile) {
            requestOptions.contentType = false;
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject(xhr, errorThrown)
        );
        return dfd.promise();
    }

}
