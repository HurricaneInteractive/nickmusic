import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.scss'

import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet 
            title="iCM | Home"
        />
        <div>
            {children()}
            <Footer />
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
