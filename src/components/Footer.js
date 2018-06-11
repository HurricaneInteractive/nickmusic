import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import track from '../audio/LANDR-Stranded.wav';

const Footer = () => {
    return (
        <footer>
            <ReactAudioPlayer
                src={track}
                controls
                controlsList="nodownload"
            />
            <a href="https://www.winkingowl.digital/" title="Go to WinkingOwl Digital">site by WinkingOwl Digital</a>
        </footer>
    )
}

export default Footer;