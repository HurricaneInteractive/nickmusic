import React from 'react'

import SocialMedia from '../components/SocialMedia'

import bgOption1 from '../img/bg-option1.jpg';
import bgOption2 from '../img/bg-option2.jpg';
import bgOption3 from '../img/bg-option3.jpg';

let bgOptions = [bgOption1, bgOption2, bgOption3];

export default class IndexPage extends React.Component {
    render() {
        return (
            <section className="homepage" style={{
                'background': `url(${ bgOption3 }) no-repeat center center / cover`
            }}>
                <p className="display-text">iCM</p>
                <h1>FANTASIES AT FIVE<span>am</span><br/>Coming Soon</h1>
                <SocialMedia />
            </section>
        )
    }
}
