import { Link } from 'react-router-dom';
import Frame from './Frame';
import Banner from './Banner';
import Recommend from './Recommend';
import ScrollToTop from '../../function/ScrollToTop';
import React, { useEffect, useRef } from 'react';



function Visual({ onSelectTab }) {
    const handling = (tab) => {
        onSelectTab(tab)
    }

    //full_banner

    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        // 화면에 나타날 섹션들의 offsetTop 값을 배열에 저장
        const sectionOffsets = sectionRefs.map(ref => ref.current.offsetTop);

        const handleScroll = () => {
            const scrollY = window.scrollY;

            sectionOffsets.forEach((offset, index) => {
                if (scrollY + window.innerHeight >= offset) {
                    // 해당 섹션이 화면에 나타났을 때 on 클래스를 추가
                    sectionRefs[index].current.classList.add('on');
                }
                // else {
                //     // 아니면 on 클래스를 제거
                //     sectionRefs[index].current.classList.remove('on');
                // }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    //full_banner


    return (
        <>
            <ScrollToTop />
            <Frame />
            <Banner />
            <Recommend />

            <div id="full_banner">
                <section ref={sectionRefs[0]}>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/img/full_banner/1.jpg`} alt="브라이튼의 정적을 깨운 엄브로만의 자유로운 움직임" />
                    </div>
                    <div className="txtBox">
                        <h1>THE SOUND OF MOVEMENT</h1>
                        <h2>브라이튼의 정적을 깨운 엄브로만의 자유로운 움직임</h2>
                        <Link to="/event" onClick={() => { handling("tab1") }}>자세히보기</Link>
                    </div>
                </section >

                <section ref={sectionRefs[1]}>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/img/full_banner/2.jpg`} alt="UK Heritage" />
                    </div>
                    <div className="txtBox">
                        <h1>UK Heritage</h1>
                        <h2>자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의 체이서들</h2>
                        <Link to="/event" onClick={() => { handling("tab2") }}>자세히보기</Link>
                    </div>
                </section>

                <section ref={sectionRefs[2]}>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/img/full_banner/3.jpg`} alt="90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐" />
                    </div>
                    <div className="txtBox">
                        <h1>DOUBLE DECKER</h1>
                        <h2>90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐</h2>
                        <Link to="/event" onClick={() => { handling("tab3") }}>자세히보기</Link>
                    </div>
                </section>

                <section ref={sectionRefs[3]}>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/img/full_banner/4.jpg`} alt="여름을 더 뜨겁게, 엄브로 풋살화 & 유커스텀" />
                    </div>
                    <div className="txtBox">
                        <h1>PASSION FOR FOOTBALL</h1>
                        <h2>여름을 더 뜨겁게, 엄브로 풋살화 & 유커스텀</h2>
                        <Link to="/event" onClick={() => { handling("tab4") }}>자세히보기</Link>
                    </div>
                </section>

            </div >
        </>
    )

}

export default Visual