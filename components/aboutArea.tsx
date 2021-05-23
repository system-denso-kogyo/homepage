import React from "react";
import { Image } from "./image";
import Link from 'next/link';
import { Container, Row, Col } from '@mverissimoo/emotion-grid';

interface ArticleProps {
    imageName: string
    title: string
    description: string
    path: string
}

const Article: React.FC<ArticleProps> = ({ imageName, title, description, path }) =>
    <>
        <Image width={'100%'} height={'40%'} src={imageName}></Image>
        <h2 css={{ textAlign: "center", margin: 0 }}>{title}</h2>
        <p css={{
            height: '6rem',
            fontSize: '1.3rem',
            lineHeight: '1.2',
            overflow: "hidden",
            marginBottom: '4px'
        }}>{description}</p>
        <Link href={path}><a>詳しく見る</a></Link>
    </>

export interface AboutProps {
    articles: ArticleProps[]
}

export const AboutArea: React.FC<AboutProps> = ({ articles }) =>
    <Container fluid css={{ marginTop: '40px' }}>
        <h1 css={{ textAlign: "center" }}>システム電装工業株式会社について</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            {articles.map((article) =>
                <Col sm={2.5}>
                    <Article {...article}></Article>
                </Col>
            )}
        </Row>
    </Container>