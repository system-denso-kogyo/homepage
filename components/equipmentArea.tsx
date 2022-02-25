import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";
import { Achievements } from "./elements/achievements";
import { SystemProps } from "./systemArea";

export const EquipmentArea: React.FC<SystemProps> = ({ introduction, achievements }) =>
    <Container fluid css={{
        marginTop: '80px',
        borderBottom: '1px solid #457b9d',
        paddingBottom: '40px'
    }}>
        <h1 css={{ textAlign: "left" }}>設備工事部</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={introduction.imageName}></Image>
            </Col>
            <Col sm={3}>
                <Description {...introduction.description}></Description>
            </Col>
        </Row>
        <Achievements {...achievements}></Achievements>
    </Container>

