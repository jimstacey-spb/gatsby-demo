import * as React from "react"
import Topbar from "../components/Topbar";
import Layout from "../components/Layout";
import {Translation} from 'react-i18next';
import {graphql} from "gatsby";
import {useI18next} from 'gatsby-plugin-react-i18next';
import enFlagPath from "../images/en-flag.svg";
import ruFlagPath from "../images/ru-flag.svg";
import "../css/main-page.scss"

const IndexPage = () => {
    const {language, t} = useI18next();
    const flagPath = (() => {
        switch (language) {
            case "ru":
                return ruFlagPath;
            case "en":
                return enFlagPath;
        }

    })();

    return (<Layout>
        <h1 className="main-page__title">{t('title')}</h1>
        <div className="main-page__flag">
            <img src={flagPath}/>
        </div>
    </Layout>)

}

export default IndexPage;

export const query = graphql`
   query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}, ns: {in: ["main-page", "common"]}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;