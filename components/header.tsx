import { Image } from '../components';
import { css } from '@emotion/react'

const logoCss = css`
    width: 80px;
    padding: 4px 4px 4px 10px;
    position: absolute;
`
const Logo = () => <Image css={logoCss} src="logo.png"></Image>

const headerCss = css`
    height: 80px;
`

export const Header = () => {
    return (
        <div css={headerCss}>
            <Logo></Logo>
        </div>
    );
};