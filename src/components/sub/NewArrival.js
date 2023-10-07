import { useEffect, useRef } from "react"


function NewArrival() {
    const section = useRef();

    useEffect(() => {
        console.log(section);
    }, [])

    return (
        <>
            <main>
                <div className="NEW_prod_wrap">
                    <div className="filter_wrap">

                        <div className="filter_item_category">
                            <div className="filter_tit">
                                CATEGORY
                                <i className="fa-solid fa-xmark close"></i>
                            </div>
                            <div className="filter_sublist">
                                <label htmlFor="category">
                                    <input type="checkbox" title="의류" value="1" id="class-1" />
                                    <span>의류</span>
                                </label>
                                <label htmlFor="category">
                                    <input type="checkbox" title="신발" value="2" id="class-2" />
                                    <span>신발</span>
                                </label>
                                <label htmlFor="category">
                                    <input type="checkbox" title="악세사리" value="2" id="class-2" />
                                    <span>악세사리</span>
                                </label>
                            </div>
                        </div>
                        <div className="filter_item_filter">
                            <div className="filter_tit">FILTER</div>
                            <div className="filter_sublist">
                                <label htmlFor="filter">
                                    <input type="checkbox" title="남녀공용" value="1" id="class-1" />
                                    <span>남녀공용</span>
                                </label>
                                <label htmlFor="filter">
                                    <input type="checkbox" title="남성" value="2" id="class-2" />
                                    <span>남성</span>
                                </label>
                                <label htmlFor="filter">
                                    <input type="checkbox" title="여성" value="2" id="class-2" />
                                    <span>여성</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="list_control_wrap" >
                        <h2>NEW ARRIVAL <span>(402)</span></h2>
                        <section ref={section}>
                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/1.jpg" alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="before" />
                                    <img src="../img/New/1_hover.jpg" alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE</a>
                                    <p>149,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/2.jpg" alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="before" />
                                    <img src="../img/New/2_hover.jpg" alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">GOALE POST (고알레 포스트엄) 풋살화 / MULTI COLOR</a>
                                    <p>139,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/3.jpg" alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="before" />
                                    <img src="../img/New/3_hover.jpg" alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE</a>
                                    <p>29,900원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/4.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/4_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE
                                    </a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/5.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="before" />
                                    <img src="../img/New/5_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/6.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="before" />
                                    <img src="../img/New/6_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/7.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/7_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE</a>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/8.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/8_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 맨투맨 / D.RED</a>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/9.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/9_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠     / OATMEAL BEIGE</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/10.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="before" />
                                    <img src="../img/New/10_hover.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/11.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="before" />
                                    <img src="../img/New/11_hover.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK</a>
                                    <p>109,00원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/12.jpg" alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/12_hover.jpg" alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE
                                    </a>
                                    <p>169,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/1.jpg" alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="before" />
                                    <img src="../img/New/1_hover.jpg" alt="GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">GOALE POST PREMIUM (고알레 포스트 프리미엄) 풋살화 / SKY BLUE</a>
                                    <p>149,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/2.jpg" alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="before" />
                                    <img src="../img/New/2_hover.jpg" alt="GOALE POST (고알레 포스트) 풋살화 / MULTI COLOR" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">GOALE POST (고알레 포스트엄) 풋살화 / MULTI COLOR</a>
                                    <p>139,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/3.jpg" alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="before" />
                                    <img src="../img/New/3_hover.jpg" alt="고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">고알레 풋볼 넌슬립 크루 삭스 / SKY BLUE</a>
                                    <p>29,900원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/4.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/4_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / OATMEAL BEIGE
                                    </a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/5.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="before" />
                                    <img src="../img/New/5_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / D.RED</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/6.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="before" />
                                    <img src="../img/New/6_hover.jpg" alt="[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 후드 티셔츠 / BLACK</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/7.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/7_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE</a>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/8.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/8_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 맨투맨 / D.RED</a>
                                    <p>99,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/9.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/9_hover.jpg" alt="[얼리버드쿠폰]파이핑 맨투맨 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠     / OATMEAL BEIGE</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/10.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="before" />
                                    <img src="../img/New/10_hover.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / D.RED</a>
                                    <p>109,000원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/11.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="before" />
                                    <img src="../img/New/11_hover.jpg" alt="[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]파이핑 니트 조거 팬츠 / BLACK</a>
                                    <p>109,00원</p>
                                </figcaption>
                            </article>

                            <article>
                                <div className="imgBox">
                                    <img src="../img/New/12.jpg" alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="before" />
                                    <img src="../img/New/12_hover.jpg" alt="[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE" className="after" />
                                </div>
                                <figcaption>
                                    <a href="#;">[얼리버드쿠폰]경량 다운 자켓 / OATMEAL BEIGE
                                    </a>
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