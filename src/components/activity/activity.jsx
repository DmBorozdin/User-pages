import React from "react";
import { Link } from "react-router-dom";
import withLayout from "../../hocs/with-layout";
import "./activity.scss";
import ShortPostView from "../short-post-view/short-post-view";
import Post from "../post/post";
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
        post: {
            user: {
                name: 'Jason',
                surname: 'Anderson'
            },
            img: './img/abstract-art.jpg',
            text: 'Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.',
            time: '10:30 am',
            views: 432,
            commentsNumber: 47
        },
        shortPosts: [
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
                    <Post data = {data.post}/>
                </li>
                {data.shortPosts.map((post, index) => (
                    <li className="activity-list__item" key={`${post.title} ${index}`}>
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