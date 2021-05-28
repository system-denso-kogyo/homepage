import { Header, Footer } from '../../components';
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return <>
        <Header></Header>
        <main css={{ marginBottom: '100px' }}>{children}</main>
        <Footer></Footer>
    </>
}

export default Layout;