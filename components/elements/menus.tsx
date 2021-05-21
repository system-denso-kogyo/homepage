import { css } from '@emotion/react'
import Link from 'next/link'
import React from "react";

interface Menu {
    name: string;
    path: string;
}

export interface MenuProps {
    menus: Menu[]
}

const menuCss = (active: boolean) => css`
    text-align: center;
    padding-left: 6px;
    padding-right: 6px;
    margin-top: 10px;
    ${active ? `border-bottom: 2px #cd2b62 solid`: ''}
`

export const Menus: React.FC<MenuProps> = ({ menus }: MenuProps) => 
    <>
        {menus.map(({ name, path }) =>
            <div css={menuCss(true)}>
                <Link href={path}>
                    <a css={{ fontWeight: 'bold', fontSize: '1.2em'}}>{name}</a>
                </Link>
            </div>
        )}
    </>