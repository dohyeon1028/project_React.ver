import React from 'react'

function Banner() {
    return (
        <div id="banner">
            <div className="imgBox">
                <img src="img/banner/1.jpg" alt="출시예정 제품 구매시 10% 쿠폰 / 신규 가입시 1만원 쿠폰" />
            </div>
            <div className="item_wrap">
                <div className="videoBox">
                    <video src="img/banner/2.mp4" muted loop autoPlay>UK Heritage
                        자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의 체이서들</video>
                </div>
                <div className="imgBox">
                    <ul className="banner_slide">
                        <li><img src="img/banner/3.jpg" alt="엄브로 바람막이" /></li>
                        <li><img src="img/banner/3_1.jpg" alt="엄브로 아노락" /></li>
                        <li><img src="img/banner/3_2.jpg" alt="엄브로 후디 아노락 white" /></li>
                        <li><img src="img/banner/3_3.jpg" alt="엄브로 후디 아노락 green" /></li>
                    </ul>
                    <ul className="btns">
                        <li className="on"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner