import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pop from '../../common/Pop';

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CustomZone() {
    const Vids = useSelector((store) => store.youtubeReducer.youtube)
    const [Index, setIndex] = useState(0);
    const pop = useRef(null);
    console.log(Vids);
    return (
        <>
            <div className="custom_zone">
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/img/football/youtube/pc_ucustom_heritage_zone.png`} alt='Heritage_Zone' />

                    <div className="con">
                        <h2>HERITAGE ZONE</h2>
                        <p>Wherever there is Football, there is Umbro - since 1924</p>
                        <Link to="#;">View more</Link>
                    </div>
                </figure>
                <div className="vidList">
                    <section className="video_frame">
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }}
                            spaceBetween={1}
                            loop={true}
                            slidesPerView={1}
                            centeredSlides={true}
                        >
                            {Vids.map((el, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={`${process.env.PUBLIC_URL}/img/football/youtube/pc_ucustom_contents_zone.png`} className="bg" alt="컨텐츠란 배경사진" />

                                    <div className="pic">
                                        <img src={el.snippet.thumbnails.standard.url} alt={el.snippet.title} />
                                        {/* <FontAwesomeIcon icon={faYoutube} ref={line}
                                            onClick={() => { pop.current.open(); setIndex(idx); }
                                            } /> */}
                                    </div>

                                    <div className="con">
                                        <h2>CONTENTS ZONE</h2>
                                        <p>2023 UMBRO x GOALE</p>
                                        <span onClick={() => { pop.current.open(); setIndex(idx); }}>View more</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </div>
            <Pop ref={pop}>
                {Vids.length !== 0 && <iframe title='youtube' src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder="0">
                </iframe>}
            </Pop>
        </>
    )
}

export default CustomZone