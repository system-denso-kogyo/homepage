import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { SubTitle } from "./elements/subTitle";

export interface RecruitSystemNewGraduateProps {
    history: { year: string, body: {  text: string }[] }[]
}

export const RecruitSystemNewGraduateArea: React.FC<RecruitSystemNewGraduateProps> = ({ history }) =>
    <Container fluid css={{ marginTop: '40px'}}>
        <SubTitle text={'新卒募集要項'}></SubTitle>
        <Container css={{ fontSize: '1.4rem', color: '#707F89', marginTop: '60px' , height: "500px", width: "600px", overflow: "auto" ,border: "solid 2px #707F89" }}>
            {history.map(({ year, body }) =>
                <div css={{ marginTop: '2rem'}}>
                    <hr />
                    {body.map(({ text }, index) =>
                        <Row justify={"center"}  css={{ marginTop: '16px' }}>
                            <Col sm={1}>
                                {index === 0 ? year : ''}
                            </Col>
                            <Col css={{ whiteSpace: 'pre-line' }}>
                                {text}
                            </Col>
                        </Row>
                    )}
                </div>
                 
            )}
        </Container>

    </Container>