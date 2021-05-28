import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";
import { ArticleProps } from "./elements/article";

export interface BusinessProps {
    system: ArticleProps
    construct: ArticleProps
}

export const BusinessArea: React.FC<BusinessProps> = ({ system, construct }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>事業について</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Description {...system.description}></Description>
            </Col>
            <Col sm={3} offset={{ sm: 0.5 }}>
                <Image width={'100%'} src={system.imageName}></Image>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={construct.imageName}></Image>
            </Col>
            <Col sm={3} offset={{ sm: 0.5 }}>
                <Description {...construct.description}></Description>
            </Col>
        </Row>
    </Container>