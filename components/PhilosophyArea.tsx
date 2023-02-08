import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';


export interface PhilosophyProps {
    philosophy: { description: string }[]
}

export const PhilosophyArea: React.FC<PhilosophyProps> = ({ philosophy }) =>
    <Container fluid css={{ color: '#1D3557', marginTop: '40px', marginBottom: '320px' }}>
        {philosophy.map(({ description }) =>
            <Row justify={"center"} css={{ marginTop: '16px', marginBottom: '32px' }}>
                <Col sm={5.5}>
                    <Row justify={"flex-start"} css={{ marginTop: '0px', fontSize: "1.3rem" }}>
                        <Col>
                            • {description}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )}
    </Container>