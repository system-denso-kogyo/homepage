import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";

export interface AboutProps {
    articles: ArticleProps[]
}

export const AboutArea: React.FC<AboutProps> = ({ articles }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>歴史と未来　 History　＆　Future</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            {articles.map((article) =>
                <Col sm={2.5}>
                    <Article {...article}></Article>
                </Col>
            )}
        </Row>
    </Container>