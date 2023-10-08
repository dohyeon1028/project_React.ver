
import { Link } from 'react-router-dom';
import Frame from './Frame';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Visual({ onSelectTab }) {
    const handling = (tab) => {
        onSelectTab(tab)
    }

    //js
    // const frame = useRef(Frame());
    // const panel = frame.current.props.children;
    // console.log(panel);
    //js

    return (
        <>
            <Frame />
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
            <div id="recommend">
                <h1>고객님을 위한 맞춤 상품 / NEW ARRIVALS</h1>
                <ul className="items_wrap">
                    <li>
                        <article>
                            <img src="img/recommend/1/1.jpg" alt="BUMPY THONG(범피 쏭)" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">BUMPY THONG(범피 쏭)</p>
                                <p className="prod_price">45,000원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/1/2.jpg" alt="TOPI (토피)" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">TOPI (토피)</p>
                                <p className="prod_price">65,550원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/1/3.jpg" alt="클래식 스탠넥 아노락 / BLK" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">클래식 스탠넥 아노락 / BLK</p>
                                <p className="prod_price">132,050원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/1/4.jpg" alt="UK 헤리티지 우븐 피스테 / BLACK" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">UK 헤리티지 우븐 피스테 / BLACK</p>
                                <p className="prod_price">122,550원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/1/5.jpg" alt="우먼스 UK 헤리티지 스탠넥 바람막이 자켓 / DVY" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">우먼스 UK 헤리티지 스탠넥 바람막이 자켓 / DVY</p>
                                <p className="prod_price">170,050원</p>
                            </div>
                        </article>
                    </li>

                    <li>
                        <article>
                            <img src="img/recommend/2/1.jpg" alt="클래식 4부 숏츠 / ASH BEIGE" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">클래식 4부 숏츠 / ASH BEIGE</p>
                                <p className="prod_price">56,050원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/2/2.jpg" alt="에센셜 빅로고 후디 / NAVY" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">에센셜 빅로고 후디 / NAVY</p>
                                <p className="prod_price">84,550원</p>
                            </div>

                        </article>

                        <article>
                            <img src="img/recommend/2/3.jpg" alt="클래식 스탠넥 아노락 / BLK" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">클래식 스탠넥 아노락 / BLK</p>
                                <p className="prod_price">132,050원</p>
                            </div>

                        </article>

                        <article>
                            <img src="img/recommend/2/4.jpg" alt="클래식 4부 숏츠 / BLUE" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">클래식 4부 숏츠 / BLUE</p>
                                <p className="prod_price">56,050원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/2/5.jpg" alt="크리스피 타슬란 긴팔 피스테 / DARK CHARCOAL" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">크리스피 타슬란 긴팔 피스테 / DARK CHARCOAL</p>
                                <p className="prod_price">113,050원</p>
                            </div>

                        </article>
                    </li>

                    <li>

                        <article>
                            <img src="img/recommend/3/1.jpg" alt="크리스피 타슬란 긴팔 바람막이 자켓 / BLK" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">크리스피 타슬란 긴팔 바람막이 자켓 / BLK</p>
                                <p className="prod_price">160,550원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/3/2.jpg" alt="TOPI (토피) / Charcoal" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">TOPI (토피) / Charcoal</p>
                                <p className="prod_price">65,550원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/3/3.jpg" alt="에센셜 후드 집업 / WHITE MELANGE" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">에센셜 후드 집업 / WHITE MELANGE</p>
                                <p className="prod_price">94,050원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/3/4.jpg" alt="다이아몬드 아일랜드 캠핑카 쿨링 프레쉬 반팔티 / WHT" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">다이아몬드 아일랜드 캠핑카 쿨링 프레쉬 반팔티 / WHT</p>
                                <p className="prod_price">56,050원</p>
                            </div>
                        </article>

                        <article>
                            <img src="img/recommend/3/5.jpg" alt="클래식 후드형 아노락 / BLK" />
                            <div className="txt">
                                <p className="brand">UMBRO</p>
                                <p className="prod_title">클래식 후드형 아노락 / BLK</p>
                                <p className="prod_price">151,050원</p>
                            </div>
                        </article>

                    </li>
                </ul>
                <div className="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="next">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div id="full_banner">
                <section>
                    <div className="imgBox">
                        <img src="img/full_banner/1.jpg" alt="브라이튼의 정적을 깨운 엄브로만의 자유로운 움직임" />
                    </div>
                    <div className="txtBox">
                        <h1>THE SOUND OF MOVEMENT</h1>
                        <h2>브라이튼의 정적을 깨운 엄브로만의 자유로운 움직임</h2>
                        <Link to="/event" onClick={() => { handling("tab1") }}>자세히보기</Link>
                    </div>
                </section >

                <section>
                    <div className="imgBox">
                        <img src="img/full_banner/2.jpg" alt="UK Heritage" />
                    </div>
                    <div className="txtBox">
                        <h1>UK Heritage</h1>
                        <h2>자신만의 개성과 자유로운 표현을 쫓는 90년대 런던의 체이서들</h2>
                        <Link to="/event" onClick={() => { handling("tab2") }}>자세히보기</Link>
                    </div>
                </section>

                <section>
                    <div className="imgBox">
                        <img src="img/full_banner/3.jpg" alt="90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐" />
                    </div>
                    <div className="txtBox">
                        <h1>DOUBLE DECKER</h1>
                        <h2>90년대 런던과 현재 한국의 시공간을 교차하며 경험하는 서로 간의 유스 컬쳐</h2>
                        <Link to="/event" onClick={() => { handling("tab3") }}>자세히보기</Link>
                    </div>
                </section>

                <section>
                    <div className="imgBox">
                        <img src="img/full_banner/4.jpg" alt="여름을 더 뜨겁게, 엄브로 풋살화 & 유커스텀" />
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