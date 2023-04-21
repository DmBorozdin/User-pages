import React, {Fragment} from "react";
import "./layout.scss";
import {ReactComponent as StatisticsLogo} from "../../img/icons/statistics.svg";
import {ReactComponent as ArrowBackLogo} from "../../img/icons/arrow-back.svg";
import {ReactComponent as InvoicesLogo} from "../../img/icons/calculate.svg";
import {ReactComponent as ScheduleLogo} from "../../img/icons/schedule.svg";
import {ReactComponent as MenuLogo} from "../../img/icons/menu.svg";
import {ReactComponent as LocationLogo} from "../../img/icons/location.svg";
import {ReactComponent as TimeLogo} from "../../img/icons/time.svg";
import {ReactComponent as NotesLogo} from "../../img/icons/notes.svg";
import {ReactComponent as FriendsLogo} from "../../img/icons/friends.svg";
import {ReactComponent as PhotosLogo} from "../../img/icons/photos.svg";
import {ReactComponent as SettingsLogo} from "../../img/icons/settings.svg";
import {ReactComponent as ArrowDownLogo} from "../../img/icons/arrow-down.svg";

const Layout = ({ children }) => {
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
                    <div className="menu__left">
                        <div className="menu__item menu__item_active">
                            <MenuLogo/>
                            Activity
                        </div>
                        <div className="menu__item">
                            <LocationLogo/>
                            Map
                        </div>
                        <div className="menu__item">
                            <TimeLogo/>
                            Time
                        </div>
                    </div>
                    <div className="menu__right">
                        <div className="menu__item">
                            <NotesLogo/>
                            Notes
                        </div>
                        <div className="menu__item">
                            <FriendsLogo/>
                            Friends
                        </div>
                        <div className="menu__item">
                            <PhotosLogo/>
                            Photos
                        </div>
                        <div className="menu__item">
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