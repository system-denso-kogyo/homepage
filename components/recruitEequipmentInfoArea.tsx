import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";
import { Description, DescriptionProps } from "./elements/description";
import { SubTitle } from "./elements/subTitle";
export interface RecruitInfoProps {
    recruit: ArticleProps
    RecruitmentFlow1: ArticleProps
    RecruitmentFlow2: ArticleProps
    RecruitmentFlow3: ArticleProps
    RecruitmentFlow4: ArticleProps
    Arrow: ArticleProps
}

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0, lg: 0.5 }
const offset2 = { xs: 0.01, sm: 0.01, md: 0.01, xl: 0, lg: 0 }

export const RecruitEequipmentInfoArea: React.FC<RecruitInfoProps> = ({ recruit, RecruitmentFlow1, RecruitmentFlow2, RecruitmentFlow3, RecruitmentFlow4, Arrow }) =>
    <Container fluid css={{ paddingTop: '60px' }}>
        <h1 css={{ textAlign: "center", margin: 0, fontSize: '3rem', color: '#457B9D' }}>設備工事部部採用情報</h1>
        {/* recruit */}
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={recruit.imageName}></Image>
            </Col>
            <Col sm={3} offset={offset}>
                <Description {...recruit.description}></Description>
            </Col>
        </Row>
        <Container fluid css={{ marginTop: '40px' }}>
            <SubTitle text={'採用フロー'}></SubTitle>
            <Container css={{ fontSize: '1.4rem', color: '#707F89', marginTop: '60px', marginLeft: '0px' }}>
                <Row >
                    <Col sm={1} offset={offset}>
                        {/* RecruitmentFlow1 */}
                        <Description {...RecruitmentFlow1.description}></Description>
                    </Col>
                    <Col sm={1} css={{ marginTop: '100px' }} offset={offset2}>
                        <Description {...Arrow.description}></Description>
                    </Col>
                    <Col sm={1}>
                        {/* RecruitmentFlow2 */}
                        <Description {...RecruitmentFlow2.description}></Description>
                    </Col>
                    <Col sm={1} css={{ marginTop: '100px' }} offset={offset2}>
                        <Description {...Arrow.description}></Description>
                    </Col>
                    <Col sm={1}>
                        {/* RecruitmentFlow3 */}
                        <Description {...RecruitmentFlow3.description}></Description>
                    </Col>
                    <Col sm={1} css={{ marginTop: '100px' }} offset={offset2}>
                        <Description {...Arrow.description}></Description>
                    </Col>
                    <Col sm={1}>
                        {/* RecruitmentFlow4 */}
                        <Description {...RecruitmentFlow4.description}></Description>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Container>
