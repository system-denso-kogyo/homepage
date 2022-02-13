import { Image, Menus } from '../components';
import { css } from '@emotion/react';
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import Link from 'next/link';
import { MenuProps } from './elements/menus';
import { useRouter } from 'next/router';

const logoCss = css`
    width: 80px;
    padding: 2px 4px 4px 10px;
    position: absolute;
`
const Logo = () => <Image css={logoCss} src="logo.png"></Image>

const headerCss = css`
    height: 80px;
    padding-top: 4px;
    position: fixed;
    z-index: 1;
    background-color: #f1faee;
    border-bottom: 1px solid #457b9d;
`

const menus = [
    { name: '企業理念', path: '/company#' },
    { name: '企業情報', path: '/profile#' },
    { name: '採用情報', path: '/#recruitArea#' },
    { name: 'アクセス', path: '/profile#map' },
    { name: 'お問合せ', path: '/' },
    { name: '事業内容', path: '/business#' }
]

export const Header = () => {
    const router = useRouter();
    // 現在のパス
    console.log(router);
    const pathName = router.asPath ?? '';
    return (
        <Container css={headerCss} fluid>
            <Row>
                <Col sm={1} css={{ padding: 0 }} >
                    <Link href='/'><a><Logo></Logo></a></Link>
                </Col>
                <Col sm={3} css={{ lineHeight: 1.4 }}>
                    <Row><h2 css={{ margin: 0 }}>システム電装工業株式会社</h2></Row>
                    <Row><small>System Denso Kogyo Co.,ltd</small></Row>
                    <Row><small><a href='tel:0356036131'>TEL：03-5603-6131  ／ FAX：03-5603-6132</a></small></Row>
                </Col>
                <Col sm={4}>
                    <Row noGutters css={{ flexDirection: 'column' }}>
                        <Row justify={'center'} align={'center'} css={{ lineHeight: 1.4 }} noGutters>
                            <Menus menus={menus} currentPathName={pathName}></Menus>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};