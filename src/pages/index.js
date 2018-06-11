import React from 'react'

import SocialMedia from '../components/SocialMedia'

import bgOption1 from '../img/bg-option1.jpg';
import bgOption2 from '../img/bg-option2.jpg';
import bgOption3 from '../img/bg-option3.jpg';

import album_logo from '../img/album_logo.svg';

let bgOptions = [bgOption1, bgOption2, bgOption3];

export default class IndexPage extends React.Component {
    render() {
        return (
            <section className="homepage" style={{
                'background': `url(${ bgOption3 }) no-repeat center center / cover`
            }}>
                <img className="album-logo" src={album_logo} alt="Fantasies at Five am Album Logo" />
                <h2>FANTASIES AT FIVE<span>am</span></h2>
                <h3>coming soon</h3>
                <SocialMedia />
            </section>
        )
    }
}
