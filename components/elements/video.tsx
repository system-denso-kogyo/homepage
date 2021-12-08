import { css } from '@emotion/react';
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

export const Video: React.FC<VideoProps> = forwardRef<HTMLVideoElement, VideoProps>((prop, ref) => {
    return <video {...prop} css={videoCss} ref={ref} />
});