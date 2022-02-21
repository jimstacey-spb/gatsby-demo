import * as React from "react";
import "../css/topbar.scss";
import {useI18next, withTranslation, Link} from "gatsby-plugin-react-i18next";


export const topbarMenu = [
    {
        url: '/',
        i18nKey: 'about',
        dataTest: "menu_about"
    },
    {
        url: '/contests',
        i18nKey: 'contests',
        dataTest: "menu_ibs_long"
    },
    {
        url: '/events',
        i18nKey: 'events',
        dataTest: "menu_contests"
    },
]

const TopbarMenu = ({t}) => {
    const items = topbarMenu.map((item) => {
        return <Link
            to={item.url}
            data-test={item.dataTest}
            key={item.dataTest}
            className="topbar__menu-item"
            activeClassName="topbar__menu-item--active"
            partiallyActive={true}
        >
            {t(item.i18nKey)}
        </Link>;

    });

    return (
        <>
            <div className="topbar__menu">
                {items}
            </div>
        </>
    )
}

export default withTranslation()(TopbarMenu);