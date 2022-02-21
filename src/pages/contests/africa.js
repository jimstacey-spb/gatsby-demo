import * as React from "react"
import Layout from "../../components/Layout";
import {graphql, Link} from "gatsby";
import {Translation} from "react-i18next";
import {useI18next} from "gatsby-plugin-react-i18next";

// markup
const AfricaContestPage = () => {
    const {t} = useI18next();

    return (<Layout>
            <h5><Link to='/contests'>{t('contests_page.title')}</Link></h5>
            <h1>{t('africa_contest_page.title')}</h1>
            <h2>{t('africa_contest_page.text')}</h2>
        </Layout>
    )
}

export default AfricaContestPage;

export const query = graphql`
   query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}, ns: {in: ["contests-page", "africa-contest-page", "common"]}}) {
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