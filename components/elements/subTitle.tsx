import React from "react";
import { css } from '@emotion/react';

export interface SubTitleProps {
    text: string
}

const subTitleCss = css`
text-align: center;
color: #457B9D;
overflow:hidden;
&>*{
    display:inline-block;
    position:relative;
}
&>::after,
&>::before {
    content:"";
    position:absolute;
    top:calc(50% - (1px / 2));
    width:600px;
    border-bottom: 1px solid #457B9D;
}
&>::before{right:100%;margin-right:.6em}
&>::after{left:100%;margin-left:.6em}
`

export const SubTitle: React.FC<SubTitleProps> = ({ text }) => {

    return (<>
        <h1 css={subTitleCss}>
            <span>{text}</span>
        </h1>
    </>)
}

