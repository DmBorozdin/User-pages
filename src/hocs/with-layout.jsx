import React from "react";
import Layout from "../components/layout/layout";

const withLayout = Component => {
    return ({activeLeftMenu, setActiveLeftMenu, ...props}) => (
        <Layout activeLeftMenu = {activeLeftMenu} setActiveLeftMenu = {setActiveLeftMenu}>
            <Component {...props}/>
        </Layout>
    );
};

export default withLayout;