import React from "react";
import Link from 'next/link';

export interface DescriptionProps {
    title?: string
    subtitle?: string
    description?: string
    path?: string
}

export const DescriptionParagraph: React.FC<{description:string}> = ({description}) => 
    <p css={{
        fontSize: '1.3rem',
        lineHeight: '1.2',
        marginTop: '8px',
        marginBottom: '8px',
    }}>{description}</p>

export const Description: React.FC<DescriptionProps> = ({ title, subtitle, description, path }) => 
    <>
        <h2 css={{ textAlign: "left", margin: 0 }}>{title}<br></br>
            {subtitle !== undefined && <span css={{
                'margin-left':'10px', fontSize:'1.1rem'}}>{subtitle}</span>}
        </h2> 
        <DescriptionParagraph description={description}></DescriptionParagraph>
        {path !== undefined && 
            <Link href={path}><a css={{ fontWeight: "bold", cursor: 'pointer' }}>詳しく見る</a></Link>}
    </>