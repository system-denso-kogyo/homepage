import React from "react";
import { Image } from "./image";
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import { Description } from "./elements/description";
import { Achievements } from "./elements/achievements";

const offset = { xs: 0.5, sm: 0.5, md: 0.5, xl: 0.5, lg: 0.5 }

export const SystemArea: React.FC<SystemProps> = ({ introduction, achievements}) => 
    <Container fluid css={{ 
    				marginTop: '80px' , 
                    paddingBottom: '20px'                    
    			}}>
        <h1 css={{ textAlign: "left" }}>システム部</h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={introduction.imageName}></Image>
			</Col>
            <Col sm={3}>
                <Description {...introduction.description}></Description>
            </Col>
        </Row>
        <Achievements {...achievements}></Achievements>
    </Container>

