import axiosService from 'configs/api';
import { cloneDeep } from 'lodash';
import { BaseRecord } from 'shared/interfaces/common';
import ErrorException, { CustomAxiosResponse } from 'shared/interfaces/response';
import { makeLeft, makeRight } from 'shared/utils/handleEither';

export interface IBuildRequest {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    options?: {
        baseUrl?: string;
        headers?: Record<string, string>;
    };
    slash_id?: boolean
}

export interface IRequestReturn {
    url: string;
    requestOptions: {
        method: string;
        headers: Record<string, string>;
    };
    slash_id: boolean
}

class RESTClientService {
    static buildRequest = (props: IBuildRequest): IRequestReturn => {
        const { endpoint, method, options, slash_id = false } = props;

        const baseUrl = options?.baseUrl || axiosService.defaults.baseURL;
        const headers = options?.headers ?? {};

        const url = new URL(endpoint, baseUrl).toString();

        const requestOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        return { url, requestOptions, slash_id };
    };

    static fetchREST = async (
        requestString: IRequestReturn,
        params?: Record<string, any>
    ): Promise<CustomAxiosResponse> => {
        try {
            const { requestOptions, slash_id } = requestString;
            let url = (params?.id && slash_id) ? requestString.url + `/${params?.id}` : requestString.url;

            let finalUrl = url;
            const config = { ...requestOptions };

            if (config.method === 'GET' && params) {
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

            if (['POST', 'PUT', 'PATCH'].includes(config.method) && params) {
                 //@ts-ignore
                config.data = params;
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
            const data = (error?.response?.data ?? {}) as BaseRecord;
            const apiError = ErrorException.fromJson(data);
            return makeLeft(apiError);
        }
    };
}

export default RESTClientService;
