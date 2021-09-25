import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0.5, lg: 0.5 }

export const IntroductionArea: React.FC<IntroductionProps> = ({ introduction, construct, system }) => 
    <Container fluid css={{ 
                    marginTop: '-25px' ,
                    borderBottom: '1px solid #457b9d',
                    paddingBottom: '20px'
                }}>
        <h1 css={{ textAlign: "left" }}>事業内容</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col md={9}>
                <Description {...introduction.description}></Description>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={construct.imageName}></Image>
			</Col>
            <Col sm={3}>
                <Description {...construct.description}></Description>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={system.imageName}></Image>
            </Col>
            <Col sm={3}>
                <Description {...system.description}></Description>
            </Col>
        </Row>

    </Container>
