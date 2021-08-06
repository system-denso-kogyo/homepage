import { Header, Footer } from '../../components';
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return <>
        <Header></Header>
        <main css={{
            marginBottom: '100px',
            top: '80px',
            position: 'relative'
        }}>
            {children}
        </main>
        <Footer {...{
            linksProps: {
                blocks: [
                    {
                        name: '企業情報',
                        links: [
                            { name: '企業情報', path: '/profile' },
                            { name: '企業理念', path: '' },
                            { name: '社長あいさつ', path: '' },
                            { name: '事業内容', path: '' },
                            { name: 'アクセスマップ', path: '' },
                        ]
                    },
                    {
                        name: 'お知らせ',
                        links: [
                            { name: 'ニュースリリーストップ', path: '' }
                        ]
                    },
                    {
                        name: '採用情報',
                        links: [
                            { name: 'システム事業採用情報', path: '' },
                            { name: '工事事業採用情報', path: '' }
                        ]
                    },
                    {
                        name: 'お問い合わせ',
                        links: [
                            { name: '03-5603-6131', path: '' },
                            { name: 'jinji@sdk-co.com', path: '' }
                        ]
                    }
                ]
            }
        }}></Footer>
    </>
}

export default Layout;