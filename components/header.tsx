import { Image, Menus } from '../components';
import { css } from '@emotion/react'
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import Link from 'next/link'
import { MenuProps } from './elements/menus';

const logoCss = css`
    width: 80px;
    padding: 2px 4px 4px 10px;
    position: absolute;
`
const Logo = () => <Image css={logoCss} src="logo.png"></Image>

const headerCss = css`
    height: 80px;
    padding-top: 4px;
`

const menuProps: MenuProps = {
    menus: [
        { name: '企業理念', path: '/' },
        { name: '企業情報', path: '/' },
        { name: '採用情報', path: '/' },
        { name: 'アクセス', path: '/' },
        { name: 'お問合せ', path: '/' },
        { name: '事業内容', path: '/' }
    ]
}

export const Header = () => {
    return (
        <Container css={headerCss} fluid>
            <Row>
                <Col sm={1} css={{ padding: 0}} >
                    <Link href='/'><a><Logo></Logo></a></Link>
                </Col>
                <Col sm={3} css={{ lineHeight: 1.4}}>
                    <Row><h2 css={{ margin: 0 }}>システム電装工業株式会社</h2></Row>
                    <Row><small>System Denso Kogyo Co.,ltd</small></Row>
                    <Row><small><a href='tel:0356036131'>TEL：03-5603-6131  ／ FAX：03-5603-6132</a></small></Row>
                </Col>
                <Col sm={4}>
                    <Row noGutters css={{flexDirection: 'column'}}>
                        <Row>パンくずリスト</Row>
                        <Row justify={'center'} align={'center'} css={{ lineHeight: 1.4 }} noGutters>
                            <Menus {...menuProps}></Menus>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};