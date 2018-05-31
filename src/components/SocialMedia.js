import React from 'react';

import fb from '../img/fb-icon.svg';
import tw from '../img/tw-icon.svg';
import insta from '../img/in-icon.svg';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <div className="title">
                <h3>Follow</h3>
            </div>
            <ul>
                <li><a href="https://www.facebook.com/itsCrypticMusic/"><img src={fb} alt="Visit Facebook Page" /></a></li>
                <li><a href="https://twitter.com/ICM11542461"><img src={tw} alt="Visit Twitter Page" /></a></li>
                <li><a href="https://www.instagram.com/itscrypticmusic/"><img src={insta} alt="Visit Instagram Page" /></a></li>
            </ul>
        </div>
    )
}

export default SocialMedia;