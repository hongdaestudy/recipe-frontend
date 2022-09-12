import axios from "axios";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../../types/register.type";

interface UploadImageProps {
  name: any //"mainPhotoUrl" | `recipeSteps.${number}.photoUrl` | "completionPhotoUrl"
}

export default function UploadImage({name}: UploadImageProps) {

  const [uploadStatus, setUploadStatus] = useState({
    src: "",
    progress: ""
  });

  const onUploadProgress = (event: any) => {
    const progress = Math.round(event.loaded / event.total * 100) + '%';
    setUploadStatus(prevUploadStatus => {
      return {
        ...prevUploadStatus,
        progress
      }
    })
  }

  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files) {
      //console.log(event.target.files[0]);
      const src = URL.createObjectURL(event.target.files[0]);
      setUploadStatus({
        src,
        progress: ""
      })

      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      axios.post('https://httpbin.org/post', formData, { onUploadProgress })
      .then(response => {
        setUploadStatus(prevUploadStatus => {
          return {
            ...prevUploadStatus,
            progress: ""
          }
        });
        console.log(response);
      })
    }
  }

  const fileInput = useRef<HTMLInputElement>(null);

  const { register } = useFormContext<FormValues>();

  const deletePhoto = () => {
    setUploadStatus({
      src: "",
      progress: ""
    })
  }
  return (
    <>
      <Figure>
        <Img
          src={!uploadStatus.src ? "/logo192.png": uploadStatus.src}
          onClick={() => uploadStatus.src ? () => null : fileInput.current?.click()}
        />
        <Figcaption>{uploadStatus.progress}</Figcaption>
        {
          uploadStatus.src && 
          <DeletePhotoButton type="button" onClick={deletePhoto}>X</DeletePhotoButton>
        }
      </Figure>
      <input style={{display: 'none'}} type="file" onChange={fileSelectedHandler} ref={fileInput}/>
      <input type="hidden" value={uploadStatus.src} {...register(name)}/>
    </>
  )
}

const Img = styled.img`
  width: 128px;
  height: 128px;
  border: 1px solid lightgray;
`

const Figure = styled.figure`
  position: relative;
  display: inline-block;
`
const Figcaption = styled.figcaption`
  position: absolute;
  width: 128px;
  text-align: right;
  left: 0;
  top: 110px;
  font-weight:bold;
`

const DeletePhotoButton = styled.button`
  position: absolute;
  text-align: right;
  left: 100px;
  top: 0;
`