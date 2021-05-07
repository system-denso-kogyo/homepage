import React from "react";

type ImgProps = JSX.IntrinsicElements['img']

export const Image: React.FC<ImgProps> = (props) => {
    return (
        <img {...props} />
    );
};