import React from "react";
import { Image } from "./image";
import Link from 'next/link';
import { Container, Row, Col } from '@mverissimoo/emotion-grid';

interface DescriptionProps {
    imageName: string
    title: string
    description: string
    path: string
}

const Description: React.FC<DescriptionProps> = ({ title, description, path }) =>
    <>
        <h2 css={{ textAlign: "center", margin: 0 }}>{title}</h2>
        <p css={{
            height: '6rem',
            fontSize: '1.3rem',
            lineHeight: '1.2',
            overflow: "hidden",
            marginBottom: '8px',
        }}>{description}</p>
        <Link href={path}><a css={{ fontWeight: "bold" }}>詳しく見る</a></Link>
    </>

export interface BusinessProps {
    system: DescriptionProps
    construct: DescriptionProps
}

export const BusinessArea: React.FC<BusinessProps> = ({ system, construct }) =>
    <Container fluid css={{ marginTop: '40px' }}>
        <h1 css={{ textAlign: "center" }}>事業について</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Description {...system}></Description>
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
                <Description {...construct}></Description>
            </Col>
        </Row>
    </Container>