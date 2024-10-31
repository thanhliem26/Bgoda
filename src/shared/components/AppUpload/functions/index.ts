import { UploadRequestOption } from 'rc-upload/lib/interface';
import { uploadImageRequest } from '../services';
import RESTClientService from 'services/axios-service';
import { isLeft, isRight, unwrapEither } from 'shared/utils/handleEither';

export const uploadImage = async (options: UploadRequestOption) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();

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
