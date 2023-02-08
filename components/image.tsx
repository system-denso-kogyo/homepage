import React from "react";
import { CSSObject } from '@emotion/react'
import router from "next/router";

type ImgProps = JSX.IntrinsicElements['img'] & CSSObject

export const Image: React.FC<ImgProps> = ({ css, src, ...props }) => {
    return (
        <img css={css} src={`${router.basePath}/${src}`} {...props} />
    );
};