import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';


export interface PhilosophyProps {
    philosophy: { heading: string, description: string }[]
}

export const PhilosophyArea: React.FC<PhilosophyProps> = ({ philosophy }) =>
    <Container fluid css={{ color: '#1D3557', marginTop: '40px', marginBottom: '320px' }}>
        {philosophy.map(({ heading, description }) =>
            <Row justify={"center"} css={{ marginTop: '16px', marginBottom: '60px', fontFamily: '源ノ角ゴシック JP' }}>
                <Col sm={5.5}>
                    <Row justify={"flex-start"} css={{ marginTop: '16px', fontSize: "2.1rem" }}>
                        <Col>
                            {heading}
                        </Col>
                    </Row>
                    <Row justify={"flex-start"} css={{ marginTop: '0px', fontSize: "1.4rem" }}>
                        <Col>
                            {description}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )}
    </Container>