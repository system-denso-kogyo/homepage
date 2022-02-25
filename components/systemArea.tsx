import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";
import { Achievements, AchievementsProps } from "./elements/achievements";
import { BusinessArticle } from "./introductionArea";

export interface SystemProps {
    introduction: BusinessArticle
    achievements: AchievementsProps
}

export const SystemArea: React.FC<SystemProps> = ({ introduction, achievements }) =>
    <Container fluid css={{
        marginTop: '80px',
        paddingBottom: '20px'
    }} id="system">
        <h1 css={{ textAlign: "left" }}>システム部</h1>
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

