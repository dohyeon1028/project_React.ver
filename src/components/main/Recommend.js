import React, { useEffect, useRef, useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Recommend() {
    const [num, setNum] = useState(0); // Changed initial value to 0
    const slide = useRef();

    const slideTo = (position) => {
        if (slide.current) {
            slide.current.style.left = `${(position - 1) * 110}vw`;
        }
    };

    useEffect(() => {
        slideTo(num);
    }, [num]);
    return (
        <div id="recommend">
            <h1>고객님을 위한 맞춤 상품 / NEW ARRIVALS</h1>
            <ul className="items_wrap" ref={slide}>
                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/1/1.jpg`} alt="BUMPY THONG(범피 쏭)" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">BUMPY THONG(범피 쏭)</p>
                            <p className="prod_price">45,000원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/1/2.jpg`} alt="TOPI (토피)" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">TOPI (토피)</p>
                            <p className="prod_price">65,550원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/1/3.jpg`} alt="클래식 스탠넥 아노락 / BLK" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">클래식 스탠넥 아노락 / BLK</p>
                            <p className="prod_price">132,050원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/1/4.jpg`} alt="UK 헤리티지 우븐 피스테 / BLACK" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">UK 헤리티지 우븐 피스테 / BLACK</p>
                            <p className="prod_price">122,550원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/1/5.jpg`} alt="우먼스 UK 헤리티지 스탠넥 바람막이 자켓 / DVY" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">우먼스 UK 헤리티지 스탠넥 바람막이 자켓 / DVY</p>
                            <p className="prod_price">170,050원</p>
                        </div>
                    </article>
                </li>

                <li>
                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/2/1.jpg`} alt="클래식 4부 숏츠 / ASH BEIGE" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">클래식 4부 숏츠 / ASH BEIGE</p>
                            <p className="prod_price">56,050원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/2/2.jpg`} alt="에센셜 빅로고 후디 / NAVY" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">에센셜 빅로고 후디 / NAVY</p>
                            <p className="prod_price">84,550원</p>
                        </div>

                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/2/3.jpg`} alt="클래식 스탠넥 아노락 / BLK" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">클래식 스탠넥 아노락 / BLK</p>
                            <p className="prod_price">132,050원</p>
                        </div>

                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/2/4.jpg`} alt="클래식 4부 숏츠 / BLUE" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">클래식 4부 숏츠 / BLUE</p>
                            <p className="prod_price">56,050원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/2/5.jpg`} alt="크리스피 타슬란 긴팔 피스테 / DARK CHARCOAL" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">크리스피 타슬란 긴팔 피스테 / DARK CHARCOAL</p>
                            <p className="prod_price">113,050원</p>
                        </div>

                    </article>
                </li>

                <li>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/3/1.jpg`} alt="크리스피 타슬란 긴팔 바람막이 자켓 / BLK" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">크리스피 타슬란 긴팔 바람막이 자켓 / BLK</p>
                            <p className="prod_price">160,550원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/3/2.jpg`} alt="TOPI (토피) / Charcoal" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">TOPI (토피) / Charcoal</p>
                            <p className="prod_price">65,550원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/3/3.jpg`} alt="에센셜 후드 집업 / WHITE MELANGE" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">에센셜 후드 집업 / WHITE MELANGE</p>
                            <p className="prod_price">94,050원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/3/4.jpg`} alt="다이아몬드 아일랜드 캠핑카 쿨링 프레쉬 반팔티 / WHT" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">다이아몬드 아일랜드 캠핑카 쿨링 프레쉬 반팔티 / WHT</p>
                            <p className="prod_price">56,050원</p>
                        </div>
                    </article>

                    <article>
                        <img src={`${process.env.PUBLIC_URL}/img/recommend/3/5.jpg`} alt="클래식 후드형 아노락 / BLK" />
                        <div className="txt">
                            <p className="brand">UMBRO</p>
                            <p className="prod_title">클래식 후드형 아노락 / BLK</p>
                            <p className="prod_price">151,050원</p>
                        </div>
                    </article>

                </li>
            </ul>
            <div className="prev" onClick={() => {
                setNum((num + 2) % 3);
            }} >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="next" onClick={() => {
                setNum((num + 4) % 3);
            }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default Recommend