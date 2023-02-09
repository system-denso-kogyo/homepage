import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";
import { ArticleProps } from "./elements/article";

export interface BusinessProps {
    system: ArticleProps
    construct: ArticleProps
}

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0.5, lg: 0.5 }

export const BusinessArea: React.FC<BusinessProps> = ({ system, construct }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>事業について</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col xs={3.5} sm={5} md={4.5}>
                <Description {...system.description}></Description>
            </Col>
            <Col sm={6} md={4.5} offset={offset}>
                <Image width={'100%'} src={system.imageName}></Image>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col xs={3.5} sm={5} md={4.5}>
                <Image width={'100%'} src={construct.imageName}></Image>
            </Col>
            <Col sm={6} md={4.5} offset={offset} css={{ whiteSpace: 'pre-line' }}>
                <Description {...construct.description}></Description>
            </Col>
        </Row>
    </Container>