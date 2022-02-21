import * as React from 'react';
import Topbar from "./Topbar";
import "../css/styles_v1.scss";
import {withTranslation, Translation} from 'react-i18next';
import {Helmet} from 'gatsby-plugin-react-i18next'

const Layout = ({children}) => {

    return <>
        <Translation>
            {t => (
                <>
                    <Helmet>
                        <title>{t('html_title')}</title>
                        <meta name="description" content={t('html_meta_description')}/>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                    </Helmet>
                    <Topbar/>
                    {children}
                </>)
            }
        </Translation>
    </>;
}

export default withTranslation()(Layout);
