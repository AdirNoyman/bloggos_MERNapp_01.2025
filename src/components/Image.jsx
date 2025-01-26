import { IKImage } from 'imagekitio-react';

const Image = ({src,className, imgWidth, imgHeight, description}) => {
  return (
    <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} path={src} alt={description} className={className} loading="lazy" lqip={{ active: true, quality: 20 }} width={imgWidth} height={imgHeight} />
  )
}

export default Image