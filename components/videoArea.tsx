import React from "react";
import { css } from '@emotion/react';
import { Video } from './elements/video';

const videoAreaCss = css`
    padding: 0;
    max-height: 1080px;
    min-height: 500px;
    position: relative;
`

export const VideoArea = (props) => {
    // 表示域の高さを取得
    const [outerHeight, setOuterHeight] = React.useState(window.outerHeight);
    // windowのリサイズのたびに高さを更新
    const updateOuterHeight = () => {
        setOuterHeight(window.outerHeight);
        console.log(window.outerHeight);
    };
    React.useEffect(() => {
        window.addEventListener('resize', updateOuterHeight);
        return () => window.removeEventListener('resize', updateOuterHeight);
    });
    // 表示域の高さをCSSで設定
    const height = css`height: ${outerHeight - 140}px;`;

    return <div css={[videoAreaCss, height]}>
        <Video></Video>

        {props.children /* 子要素を受け入れる */}
    </div>
}