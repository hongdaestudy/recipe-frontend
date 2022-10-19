import axios from 'axios';
const API_URL = process.env.REACT_APP_BASE_URL;

class FileService {
  upload(file: File, uploadProgress = (progress: number): any => null) {
    const onUploadProgress = (event: any) => {
      const progress = Math.round(event.loaded / event.total * 100);
      uploadProgress(progress);
    }

    const formData = new FormData();
    formData.append("file", file);
    return axios.post(API_URL + 'post', formData, {
      headers: {
        Accept: "multipart/form-data",
      },
      onUploadProgress
    });
  }
}
export default new FileService();