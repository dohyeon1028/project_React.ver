import React, { useEffect, useRef } from 'react'

function FootballItems() {
    const rotateBall = useRef();
    useEffect(() => {
        const ball = rotateBall.current;
        const handleScroll = () => {
            ball.classList.add("on")
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <section className="wrap">
            <article>
                <h3>UNIFORM</h3>
                <img src={`${process.env.PUBLIC_URL}/img/football/banner/1.jpg`} alt="FOOTBALL UNIFORM" />
            </article>
            <article>
                <h3>CLOTHING</h3>
                <img src={`${process.env.PUBLIC_URL}/img/football/banner/2.jpg`} alt="FOOTBALL CLOTHING" />
            </article>
            <article>
                <h3>ACC</h3>
                <img src={`${process.env.PUBLIC_URL}/img/football/banner/3.jpg`} alt="FOOTBALL ACC" />
            </article>
            <article>
                <h3>BOOTS</h3>
                <img src={`${process.env.PUBLIC_URL}/img/football/banner/4.jpg`} alt="FOOTBALL BOOTS" />
            </article>
            <div className="ball" ref={rotateBall}><img src={`${process.env.PUBLIC_URL}/img/football/banner/ball.png`} alt="FOOTBALL UMBRO's BALL" /></div>
        </section>
    )
}

export default FootballItems