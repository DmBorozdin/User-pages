import React from "react";
import { Link } from "react-router-dom";
import withLayout from "../../hocs/with-layout";
import "./activity.scss";
import ShortPostView from "../short-post-view/short-post-view";
import {ReactComponent as TelegramLogo} from "../../img/icons/telegram.svg";
import {ReactComponent as HHruLogo} from "../../img/icons/hh.ru.svg";
import {ReactComponent as TwitterLogo} from "../../img/icons/twitter.svg";
import {ReactComponent as SettingsLogo} from "../../img/icons/settings.svg";
import {ReactComponent as CalendarLogo} from "../../img/icons/calendar.svg";
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";
import {ReactComponent as PersonLogo} from "../../img/icons/person.svg";
import {ReactComponent as FinanceLogo} from "../../img/icons/finance.svg";
import {ReactComponent as SchemeLogo} from "../../img/icons/scheme.svg";
import {ReactComponent as PeopleLogo} from "../../img/icons/people.svg";

const Activity = () => {
    const data = {
        posts: [
            {
            title: 'Sunset Krasnoyarsk',
            time: 53
            },
            {
                title: 'Morning of Siberia',
                time: 56
            },
        ]
    }
    return (
        <div className="activity-wrap">
            <ul className="activity-list">
                <li className="activity-list__item">
                    <div className="post"></div>
                </li>
                {data.posts.map(post => (
                    <li className="activity-list__item">
                        <ShortPostView post = {post}/>
                    </li>
                ))}
                
            </ul>
            <div className="side-bar">
                <div className="user-card">
                    <img src="./img/user-logo.jpg" alt="User logo" className="user-card__logo"/>
                    <div className="user-card__info">
                        <p className="user-card__info_name">Dmitrii Borozdin</p>
                        <p className="user-card__info_profession">Frontend developer</p>
                    </div>
                    <div className="user-card__links">
                        <a href = "https://t.me/DmBorozdin"><TelegramLogo/></a>
                        <a href="https://novosibirsk.hh.ru/resume/341d9996ff0b88f0480039ed1f666d67466156"><HHruLogo/></a>
                        <a href="https://twitter.com"><TwitterLogo/></a>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <div className="side-bar__menu_item">
                        <span className="side-bar__menu_title">Navigation</span>
                        <ChevronDownLogo/>
                    </div>
                    <div className="side-bar__navigation">
                        <div className="side-bar__menu_item">
                            <PersonLogo/>
                            <span>My profile</span>
                        </div>
                        <div className="side-bar__menu_item">
                            <FinanceLogo/>
                            <span>Balance</span>
                            <div className="side-bar__menu_balance-count">$ 1,430</div>
                        </div>
                        <div className="side-bar__menu_item">
                            <SchemeLogo/>
                            <span>Connections</span>
                            <div className="side-bar__menu_count side-bar__menu_connection-count">29</div>
                        </div>
                        <div className="side-bar__menu_item">
                            <PeopleLogo/>
                            <span>Friends</span>
                        </div>
                    </div>
                    <div className="side-bar__menu_item">
                        <CalendarLogo/>
                        <span>Events</span>
                        <div className="side-bar__menu_count">45</div>
                    </div>
                    <div className="side-bar__menu_item">
                        <SettingsLogo/>
                        Account settings
                    </div>
                </div>
                <div className="side-bar__review">
                    <div className="side-bar__review_item">
                        <p className="side-bar__review_title">Share your thoughts</p>
                        <ChevronDownLogo/>
                    </div>
                    <div className="side-bar__review_item">
                        <textarea className="side-bar__review_input" placeholder="Enter your message..."></textarea>
                    </div>
                    <div className="side-bar__review_item">
                        <button className="side-bar__review_btn" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withLayout(Activity);