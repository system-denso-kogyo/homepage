import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';

export interface AchievementsProps {
    title: string
    left: string[]
    right: string[]
}

export const Achievements: React.FC<AchievementsProps> = ({ title, left, right }) =>
    <>
        <Row justify={"center"} css={{ marginTop: '80px' }}>
            <Col md={9} css={{ borderBottom: '1px solid #457b9d' }}>
                <h3 css={{ textAlign: "center" }}>{title}</h3>
            </Col>
        </Row>
        <Row justify={"center"} css={{ marginTop: '0px' }}>
            <Col sm={3}>
                <ul>
                    {left.map((achievement) => {
                        return (
                            achievement != "" && <li>{achievement}</li>
                        )
                    })}
                </ul>
            </Col>
            <Col sm={3}>
                <ul>
                    {right.map((achievement) => {
                        return (
                            achievement != "" && <li>{achievement}</li>
                        )
                    })}
                </ul>
            </Col>
        </Row>
    </>