import { css } from '@emotion/react'
import Link from 'next/link'
import React from "react";

interface Menu {
    name: string;
    path: string;
}

export interface MenuProps {
    menus: Menu[],
    currentPathName: string
}

const menuCss = (active: boolean) => css`
    text-align: center;
    padding-left: 6px;
    padding-right: 6px;
    margin-top: 10px;
    ${active ? `border-bottom: 2px #cd2b62 solid` : ''}
`

export const Menus: React.FC<MenuProps> = ({ menus, currentPathName }: MenuProps) =>
    <>
        {menus.map(({ name, path }) =>
            <div css={menuCss(currentPathName === '/' || path === currentPathName)}>
                <Link href={path}>
                    <a css={css`font-weight: bold; cursor: pointer;}`}>{name}</a>
                </Link>
            </div>
        )}
    </>