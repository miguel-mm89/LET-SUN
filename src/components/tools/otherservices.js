import { CardsContainer, SlideContainer, SwipCont, TextContainer } from "./BreakFast"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FormattedMessage } from "react-intl";
import { Book } from "./confort";
import Img1 from './../pics/services/other1.jpg'
import Img2 from './../pics/services/other2.jpg'
import Img3 from './../pics/services/other3.jpg'



const OtherServices = () => {
    const ImgOther = [Img1, Img2, Img3]
    return (
        <section>
            <CardsContainer>
                <SlideContainer>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        {ImgOther.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                                <img className='img-img' src={item} alt='' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </SlideContainer>
                <TextContainer>
                    <h3><FormattedMessage id='other.services'/></h3>
                    <p><FormattedMessage id='other.description1'/></p>
                    <p><FormattedMessage id='other.description2'/></p>
                    <Book><FormattedMessage id="nav.book"/></Book>
                </TextContainer>
            </CardsContainer>
        </section>
    )
}

export default OtherServices