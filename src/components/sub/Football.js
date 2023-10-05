import React from 'react';

function Football() {

    return (
        <main id="football">
            <div id="frame">
                <ul className="panel">
                    <li><img src="./img/football/panel/1.jpg" alt="최상의 퍼포먼스를 위한 스포츠 용품" /></li>
                    <li><img src="./img/football/panel/2.jpg" alt="스타일링과 기능성을 결합한 스포츠 웨어" /></li>
                    <li><img src="./img/football/panel/3.jpg" alt="엄브로만의 헤리티지 스타일 커스터마이징 유니폼" /></li>
                    <li><img src="./img/football/panel/4.jpg" alt="우수한 착화감 쿠셔닝 & 최상의 접지력" /></li>
                </ul>
            </div>
            <section className="wrap">
                <article>
                    <h3>UNIFORM</h3>
                    <img src="./img/football/banner/1.jpg" alt="FOOTBALL UNIFORM" />
                </article>
                <article>
                    <h3>CLOTHING</h3>
                    <img src="./img/football/banner/2.jpg" alt="FOOTBALL CLOTHING" />
                </article>
                <article>
                    <h3>ACC</h3>
                    <img src="./img/football/banner/3.jpg" alt="FOOTBALL ACC" />
                </article>
                <article>
                    <h3>BOOTS</h3>
                    <img src="./img/football/banner/4.jpg" alt="FOOTBALL BOOTS" />
                </article>
                <div className="ball"><img src="./img/football/banner/ball.png" alt="FOOTBALL UMBRO's BALL" /></div>
            </section>

            <div className="custom_zone">
                <figure>
                    <img src="./img/football/youtube/pc_ucustom_heritage_zone.png" alt='Heritage_Zone' />

                    <div className="con">
                        <h2>HERITAGE ZONE</h2>
                        <p>Wherever there is Football, there is Umbro - since 1924</p>
                        <a href="#;">View more</a>
                    </div>
                </figure>
                <div className="vidList">
                    <section className="video_frame">
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Football