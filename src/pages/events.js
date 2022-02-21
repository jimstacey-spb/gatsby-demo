import * as React from "react"
import Layout from "../components/Layout";
import "../css/events-page.scss";
import {useEffect} from "react";
import {Helmet, Trans as T, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import {graphql} from "gatsby";
import * as PropTypes from "prop-types";
import {Translation} from 'react-i18next';

const EventsPage = () => {
    const {t} = useI18next();

    const [dogs, setDogs] = React.useState([]);

    useEffect(() => {
        if (!dogs.length) {
            fetch('https://dog.ceo/api/breed/pomeranian/images/random/20')
                .then(res => res.json())
                .then(result => setDogs(result.message));
        }
    })

    const dogPhotos = dogs.map((item) => <img src={item} alt="" key={item}/>)


    return (
        <Layout>
            <Helmet>
                <title>{t('html_title')} - {t('events_page.title')}</title>
            </Helmet>
            <div className="events-page__intro">
                <h4>
                    {t('events_page.dogs_dialog')}
                </h4>
            </div>
            <div className="wrapper">
                <div className="events-page__photos">
                    {dogPhotos}
                </div>
            </div>
        </Layout>
    )
};

export default EventsPage;

export const query = graphql`
   query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}, ns: {in: ["events-page", "common"]}}) {
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