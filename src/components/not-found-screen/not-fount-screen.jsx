import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
    return (
        <div className="user-page__content">
            <h1>404. Page not found</h1>
            <Link to="/">Вернуться на главную страницу</Link>
        </div>
    )
};

export default NotFoundScreen;