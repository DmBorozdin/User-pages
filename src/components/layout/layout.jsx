import React, {Fragment} from "react";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <header className="page-header">
                <div className="page-header__wrap">
                    <p className="page-header__title">User pages - Profile</p>
                </div>
                <div className="menu"></div>
            </header>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;