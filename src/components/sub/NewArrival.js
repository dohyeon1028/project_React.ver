import { useEffect, useRef } from "react";
import FilterWrap from "../common/Filter_wrap";
import ScrollToTop from "../../function/ScrollToTop";

import { Link } from "react-router-dom";

function hoverEvent(el) {
    el.children[0].addEventListener("mouseenter", () => {
        el.children[0].children[0].style.opacity = "0";

        setTimeout(() => {
            el.children[0].children[1].style.opacity = "1";
        }, 10);
    })
    el.children[0].addEventListener("mouseleave", () => {
        setTimeout(() => {
            el.children[0].children[0].style.opacity = "1";
        }, 10);
        el.children[0].children[1].style.opacity = "0";
    })
}

function NewArrival({ filter }) {
    const section = useRef();
    const filters = filter
    useEffect(() => {
        console.log(filters);
        const articles = []
        for (let i = 0; i < 24; i++) {
            articles.push(section.current.children[i]);
        }
        articles.map((el) => (hoverEvent(el)))
    }, []);

    return (
        <>
            <ScrollToTop />
            <main>
                <div className="NEW_prod_wrap">
                    <FilterWrap />
                    <div className="list_control_wrap" >
                        <h2>NEW ARRIVAL <span>(402)</span></h2>
                        <section ref={section}>
                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/1.jpg`} alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/1_hover.jpg`} alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE</Link>
                                    <p>149,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/2.jpg`} alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/2_hover.jpg`} alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">GOALE POST (고알레 포스트엄) 풋살화 / MULTI COLOR</Link>
                                    <p>139,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/3.jpg`} alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/3_hover.jpg`} alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE</Link>
                                    <p>29,900원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/4.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/4_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE
                                    </Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/5.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/5_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/6.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/6_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/7.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/7_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE</Link>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/8.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/8_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 맨투맨 / D.RED</Link>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/9.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/9_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠     / OATMEAL BEIGE</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/10.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/10_hover.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/11.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/11_hover.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK</Link>
                                    <p>109,00원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/12.jpg`} alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/12_hover.jpg`} alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE
                                    </Link>
                                    <p>169,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/1.jpg`} alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/1_hover.jpg`} alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE</Link>
                                    <p>149,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/2.jpg`} alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/2_hover.jpg`} alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">GOALE POST (고알레 포스트엄) 풋살화 / MULTI COLOR</Link>
                                    <p>139,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/3.jpg`} alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/3_hover.jpg`} alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE</Link>
                                    <p>29,900원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/4.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/4_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE
                                    </Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/5.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/5_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/6.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/6_hover.jpg`} alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/7.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/7_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE</Link>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/8.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/8_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 맨투맨 / D.RED</Link>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/9.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/9_hover.jpg`} alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠     / OATMEAL BEIGE</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/10.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/10_hover.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED</Link>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/11.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/11_hover.jpg`} alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK</Link>
                                    <p>109,00원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src={`${process.env.PUBLIC_URL}/img/New/12.jpg`} alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="before" />
                                    <img src={`${process.env.PUBLIC_URL}/img/New/12_hover.jpg`} alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <Link to="#;">[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE
                                    </Link>
                                    <p>169,000원</p>
                                </figcaption>
                            </article>

                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NewArrival