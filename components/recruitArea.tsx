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

export const RecruitArea: React.FC<RecruitProps> = ({ recruit, system, construct }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <h1 css={{ textAlign: "center" }}>採用情報について</h1>
        {/* recruit */}
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={recruit.imageName}></Image>
            </Col>
            <Col sm={3} offset={{ sm: 0.5 }}>
                <Description {...recruit.description}></Description>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '80px' }}>
            {/* system */}
            <Col sm={3}>
                <Article {...system}></Article>
            </Col>
            {/* construct */}
            <Col sm={3} offset={{ sm: 0.5 }}>
                <Article {...construct}></Article>
            </Col>
        </Row>
    </Container>