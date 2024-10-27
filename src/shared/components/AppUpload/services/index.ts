import RESTClientService from "services/axios-service"

export const uploadImageRequest = () => {
    return RESTClientService.buildRequest({
        endpoint: '/api/admin/images',
        method: 'POST',
        options: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
        upload: true
    })
}