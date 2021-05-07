import Layout from '../components/layout/layout';
import { Image } from '../components/image';
import React from "react";
import { css } from '@emotion/react';

const videoCss = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Video = () => {
    return <Image css={videoCss} src="top/thumbnail.png"></Image>
}

const videoAreaCss = css`
    padding: 0;
    max-height: 1080px;
    min-height: 500px;
`

const VideoArea = () => {
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
    </div>
}

export const Home = () => {

    return <>
        <Layout>
            <VideoArea></VideoArea>
        </Layout>
    </>
}

export default Home;