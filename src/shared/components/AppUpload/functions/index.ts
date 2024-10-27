import axios from 'axios';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import { uploadImageRequest } from '../services';
import RESTClientService from 'services/axios-service';
import { isLeft, isRight, unwrapEither } from 'shared/utils/handleEither';

export const uploadImage = async (options: UploadRequestOption) => {
    // console.log("🚀 ~ options:", options)
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    // const config = {
    //     headers: { "content-type": "multipart/form-data" },
    //     onUploadProgress: (event: ProgressEvent) => {
    //         if (event.total) {
    //             const percentCompleted = (event.loaded / event.total) * 100;
    //             onProgress?.({ percent: percentCompleted }, file as File);
    //         }
    //     }
    // };

    fmData.append("image", file as Blob);

    const queryString = uploadImageRequest();
    const response = await RESTClientService.fetchREST(queryString, {image: file})
    if(isLeft(response)) {
        //@ts-ignore
        onError?.(unwrapEither(response))

    }
    if(isRight(response)) {
        onSuccess?.(unwrapEither(response)?.metaData?.url)
    }
};
