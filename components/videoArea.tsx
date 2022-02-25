import React, { MutableRefObject, useRef } from "react";
import { css } from '@emotion/react';
import { Video, VideoProps } from './elements/video';
import Carousel, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRef } from "react";

const videoAreaCss = css`
    padding: 0;
    max-height: 1080px;
    min-height: 500px;
    position: relative;
`

var carouselSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    centerMode: true,
    useCSS: true,
    cssEase: 'ease'
};

export interface VideoAreaProps {
    videos: {
        source: string
        destination: string
    }[]
}

export const VideoArea: React.FC<VideoAreaProps> = ({ videos, children }) => {
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

    const refs: MutableRefObject<HTMLVideoElement>[] = videos.map(() => useRef());

    return <div css={[videoAreaCss, height]}>
        <div css={{ backgroundColor: "black" }}>
            <Carousel {...{
                ...carouselSettings,
                beforeChange: (current, next) => {
                    stopVideo(refs[current].current);
                    startVideo(refs[next].current);
                },
                onInit: () => {
                    refs.forEach(r => stopVideo(r.current));
                    startVideo(refs[0].current);
                }
            }}>
                {videos.map((v, i) =>
                    <div css={{ textAlign: "center" }}>
                        <a href={v.destination} css={{ display: "block" }}>
                            <Video src={v.source} loop={true} autoPlay={true} muted={true} ref={refs[i]}></Video>
                        </a>
                    </div>
                )}
            </Carousel>
        </div>

        {children /* 子要素を受け入れる */}
    </div>
}

async function stopVideo(ve: HTMLVideoElement) {
    if (!ve.isConnected) return;
    console.log(`stop ${ve.src}`);
    ve.pause();
    ve.currentTime = 0;
}

async function startVideo(ve: HTMLVideoElement) {
    if (!ve.isConnected) return;
    console.log(`start ${ve.src}`);
    ve.currentTime = 0;
    await ve.play();
}