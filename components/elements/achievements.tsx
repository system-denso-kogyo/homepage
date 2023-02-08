import React from "react";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';

export interface AchievementsProps {
    title?: string
    achievements: AchievementsItemProps[]
}

export interface AchievementsItemProps {
    head?: string
    description?: string
    items?: string[]
}

export const Achievements: React.FC<AchievementsProps> = ({ title, achievements }) => {
    const renderAchievement = (achievement:AchievementsItemProps) => 
        <Col xs={5} sm={3} md={2}>
            {achievement.head !== undefined && <h3>{achievement.head}</h3>}
            {achievement.description !== undefined && <p>{achievement.description}</p>}
            {achievement.items !== undefined && 
                <ul>
                    {achievement.items.map((item) => <li>{item}</li>)}
                </ul>}
        </Col>
    return <>
        {title !== undefined && 
            <Row justify={"center"} css={{ marginTop: '80px' }}>
                <Col md={9} css={{ borderBottom: '1px solid #457b9d' }}>
                    <h3 css={{ textAlign: "center" }}>{title}</h3>
                </Col>
            </Row>
        }
        <Row justify={"center"} css={{ marginTop: '0px' }}>
            {achievements.map(renderAchievement)}
        </Row>
    </>
}