import React from "react";
import { Image } from "../image";
import { Description, DescriptionProps } from "./description";

export interface ArticleProps {
    description?: DescriptionProps
    imageName?: string
}

export const Article: React.FC<ArticleProps> = ({ description, imageName }) =>
    <>
        <Image width={'100%'} height={'40%'} src={imageName}></Image>
        <Description {...description}></Description>
    </>