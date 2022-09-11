import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import BreakFast3 from './../pics/breakfast/breakfast3.jpg'
import BreakFast2 from './../pics/breakfast/breakfast2.jpg'
import BreakFast1 from './../pics/breakfast/breakfast1.jpg'
import BreakFast4 from './../pics/breakfast/breakfast4.jpg'
import { FormattedMessage } from "react-intl";

const BreakFast = () => {
    const ImagesTourist = [BreakFast1, BreakFast2, BreakFast3, BreakFast4];

    return (
        <SectionContainer>
            <CardsContainer>
                <TextContainer>
                    <h3><FormattedMessage id='breakfast.title'/> </h3>
                    <p><FormattedMessage id='breakfast.one'/> </p>
                    <h4><FormattedMessage id='breakfast.time'/></h4>
                    <p><FormattedMessage id='breakfast.two'/></p>
                    <p><FormattedMessage id='breakfast.three'/></p>
                </TextContainer>
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
                        className="mySwiper"
                    >
                        {ImagesTourist.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                            <img className='img-img' src={item} alt='' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </SlideContainer>
            </CardsContainer>            
        </SectionContainer>
    )
}

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    border-radius: 10px;
    background: rgb(29, 29, 29);
    border: none;
    margin-top: 40px;
   
    @media (max-width: 900px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 70px;
}
`

export const SlideContainer = styled.div`
    overflow: hidden;
    width: 60%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 900px){
    width: 100%;
    order: 2;
}
`
const SectionContainer = styled.section`
margin-top: 40px;
`

export const TextContainer = styled.div`
width: 40%;
text-align: justify;
margin-top: auto;
margin-bottom: auto ;
padding: 10px 10px;

h3{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}

@media (max-width: 900px){
    width: 95%;
h3 {
    text-align: center;
}
}
`

export const SwipCont = styled.div`
display: flex;
position: relative;
width: 100%;

img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
`


export default BreakFast