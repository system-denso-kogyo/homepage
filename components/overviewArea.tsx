import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";

export interface OverviewProps {
    overview: { title: string, description: string }[]
}

export const OverviewArea: React.FC<OverviewProps> = ({ overview }) =>
    <Container fluid css={{ marginTop: '40px' }}>
        <h1 css={{ textAlign: "center", color: '#457B9D' }}>企業概要</h1>
        <Container css={{ fontSize: '1.4rem', color: '#707F89' }}>
            {overview.map(({ title, description }) =>
                <Row justify={"center"} css={{ marginTop: '16px' }}>
                    <Col sm={2.5}>
                        {title}
                    </Col>
                    <Col css={{ whiteSpace: 'pre-line' }}>
                        {description}
                    </Col>
                </Row>
            )}
        </Container>
    </Container>