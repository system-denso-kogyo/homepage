import React from "react";
import Link from 'next/link';

export interface DescriptionProps {
    title: string
    description: string
    path?: string
}

export const Description: React.FC<DescriptionProps> = ({ title, description, path }) =>
    <>
        <h2 css={{ textAlign: "center", margin: 0 }}>{title}</h2>
        <p css={{
            fontSize: '1.3rem',
            lineHeight: '1.2',
            marginTop: '8px',
            marginBottom: '8px',
        }}>{description}</p>
        {path !== undefined && <Link href={path}><a css={{ fontWeight: "bold" }}>詳しく見る</a></Link>}
    </>