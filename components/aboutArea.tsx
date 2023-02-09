import React from "react";
import { css } from '@emotion/react';
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";

export interface AboutProps {
    articles: ArticleProps[]
}

export const AboutArea: React.FC<AboutProps> = ({ articles }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>歴史と未来　 History　＆　Future</h1>
        <Row justify={"center"} css={css`margin-top: 40px; align-items: flex-start}`}>
            {articles.map((article) =>
                <Col xs={3.5} sm={6} md={4.5} xl={3.25}>
                    <Article {...article}></Article>
                </Col>
            )}
        </Row>
    </Container>