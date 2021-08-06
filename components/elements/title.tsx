import React from "react";
import { Interpolation, Theme, CSSObject } from '@emotion/react';

export interface TitleProps {
    css?: CSSObject,
    text: string
}

export const Title: React.FC<TitleProps> = ({ text, ...props }) => {

    return (<>
        <h1 css={{ textAlign: "center", margin: 0, fontSize: '3rem', color: '#457B9D' }} {...props}>{text}</h1>
    </>)
}