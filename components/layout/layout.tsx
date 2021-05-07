import { Header, Footer } from '../../components';
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return <>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </>
}

export default Layout;