import { Image } from '../image';
import { css } from '@emotion/react';

const videoCss = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Video = () => {
    return <Image css={videoCss} src="top/thumbnail.png"></Image>
}