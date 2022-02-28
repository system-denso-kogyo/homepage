import { css } from '@emotion/react';
import router from 'next/router';
import { forwardRef } from 'react';
import { MutableRefObject } from 'react';
import { RefObject } from 'react';

const videoCss = css`
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 800px;
    object-fit: cover;
`

export type VideoProps = JSX.IntrinsicElements["video"];

export const Video: React.FC<VideoProps> = forwardRef<HTMLVideoElement, VideoProps>(({ src, ...props }, ref) => {
    return <video src={`${router.basePath}/${src}`} {...props} css={videoCss} ref={ref} />
});