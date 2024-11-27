import { UploadRequestOption } from 'rc-upload/lib/interface';
import { uploadImageRequest } from '../services';
import RESTClientService from 'services/axios-service';
import { isLeft, isRight, unwrapEither } from 'shared/utils/handleEither';

export const uploadImage = async (options: UploadRequestOption) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    //@ts-ignore
    const nameFile = (file as Blob)?.name + new Date().toISOString();
    fmData.append("image", file as Blob);
    fmData.append("nameFile", nameFile);

    const queryString = uploadImageRequest();
    const response = await RESTClientService.fetchREST(queryString, { file: file, nameFile: nameFile })
    // const response = await uploadImageS3(file, nameFile)
    if (isLeft(response)) {
        //@ts-ignore
        onError?.(unwrapEither(response))

    }
    if (isRight(response)) {
        onSuccess?.(unwrapEither(response)?.metadata?.Location)
    }
};
