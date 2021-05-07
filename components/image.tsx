import React from "react";
import { CSSObject } from '@emotion/react'

type ImgProps = JSX.IntrinsicElements['img'] & CSSObject

export const Image: React.FC<ImgProps> = ({ css, ...props }) => {
    return (
        <img css={css} {...props} />
    );
};