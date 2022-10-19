import { useRef, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../../types/register.type";

interface UploadImageProps {
  name: any, //"mainPhotoFileList" | `recipeSteps.${number}.photoFileList` | "completionPhotoFileList"
  defaultSrc?: string,
  width?: string,
  height?: string
}

export default function UploadImage({
  name,
  defaultSrc="https://recipe1.ezmember.co.kr/img/pic_none2.gif",
  width="128px",
  height="128px"
}: UploadImageProps) {
  const [src, setSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement|null>(null);

  const { register, setValue } = useFormContext<FormValues>();
  const { ref, ...rest } = register(name);

  const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files[0]) {
      const src = URL.createObjectURL(event.target.files[0]);

      setSrc(src);
      
      const dataTransfer = new DataTransfer();
      Array.from(event.target.files).forEach(file => {
        dataTransfer.items.add(file);
      });
      setValue(name, dataTransfer.files);
      //setValue(name, event.target.files);
    }
  }

  const deletePhoto = () => {
    setSrc(null);
    setValue(name, new DataTransfer().files);
  }

  return (
    <>
      <Figure>
        <Img
          width={width}
          height={height}
          src={!src ? defaultSrc: src}
          onClick={() => src ? () => null : fileInputRef.current?.click()}
        />
        {/*
        <Figcaption>{uploadStatus.progress}</Figcaption>
        */}
        {
          src && 
          <DeletePhotoButton type="button" onClick={deletePhoto}>X</DeletePhotoButton>
        }
        <input
          {...rest}
          accept="image/*"
          style={{display: 'none'}}
          type="file"
          onChange={fileSelectedHandler}
          ref={e => {
            ref(e)
            fileInputRef.current = e;
          }}
         />
      </Figure>

    </>
  )
}

const Img = styled.img`
  border: 1px solid lightgray;
`

const Figure = styled.figure`
  position: relative;
  display: inline-flex;
  margin: 0;
`
/*
const Figcaption = styled.figcaption`
  position: absolute;
  width: 128px;
  text-align: right;
  left: 0;
  top: 110px;
  font-weight:bold;
`
*/
const DeletePhotoButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`