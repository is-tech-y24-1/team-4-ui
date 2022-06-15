//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.0.0 (NJsonSchema v10.7.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class UserClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance ? instance : axios.create();

        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";

    }

    /**
     * Create new user with new token which will expire in 7 days.
     * @param body (optional) DTO which contains parameters for new user: email, password.
     * @return Success
     */
    register(body: UserRegisterDto | undefined , cancelToken?: CancelToken | undefined): Promise<string> {
        let url_ = this.baseUrl + "/User/register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processRegister(_response);
        });
    }

    protected processRegister(response: AxiosResponse): Promise<string> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;

            return Promise.resolve<string>(result200);

        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("Bad Request", status, _responseText, _headers);

        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("Server Error", status, _responseText, _headers);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<string>(null as any);
    }

    /**
     * Generate new token to user if password matched. Token will expire in 7 days.
     * @param body (optional) DTO which contains parameters to identify user: email, password
     * @return Success
     */
    login(body: UserLoginDto | undefined , cancelToken?: CancelToken | undefined): Promise<string> {
        let url_ = this.baseUrl + "/User/login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "PATCH",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLogin(_response);
        });
    }

    protected processLogin(response: AxiosResponse): Promise<string> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;

            return Promise.resolve<string>(result200);

        } else if (status === 401) {
            const _responseText = response.data;
            return throwException("Unauthorized", status, _responseText, _headers);

        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("Not Found", status, _responseText, _headers);

        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("Server Error", status, _responseText, _headers);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<string>(null as any);
    }

    /**
     * Delete token.
     * @param token (optional) DTO which contains token (ID of token to be precise).
     * @return Success
     */
    logout(token: string | undefined , cancelToken?: CancelToken | undefined): Promise<void> {
        let url_ = this.baseUrl + "/User/logout";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "PATCH",
            url: url_,
            headers: {
                "Token": token !== undefined && token !== null ? "" + token : "",
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processLogout(_response);
        });
    }

    protected processLogout(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(null as any);

        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("Bad Request", status, _responseText, _headers);

        } else if (status === 401) {
            const _responseText = response.data;
            return throwException("Unauthorized", status, _responseText, _headers);

        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("Forbidden", status, _responseText, _headers);

        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("Not Found", status, _responseText, _headers);

        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("Server Error", status, _responseText, _headers);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * Return a user model if token hasn't expired yet.
     * @param token (optional) Contains token (ID of token to be precise).
     * @return Success
     */
    get(token: string | undefined , cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/User/get";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Token": token !== undefined && token !== null ? "" + token : "",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = UserGetDto.fromJS(resultData200);
            return Promise.resolve<UserGetDto>(result200);

        } else if (status === 400) {
            const _responseText = response.data;
            return throwException("Bad Request", status, _responseText, _headers);

        } else if (status === 403) {
            const _responseText = response.data;
            return throwException("Forbidden", status, _responseText, _headers);

        } else if (status === 404) {
            const _responseText = response.data;
            return throwException("Not Found", status, _responseText, _headers);

        } else if (status === 500) {
            const _responseText = response.data;
            return throwException("Server Error", status, _responseText, _headers);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<UserGetDto>(null as any);
    }
}

export class UserGetDto implements IUserGetDto {
    id?: string;
    email?: string | undefined;

    constructor(data?: IUserGetDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.email = _data["email"];
        }
    }

    static fromJS(data: any): UserGetDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserGetDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["email"] = this.email;
        return data;
    }
}

export interface IUserGetDto {
    id?: string;
    email?: string | undefined;
}

export class UserLoginDto implements IUserLoginDto {
    email?: string | undefined;
    password?: string | undefined;

    constructor(data?: IUserLoginDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): UserLoginDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["password"] = this.password;
        return data;
    }
}

export interface IUserLoginDto {
    email?: string | undefined;
    password?: string | undefined;
}

export class UserRegisterDto implements IUserRegisterDto {
    email?: string | undefined;
    password?: string | undefined;

    constructor(data?: IUserRegisterDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): UserRegisterDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserRegisterDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["password"] = this.password;
        return data;
    }
}

export interface IUserRegisterDto {
    email?: string | undefined;
    password?: string | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}