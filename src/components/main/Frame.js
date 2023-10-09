import React, { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";

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
            src: "img/slide/1.jpg",
            alt: "더 풍성해진 컬러 옵션과 트렌디한 무드로 돌아온 클래식 셋업",
        },
        {
            src: "img/slide/2.jpg",
            alt: "일상과 운동화의 경계를 허물고 매일을 편안하게",
        },
        {
            src: "img/slide/3.jpg",
            alt: "90년대 런던의 체이서들의 유스컬쳐와 당대를 풍미했던 엄브로 헤리티지의 만남",
        }
    ], []);

    const [items, setItems] = useState(slideContents);
    const delay = 3000;

    const updatePanel = useCallback(() => {
        panel.current.style.transitionDuration = "1s";
        panel.current.style.left = "-200vw";
        setTimeout(() => {
            panel.current.style.transitionDuration = "0s";
            const updatedItems = [...items.slice(1), items[0]];
            setItems(updatedItems);
            panel.current.style.left = "-100vw";
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
            </ul>
        </div>
    );
}

export default memo(Frame);
