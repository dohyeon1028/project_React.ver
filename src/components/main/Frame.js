import React, { useEffect, useRef, useState } from "react"
function Frame() {
    const panel = useRef();
    const content1 = useRef();
    const content2 = useRef();
    const content3 = useRef();

    const slideContents = [
    <li ref={content1} >
        <img src="img/slide/1.jpg" alt="더 풍성해진 컬러 옵션과 트렌디한 무드로 돌아온 클래식 셋업" />
    </li>, 
    <li ref={content2} >
        <img src="img/slide/2.jpg" alt="일상과 운동화의 경계를 허물고 매일을 편안하게" />
    </li>, 
    <li ref={content3} >
        <img src="img/slide/3.jpg" alt="90년대 런던의 체이서들의 유스컬쳐와 당대를 풍미했던 엄브로 헤리티지의 만남" />
    </li>
];

    const [items, setItems] = useState(slideContents);
    const delay = 3000;
    

    useEffect(()=>{
        const intervalId = setInterval(() => {
            panel.current.style.transitionDuration = "1s";
            panel.current.style.left = "-200vw";
            setTimeout(() => {
                panel.current.style.transitionDuration = "0s";
                const updatedItems = [...items.slice(1), items[0]];
                setItems(updatedItems);
                panel.current.style.left = "-100vw";
            }, 1000);
        }, delay);

        return () => {
            clearInterval(intervalId);
        };
    }, [items])
    
    return (
        <div id="frame">
            <ul className="panel" ref={panel}>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Frame