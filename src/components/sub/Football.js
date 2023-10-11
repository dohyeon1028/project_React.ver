// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import ScrollToTop from '../../function/ScrollToTop';
import Frame from './football/Frame';
import FootballItems from './football/FootballItems';



function Football() {

    //자동슬라이드
    // 자동슬라이드



    return (
        <>
            <ScrollToTop />
            <main id="football">
                <Frame />
                <FootballItems />

                <div className="custom_zone">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/img/football/youtube/pc_ucustom_heritage_zone.png`} alt='Heritage_Zone' />

                        <div className="con">
                            <h2>HERITAGE ZONE</h2>
                            <p>Wherever there is Football, there is Umbro - since 1924</p>
                            <a href="#;">View more</a>
                        </div>
                    </figure>
                    <div className="vidList">
                        <section className="video_frame">
                            {/* {Vids.map(() => (
                                <article style="left: ${(50 + (25 * index)) % 100}%;">
                                    <img src="../img/football/youtube/pc_ucustom_contents_zone.png" className="bg" alt="컨텐츠란 배경사진" />
                                    <a href="${el.snippet.resourceId.videoId}" class="pic">
                                        <img src="${el.snippet.thumbnails.medium.url}" />
                                    </a>

                                    <div class="con">
                                        <h2>CONTENTS ZONE</h2>
                                        <p>2023 UMBRO x GOALE</p>
                                        <a href="${el.snippet.resourceId.videoId}">View more</a>
                                    </div>
                                </article>
                            ))} */}
                        </section>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Football