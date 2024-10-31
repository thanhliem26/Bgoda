import { AxiosRequestConfig } from 'axios';
import axiosService from 'configs/api/axiosServiceApplication';
import { cloneDeep } from 'lodash';
import { ResponseServer } from 'shared/interfaces/common';
import ErrorException, { CustomAxiosResponse } from 'shared/interfaces/response';
import { makeLeft, makeRight } from 'shared/utils/handleEither';

export interface IBuildRequest {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    options?: Partial<AxiosRequestConfig>
    slash_id?: boolean
    upload?: boolean
}

export interface IRequestReturn {
    url: string;
    requestOptions: Partial<AxiosRequestConfig> &  {
        method: string;
    };
    slash_id: boolean
    upload: boolean
}

class RESTClientServiceApplication {
    static buildRequest = (props: IBuildRequest): IRequestReturn => {
        const { endpoint, method, options, slash_id = false, upload = false } = props;

        const baseUrl = options?.baseURL || axiosService.defaults.baseURL;
        console.log("🚀 ~ baseUrl:", baseUrl)
        const headers = options?.headers ?? {};

        const url = new URL(endpoint, baseUrl).toString();

        const requestOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            ...options
        };

        return { url, requestOptions, slash_id, upload };
    };

    static fetchREST = async (
        requestString: IRequestReturn,
        params?: Record<string, any>
    ): Promise<CustomAxiosResponse> => {
        try {
            const { requestOptions, slash_id, upload } = requestString;
            let url = (params?.id && slash_id) ? requestString.url + `/${params?.id}` : requestString.url;

            let finalUrl = url;
            const config = { ...requestOptions };

            if ((config.method === 'GET' || config.method === 'DELETE') && params) {
                const paramsClone = cloneDeep(params);
                if(slash_id && paramsClone?.id) {
                    delete paramsClone['id'];
                }

                const urlWithParams = new URL(url);
                Object.keys(paramsClone).forEach((key) => {
                    if (paramsClone[key] !== undefined) {
                        urlWithParams.searchParams.append(key, paramsClone[key]);
                    }
                });
                finalUrl = urlWithParams.toString();
            }

            // if (['POST', 'PUT', 'PATCH'].includes(config.method) && params) {
            //      //@ts-ignore
            //     config.data = params;
            // }
            if (['POST', 'PUT', 'PATCH'].includes(config.method) && params) {
                if (upload) {
                    //upload file
                    const formData = new FormData();
                    Object.keys(params).forEach((key) => {
                        formData.append(key, params[key]);
                    });
                    //@ts-ignore
                    config.data = formData;
                } else { console.log("222")
                    //@ts-ignore
                    config.data = params;
                }
            }

            const response = await axiosService({
                ...config,
                url: finalUrl,
            });

            if (ErrorException.hasError(response)) {
                const error = ErrorException.fromJson(response);
                return makeLeft(error);
            }

            const data = response
            return makeRight(data);
        } catch (error: any) {
            console.log("🚀 ~ error:", error)
            const data = (error?.response?.data ?? {}) as ResponseServer;
            const apiError = ErrorException.fromJson(data);
            return makeLeft(apiError);
        }
    };
}

export default RESTClientServiceApplication;
