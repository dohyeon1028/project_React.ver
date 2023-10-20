import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = ({ onSelectTab }) => {
  const [asideVisible, setAsideVisible] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleAsideOpen = () => {
    setAsideVisible(true);
  };

  const handleAsideClose = () => {
    setAsideVisible(false);
  };

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const renderNavigationLinks = () => (
    <ul id="gnb" onClick={handleAsideClose}>
      <li>
        {pageLoaded ? (
          <Link to="/">SHOP</Link>
        ) : (
          <span>Loading...</span>
        )}
      </li>
      <li>
        {pageLoaded ? (
          <Link to="/new">NEW</Link>
        ) : (
          <span>Loading...</span>
        )}
      </li>
      <li>
        {pageLoaded ? (
          <Link to="/best">BEST</Link>
        ) : (
          <span>Loading...</span>
        )}
      </li>
      <li>
        {pageLoaded ? (
          <Link to="/football">FOOTBALL</Link>
        ) : (
          <span>Loading...</span>
        )}
      </li>
      <li>
        {pageLoaded ? (
          <Link onClick={() => onSelectTab("tab1")} to="/event">Event</Link>
        ) : (
          <span>Loading...</span>
        )}
      </li>
    </ul>
  );

  const renderUtilityLinks = () => (
    <ul className="util" onClick={handleAsideClose}>
      <li>
        <Link to="/">로그인</Link>/<Link to="/">회원가입</Link>
      </li>
      <li>
        <Link to="/">마이페이지</Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faShoppingBag} />
      </li>
      <li>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </li>
    </ul>
  );

  return (
    <>
      <div className="headerBox"></div>
      <header>
        <h1>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.jpg`} alt='엄브로 로고 이미지' />
          </Link>
        </h1>
        {renderNavigationLinks()}
        {renderUtilityLinks()}
        <div className="bars" >
          <FontAwesomeIcon icon={faBars} onClick={handleAsideOpen} />
        </div>
      </header>
      <aside className={`mobile_aside ${asideVisible && "on"}`} >
        <div className="inner">
          <div className="close" onClick={handleAsideClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          {renderNavigationLinks()}
          {renderUtilityLinks()}
        </div>
      </aside >
    </>
  );
};

export default Header;
