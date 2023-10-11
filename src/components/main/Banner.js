import React, { useEffect, useRef, useState } from 'react';

function Banner() {
    const [tab, setTab] = useState(1);
    const bannerSlide = useRef();

    useEffect(() => {
        const slideElement = bannerSlide.current;

        const slideTo = (position) => {
            if (slideElement) {
                slideElement.style.left = `${position}%`;
            }
        };
        const positions = [-0, -100, -200, -300];
        slideTo(positions[tab - 1]);
    }, [tab]);


    return (
        <div id="banner">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/img/banner/1.jpg`} alt="출시예정 제품 구매시 10% 쿠폰 / 신규 가입시 1만원 쿠폰" />
            </div>
            <div className="item_wrap">
                <div className="videoBox">
                    <video src="https://images.descentekorea.co.kr/contents/directImgUpload/230703_UMB_TASLAN_PC.mp4" muted loop autoPlay>UK Heritage
                        자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의 체이서들</video>
                </div>
                <div className="imgBox">
                    <ul className="banner_slide" ref={bannerSlide}>
                        <li><img src={`${process.env.PUBLIC_URL}/img/banner/3.jpg`} alt="엄브로 바람막이" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/banner/3_1.jpg`} alt="엄브로 아노락" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/banner/3_2.jpg`} alt="엄브로 후디 아노락 white" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/img/banner/3_3.jpg`} alt="엄브로 후디 아노락 green" /></li>
                    </ul>
                    <ul className="btns">
                        <li className={tab === 1 ? "on" : ""} onClick={() => { setTab(1) }}></li>
                        <li className={tab === 2 ? "on" : ""} onClick={() => { setTab(2) }}></li>
                        <li className={tab === 3 ? "on" : ""} onClick={() => { setTab(3) }}></li>
                        <li className={tab === 4 ? "on" : ""} onClick={() => { setTab(4) }}></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Banner