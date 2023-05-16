import React from "react";
import withLayout from "../../hocs/with-layout";
import "./cv.scss"

const CV = () => {
    return (
        <div className="cv">
            <div className="cv__header">
                <div className="cv__personal-info">
                    <p className="cv__personal-info_name">Бороздин Дмитрий</p>
                    <div className="cv__personal-info_contacts">
                        <span>Контакты</span>
                        <ul className="cv__personal-info_list">
                            <li>т: +7 111 111 11 11</li>
                            <li>email: borozdin1@yandex.ru</li>
                            <li>t: <a href = "https://t.me/DmBorozdin" target={'_blank'}  rel="noreferrer">@DmBorozdin</a></li>
                        </ul>
                    </div>
                </div>
                <img src="./img/cv-logo.jpg" alt="User logo" className="cv__logo"/>
            </div>
            <div className="cv__skills">
                <p>Frontend разработчик</p>
                <p className="cv__skills_title">Список навыков</p>
                <ul className="cv__skills_list">
                    <li>HTML, CSS;</li>
                    <li>SCSS/SASS;</li>
                    <li>JavaScript(ES6)/TypeScript;</li>
                    <li>React(react hooks), Redux(redux thunk/redux toolkit);</li>
                    <li>REST API, Ajax, fetch;</li>
                    <li>GIT;</li>
                    <li>Webpack;</li>
                    <li>Адаптивная вёрстка по макетам Figma с использованием PixelPerfect;</li>
                    <li>Тесты, jest, enzyme;</li>
                    <li>ООП, паттерны проектирования (MVP, Observer, Adapter и пр);</li>
                    <li>Опыт разработки SPA</li>
                    <li>Material UI;</li>
                    <li>leaflet, Yandex maps;</li>
                    <li>Базовые знания Node.js</li>
                    <li>Базовые знания PostgreSQL, MongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(withLayout(CV));