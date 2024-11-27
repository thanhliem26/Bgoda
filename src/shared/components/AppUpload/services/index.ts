import envConfig from "configs/env"
import RESTClientService from "services/axios-service"

export const uploadImageRequest = () => {
    return RESTClientService.buildRequest({
        endpoint: '/v1/api/access/uploadFIleS3',
        method: 'POST',
        options: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            baseURL: envConfig.ENDPOINT_API_NODE
        },
        upload: true
    })
}
