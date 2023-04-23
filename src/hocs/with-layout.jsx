import React from "react";
import Layout from "../components/layout/layout";

const withLayout = Component => {
    return ({activeLeftMenu, ...props}) => (
        <Layout activeLeftMenu = {activeLeftMenu}>
            <Component {...props}/>
        </Layout>
    );
};

export default withLayout;