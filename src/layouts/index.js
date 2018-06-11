import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.scss'

import Footer from '../components/Footer';
import Header from '../components/Header';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>iCM | Home</title>
            <meta name="description" content="Landing page for the up and coming artist iCM. Based on Canberra and writing & producing his own songs" />
            <meta name="keywords" content="Canberra,R&B,iCM,Fantasies at fiveam,Canberra artists,stranded" />
        </Helmet>
        <div>
            <Header />
            { children() }
            <Footer />
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
