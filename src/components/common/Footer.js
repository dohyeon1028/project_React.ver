import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <>
            <footer>
                <div className="inner">
                    <div className="footer_body">
                        <div className="footer_body_ul">
                            <ul>
                                <li><a href="#;">새로운 소식</a></li>
                                <li><a href="#;">멤버 가입</a></li>
                                <li><a href="#;">매장 안내</a></li>
                                <li><a href="#;">나이키 저널</a></li>
                            </ul>
                            <ul>
                                <li><a href="#;">도움말</a></li>
                                <li><a href="#;">로그인 안내</a></li>
                                <li><a href="#;">주문배송조회</a></li>
                                <li><a href="#;">반품 정책</a></li>
                                <li><a href="#;">결제 방법</a></li>
                                <li><a href="#;">공지사항</a></li>
                                <li><a href="#;">문의하기</a></li>
                            </ul>
                            <ul>
                                <li><a href="#;">ABOUT NIKE</a></li>
                                <li><a href="#;">소식</a></li>
                                <li><a href="#;">채용</a></li>
                                <li><a href="#;">투자자</a></li>
                                <li><a href="#;">지속가능성</a></li>
                            </ul>
                        </div>
                        <div className="footer_body_social">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="part1">
                            <div className="part1_left">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>대한민국</span>
                                <p>© 2023 Nike, Inc. All Rights Reserved</p>
                            </div>
                            <ul className="part1_right">
                                <li>
                                    <Link to="/">
                                        이용약관
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        개인정보처리방침
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        위치 기반 서비스 약관
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        영상정보처리기기 운영 방침
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="part2">
                            <div className="legal_section">
                                <p>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 <Link to="/">사업자 정보 확인</Link> </p>
                                <p>고객센터 전화 문의 <Link to="/">080-022-0182</Link> FAX 02-6744-5880 | 이메일 <Link to="/">service@nike.co.kr</Link>  | 호스팅서비스사업자 (유)나이키코리아</p>
                            </div>
                            <div className="payment_information">
                                <p>현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신 한국결제네트웍스 유한회사의 구매안전 서비스(<span>결제대금예치</span>)를 이용하실 수 있습니다. <a href="#;">결제대금예치</a></p>
                            </div>
                            <div className="legal_moreView">
                                <p>콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 <a href="#;">자세히 보기</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer