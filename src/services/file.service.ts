import api from './api';

class FileService {
  upload(file: File, uploadProgress = (progress: number): any => null) {
    const onUploadProgress = (event: any) => {
      const progress = Math.round((event.loaded / event.total) * 100);
      uploadProgress(progress);
    };

    const formData = new FormData();
    formData.append('file', file);
    return api.post('/', formData, {
      headers: {
        Accept: 'multipart/form-data',
      },
      onUploadProgress,
    });
  }
}
export default new FileService();
