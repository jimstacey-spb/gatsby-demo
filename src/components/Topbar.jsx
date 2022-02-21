import * as React from "react"
import TopbarMenu from "./TopbarMenu";
import logo from "../images/logo.svg"
import {Link, useI18next} from "gatsby-plugin-react-i18next";
import enFlagPath from "../images/en-flag.svg";
import ruFlagPath from "../images/ru-flag.svg";

const Topbar = () => {
    const {changeLanguage} = useI18next();

    const handleLanguageChange = (event) => {
        const lang = event.currentTarget.lang;
        changeLanguage(lang);
    }

    return (
        <div className="topbar">
                <Link className="logo topbar__logo" to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <div className="topbar__language-change">
                    <img src={enFlagPath} lang='en' alt="" onClick={handleLanguageChange} />
                    <img src={ruFlagPath} lang='ru' alt="" onClick={handleLanguageChange} />
                </div>
                <TopbarMenu/>
        </div>
    )
}

export default Topbar
