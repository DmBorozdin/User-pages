import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import "./layout.scss";
import { MenuLeftItem } from "../../const";
import {ReactComponent as StatisticsLogo} from "../../img/icons/statistics.svg";
import {ReactComponent as ArrowBackLogo} from "../../img/icons/arrow-back.svg";
import {ReactComponent as InvoicesLogo} from "../../img/icons/calculate.svg";
import {ReactComponent as ScheduleLogo} from "../../img/icons/schedule.svg";
import {ReactComponent as NotesLogo} from "../../img/icons/notes.svg";
import {ReactComponent as FriendsLogo} from "../../img/icons/friends.svg";
import {ReactComponent as PhotosLogo} from "../../img/icons/photos.svg";
import {ReactComponent as SettingsLogo} from "../../img/icons/settings.svg";
import {ReactComponent as ArrowDownLogo} from "../../img/icons/arrow-down.svg";

const Layout = ({ children, activeLeftMenu }) => {
    return (
        <Fragment>
            <header className="page-header">
                <div className="page-header__top">
                    <div className="page-header__wrap"> 
                        <ArrowBackLogo/>
                        <p className="page-header__title">User pages - Profile</p>
                    </div>
                    <div className="page-header__tools">
                        <div className="page-header__tools_item">
                            <StatisticsLogo/>
                            Statistics
                        </div>
                        <div className="page-header__tools_item">
                            <InvoicesLogo/>
                            Invoices
                        </div>
                        <div className="page-header__tools_item">
                            <ScheduleLogo/>
                            Schedule
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <ul className="menu__left">
                        {Object.values(MenuLeftItem).map(menuItem => {
                            return <li className={`menu__item ${activeLeftMenu === menuItem.name ? 'menu__item_active' : ''}`} key={menuItem.name}>
                                <Link to = {menuItem.route} className="menu__item_link">
                                    {menuItem.logo}
                                    {menuItem.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                    <div className="menu__right">
                        <div className="menu__right_item">
                            <NotesLogo/>
                            Notes
                        </div>
                        <div className="menu__right_item">
                            <FriendsLogo/>
                            Friends
                        </div>
                        <div className="menu__right_item">
                            <PhotosLogo/>
                            Photos
                        </div>
                        <div className="menu__right_item">
                            <SettingsLogo/>
                            <ArrowDownLogo/>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;