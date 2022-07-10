import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Article, ArticleProps } from "./elements/article";
import { Description, DescriptionProps } from "./elements/description";
import { SubTitle } from "./elements/subTitle";


export interface RecruitEequipmentMidwayProps {
    recruit: ArticleProps
}

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0, lg: 0.5 }
const offset2 = { xs: 0.01, sm: 0.01, md: 0.01, xl: 0, lg:0 }

export const RecruitEequipmentMidwayArea: React.FC<RecruitEequipmentMidwayProps> = ({ recruit }) =>
    <Container fluid css={{ marginTop: '80px' }}>
        <SubTitle text={'中途募集要項'}></SubTitle>
        {/* recruit */}
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={recruit.imageName}></Image>
            </Col>
            <Col sm={3} offset={offset}>
                <Description {...recruit.description}></Description>
            </Col>
        </Row>
        
    </Container>
