import React from 'react'
import { useState } from 'react'

function Event({ selectedMenu }) {
    const [selectedTab, setSelectedTab] = useState(selectedMenu || "tab1");
    const handlingTab = (tab) => {
        setSelectedTab(tab);
    }

    const btns = document.querySelectorAll(".btns>li");
    const articles = document.querySelectorAll("section article");

    let idx = 0;

    btns.forEach((el, index) => {
        el.addEventListener("click", () => {
            remove(btns);
            remove(articles);
            add(btns);
            add(articles);
            idx = index;

            function remove(el) {
                el[idx].classList.remove("on");
            }
            function add(el) {
                el[index].classList.add("on");
            }
        })
    });
    return (
        <>
            <main id="event">
                <h1>EVENT</h1>
                <ul className="btns">
                    <li className={selectedTab === "tab1" ? "on" : ""} onClick={() => handlingTab("tab1")}>THE SOUND OF MOVEMENT</li>
                    <li className={selectedTab === "tab2" ? "on" : ""} onClick={() => handlingTab("tab2")}>SWEAT ITEMS COLLECTION</li>
                    <li className={selectedTab === "tab3" ? "on" : ""} onClick={() => handlingTab("tab3")}>DOUBLE DECKER</li>
                    <li className={selectedTab === "tab4" ? "on" : ""} onClick={() => handlingTab("tab4")}>PASSION FOR FOOTBALL</li>
                </ul>

                <section>
                    <article className={selectedTab === "tab1" ? "on" : ""}>
                        <div className="bgImgBox">
                            <img src="../img/full_banner/1.jpg" alt="" />
                        </div>
                        <div className="ContentsWrap">
                            <div className="videoBox">
                                <video loop muted autoPlay>
                                    <source src="../img/event/article_video/1.mp4" type="" />
                                    THE SOUND OF MOVEMENT 브라이튼의
                                    정적을 깨운 엄브로만의 자유로운 움직임
                                </video>
                            </div>
                            <h2>THE SOUND OF MOVEMENT</h2>
                            <p>브라이튼의 정적을 깨운 엄브로만의 자유로운 움직임</p>
                        </div>
                    </article>
                    <article className={selectedTab === "tab2" ? "on" : ""}>
                        <div className="bgImgBox">
                            <img src="../img/full_banner/2.jpg" alt="UK Heritage" />
                        </div>
                        <div className="ContentsWrap">
                            <div className="videoBox">
                                <video loop autoPlay muted>
                                    <source src="../img/banner/2.mp4" type="" />
                                    UK Heritage 자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의
                                    체이서들
                                </video>
                            </div>
                            <h2>UK Heritage</h2>
                            <p>자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의 체이서들</p>
                        </div>
                    </article>
                    <article className={selectedTab === "tab3" ? "on" : ""}>
                        <div className="bgImgBox">
                            <img src="../img/full_banner/3.jpg" alt="90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐" />
                        </div>
                        <div className="ContentsWrap">
                            <div className="videoBox">
                                <video loop autoPlay muted>
                                    <source src="https://images.descentekorea.co.kr/contents/directImgUpload/230919_Doubledecker.mp4" />
                                    90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐
                                </video>
                            </div>
                            <h2>DOUBLE DECKER</h2>
                            <p>90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐</p>
                        </div>
                    </article>
                    <article className={selectedTab === "tab4" ? "on" : ""}>
                        <div className="bgImgBox">
                            <img src="../img/full_banner/4.jpg" alt="여름을 더 뜨겁게, 엄브로 풋살화 & 유커스텀" />
                        </div>
                        <div className="ContentsWrap">
                            <div className="videoBox">
                            </div>
                            <h2>PASSION FOR FOOTBALL</h2>
                            <p>여름을 더 뜨겁게, 엄브로 풋살화 & 유커스텀</p>
                        </div>
                    </article>

                </section>
            </main >
        </>
    )
}

export default Event