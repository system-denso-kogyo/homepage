import React from "react";
import { Container, Row, Col } from "@mverissimoo/emotion-grid";
import { SubTitle, CompanyMap, Image } from "../components";

export interface MapProps {
    map: {
        address: string;
        nearestStation: string;
        imageName: string;
    };
}

export const MapArea: React.FC<MapProps> = ({ map }) => (
    <Container fluid css={{ marginTop: "40px" }}>
        <SubTitle text={"アクセスマップ"}></SubTitle>
        <Container css={{ fontSize: "1.4rem", color: "#707F89" }}>
            <Row justify={"center"} css={{ marginTop: "16px" }}>
                <Col sm={1}>{"所在地"}</Col>
                <Col sm={3} css={{ whiteSpace: "pre-line" }}>
                    {`${map.address}`}
                </Col>
            </Row>
            <Row justify={"center"} css={{ marginTop: "16px" }}>
                <Col sm={1}>{"最寄り駅"}</Col>
                <Col sm={3} css={{ whiteSpace: "pre-line" }}>
                    {map.nearestStation}
                </Col>
            </Row>
            <Row justify={"space-between"} align={"center"} css={{ marginTop: "16px" }}>
                <Col sm={3}>
                    <div css={{ height: "500px", width: "600px", overflow: "hidden" }}>
                        <CompanyMap height={500} width={600}></CompanyMap>
                    </div>
                </Col>
                <Col sm={3}>
                    <Image src={map.imageName}></Image>
                </Col>
            </Row>
        </Container>
    </Container>
);
