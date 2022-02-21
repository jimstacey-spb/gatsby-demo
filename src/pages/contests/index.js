import * as React from "react"
import Layout from "../../components/Layout";
import {graphql, Link} from "gatsby";
import {Translation} from 'react-i18next';
import indiaCoverPath from "../../images/india-contest.jpg";
import africaCoverPath from "../../images/africa-contest.jpg";
import "../../css/contests.scss"
import {useI18next} from "gatsby-plugin-react-i18next";

const ContestsPage = () => {
    const {t} = useI18next();

    return (<Layout>
            <div className="contests-page">
                <h1>{t('contests_page.title')}</h1>
                <div className="contests-page__cover-list">
                    <Link to='/contests/africa' className="contests-page__cover">
                        <img src={africaCoverPath} alt=""/>
                        {t('contests_page.africa')}
                    </Link>
                    <Link to='/contests/india' className="contests-page__cover">
                        <img src={indiaCoverPath} alt=""/>
                        {t('contests_page.india')}
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ContestsPage;

export const query = graphql`
   query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}, ns: {in: ["contests-page", "common"]}}) {
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