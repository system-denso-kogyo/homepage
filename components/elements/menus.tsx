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

const menuCss = css`
    text-align: center;
    padding-left: 6px;
    padding-right: 6px;
    margin-top: 10px;
`

export const Menus: React.FC<MenuProps> = ({ menus }: MenuProps) => 
    <>
        {menus.map(({ name, path }) =>
            <div css={menuCss}>
                <Link href={path}>
                    <a>{name}</a>
                </Link>
            </div>
        )}
    </>