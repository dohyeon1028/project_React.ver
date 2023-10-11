import React from 'react';
import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
function Slide({ image }) {
    return (
        <li>
            <img src={image.src} alt={image.alt} />
        </li>
    );
}
function Frame() {
    const panel = useRef();

    const slideContents = useMemo(() => [
        {
            src: `${process.env.PUBLIC_URL}/img/football/panel/1.jpg`,
            alt: "최상의 퍼포먼스를 위한 스포츠 용품",
        },
        {
            src: `${process.env.PUBLIC_URL}/img/football/panel/2.jpg`,
            alt: "스타일링과 기능성을 결합한 스포츠 웨어",
        },
        {
            src: `${process.env.PUBLIC_URL}/img/football/panel/3.jpg`,
            alt: "엄브로만의 헤리티지 스타일 커스터마이징 유니폼",
        },
        {
            src: `${process.env.PUBLIC_URL}/img/football/panel/4.jpg`,
            alt: "우수한 착화감 쿠셔닝 & 최상의 접지력",
        }
    ], []);

    const [items, setItems] = useState(slideContents);
    const delay = 3000;

    const updatePanel = useCallback(() => {
        panel.current.style.transitionDuration = "1s";
        panel.current.style.marginLeft = "-100vw";
        setTimeout(() => {
            panel.current.style.transitionDuration = "0s";
            const updatedItems = [...items.slice(1), items[0]];
            setItems(updatedItems);
            panel.current.style.marginLeft = "0vw";
        }, 1000);
    }, [items]);

    useEffect(() => {
        const intervalId = setInterval(updatePanel, delay);

        return () => {
            clearInterval(intervalId);
        };
    }, [updatePanel]);
    return (
        <div id="frame">
            <ul className="panel" ref={panel}>
                {items.map((item, index) => (
                    <Slide key={index} image={item} />
                ))}
                <li></li>
            </ul>
        </div>
    )
}

export default Frame