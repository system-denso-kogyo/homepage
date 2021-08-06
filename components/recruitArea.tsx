import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";
import { Description, DescriptionProps } from "./elements/description";

export interface RecruitProps {
    recruit: ArticleProps
    system: ArticleProps
    construct: ArticleProps
}

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0.5, lg: 0.5 }

export const RecruitArea: React.FC<RecruitProps> = ({ recruit, system, construct }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>採用情報について</h1>
        {/* recruit */}
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={recruit.imageName}></Image>
            </Col>
            <Col sm={3} offset={offset}>
                <Description {...recruit.description}></Description>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '80px' }}>
            {/* system */}
            <Col sm={3}>
                <Article {...system}></Article>
            </Col>
            {/* construct */}
            <Col sm={3} offset={offset}>
                <Article {...construct}></Article>
            </Col>
        </Row>
    </Container>