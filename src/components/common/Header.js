import React from 'react';

import { Link } from "react-router-dom";
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Header({ onSelectTab }) {
    let logoURL = "./img/logo.jpg";

    const [aside, setAside] = useState("");

    return (
        <>
            <div className="headerBox"></div>
            <header>
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + logoURL} alt='엄브로 로고 이미지' />
                    </Link>
                </h1>
                <ul id="gnb">
                    <li>
                        <Link to="/">
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link to="/new">
                            NEW
                        </Link>
                    </li>
                    <li>
                        <Link to="/best">
                            BEST
                        </Link>
                    </li>
                    <li>
                        <Link to="/football">
                            FOOTBALL
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onSelectTab("tab1")} to="/event">
                            Event
                        </Link>
                    </li>
                </ul>
                <ul className="util">
                    <li>
                        <Link to="/">로그인</Link>/<Link to="/">회원가입</Link>
                    </li>
                    <li> <Link to="/">마이페이지</Link></li>
                    <li>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                </ul>
                <div className="bars" >
                    <FontAwesomeIcon icon={faBars} onClick={() => { setAside("on") }} />
                </div>
            </header>
            <aside className={`mobile_aside ${aside}`} >
                <div className="inner">
                    <div className="close" onClick={() => { setAside("") }}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                    <ul id="gnb">
                        <li>
                            <Link to="/">
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link to="/new">
                                NEW
                            </Link>
                        </li>
                        <li>
                            <Link to="/best">
                                BEST
                            </Link>
                        </li>
                        <li>
                            <Link to="/football">
                                FOOTBALL
                            </Link>
                        </li>
                        <li>
                            <Link to="/event">
                                Event
                            </Link>
                        </li>
                    </ul>
                    <ul className="util">
                        <li>
                            <Link to="/">로그인</Link>/<Link to="/">회원가입</Link>
                        </li>
                        <li> <Link to="/">마이페이지</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Header