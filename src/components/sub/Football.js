// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import ScrollToTop from '../../function/ScrollToTop';
import Frame from './football/Frame';
import FootballItems from './football/FootballItems';
import CustomZone from './football/CustomZone';

function Football() {




    return (
        <>
            <ScrollToTop />
            <main id="football">
                <Frame />
                <FootballItems />
                <CustomZone />
            </main >
        </>
    )
}

export default Football