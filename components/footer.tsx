import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import React from "react";
import Link from 'next/link';

interface LinksProps {
    blocks: {
        name: string
        links: {
            name: string
            path: string
        }[]
    }[]
}

const LinkArea: React.FC<LinksProps> = ({ blocks }) =>
    <Container css={{
        height: '100px',
        paddingTop: '10px',
        paddingBottom: '10px'
    }}>
        <Row>
            {blocks.map(({ name, links }) =>
                <Col sm={2}>
                    <Row>
                        <Col css={{ lineHeight: '1.2rem' }}>
                            <span css={{
                                color: '#CDD6DD',
                                fontSize: '0.8rem',
                            }}>{name}</span>
                        </Col>
                        <Col sm={5}>
                            {links.map(({ name, path }, id) =>
                                <li key={id}
                                    css={{
                                        listStyleType: 'none',
                                        fontSize: '0.8rem',
                                        lineHeight: '1.2rem',
                                    }}>
                                    <Link href={path}><a css={{
                                        color: 'white',
                                    }}>{name}</a></Link>
                                </li>
                            )}
                        </Col>
                    </Row>
                </Col>
            )}
        </Row>
    </Container>

const FooterBar = () =>
    <div css={{ height: '30px' }}>
        <span css={{
            color: 'white',
            fontSize: '0.6rem',
            marginLeft: '20px'
        }}>© 2020 System Denso Kogyo Co.,Ltd</span>
    </div>

interface FooterProps {
    linksProps: LinksProps
}

export const Footer: React.FC<FooterProps> = ({ linksProps }) =>
    <div css={{ backgroundColor: '#3B4043' }}>
        <LinkArea {...linksProps}></LinkArea>
        <FooterBar></FooterBar>
    </div>