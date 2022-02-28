import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { SubTitle } from "./elements/subTitle";


export interface OverviewProps {
    overview: { title: string, description: string }[]
}

export const OverviewArea: React.FC<OverviewProps> = ({ overview }) =>
    <Container fluid css={{ marginTop: '40px' }}>
        <SubTitle text={'企業概要'}></SubTitle>
        <Container css={{ fontSize: '1.4rem', color: '#707F89', marginTop: '60px' }}>
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