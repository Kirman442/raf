import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function Head({
    title = 'Rafael Dolgi', //* Default meta tags 
    description = 'Rafael Dolgi',
    keywords = 'gis, qgis, arcgis, development, Programmierung, Datenbearbeitung, Python, Javascript, React'
}) {
    return (
        <Helmet>
            {/* Essential meta tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

            {/* Dynamic meta tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Static meta tags */}
            <meta name="author" content="GIS-Projekte" />
            <meta name="robots" content="noindex, nofollow" />

            {/* Favicons */}
            {/* <link
                rel="shortcut icon"
                href={`${import.meta.env.BASE_URL}images/favicon_32.png`}
            />
            <link
                rel="apple-touch-icon"
                href={`${import.meta.env.BASE_URL}images/favicon_57.png`}
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href={`${import.meta.env.BASE_URL}images/favicon_72.png`}
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href={`${import.meta.env.BASE_URL}images/favicon_114.png`}
            /> */}
        </Helmet>
    );
}

// PropTypes
Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
};

export default Head;