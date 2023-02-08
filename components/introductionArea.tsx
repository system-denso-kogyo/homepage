import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { DescriptionParagraph } from "./elements/description";

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0.5, lg: 0.5 }


export interface IntroductionProps {
    introduction: string
}

export const IntroductionArea: React.FC<IntroductionProps> = ({ introduction }) =>
    <Container fluid css={{
        marginTop: '-25px',
        borderBottom: '1px solid #457b9d',
        paddingBottom: '20px'
    }}>
        <h1 css={{ textAlign: "left" }}>事業内容</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col md={9}>
                <DescriptionParagraph description={introduction}></DescriptionParagraph>
            </Col>
        </Row>
    </Container> 
