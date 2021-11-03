import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { SubTitle } from "./elements/subTitle";


export interface HistoryProps {
    history: { year: string, body: { month: string, text: string }[] }[]
}

export const HistoryArea: React.FC<HistoryProps> = ({ history }) =>
    <Container fluid css={{ marginTop: '40px', marginBottom: '300px' }}>
        <SubTitle text={'沿革'}></SubTitle>
        <Container css={{ fontSize: '1.4rem', color: '#707F89', marginTop: '60px' }}>
            {history.map(({ year, body }) =>
                <div css={{ marginTop: '2rem' }}>
                    <hr />
                    {body.map(({ month, text }, index) =>
                        <Row justify={"center"} css={{ marginTop: '16px' }}>
                            <Col sm={1}>
                                {index === 0 ? year : ''}
                            </Col>
                            <Col sm={1} css={{ whiteSpace: 'pre-line' }}>
                                {month}
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