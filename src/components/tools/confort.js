import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FormattedMessage } from "react-intl";
import { Autoplay, Pagination, Navigation } from "swiper";
import Tourist1 from './../pics/rooms/confort/tourist1.jpg'
import Tourist2 from './../pics/rooms/confort/tourist2.jpg'
import Tourist3 from './../pics/rooms/confort/tourist3.jpg'
import Business1 from './../pics/rooms/confort/business1.jpg'
import Business2 from './../pics/rooms/confort/business2.jpg'
import Business3 from './../pics/rooms/confort/business3.jpg'
import Romantic1 from './../pics/rooms/confort/romantic1.jpg'
import Romantic2 from './../pics/rooms/confort/romantic2.jpg'


const ConfortSection = () => {
    const ImagesTourist = [Tourist1, Tourist2, Tourist3];
    const ImagesBusiness = [Business1, Business2, Business3];
    const RomanticNight = [Romantic1, Romantic2]


    return (
        <SectionContainer>
            <h2><FormattedMessage id="confort.title"/></h2>
            <p><FormattedMessage id="confort.description"/></p>
            <CardsContainer>
                <TextContainer>
                    <h2><FormattedMessage id="confort.tourist"/></h2>
                    <p><FormattedMessage id="confort.tourist1"/></p>
                    <Book href='https://clickandbook.net/letsunhotel'><FormattedMessage id="nav.book"/></Book>
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
                            <img className='img-img' src={item} alt='let sun hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </SlideContainer>
            </CardsContainer>
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
                        className="mySwiper"
                    >
                        {ImagesBusiness.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                            <img className='img-img' src={item} alt='let sun hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </SlideContainer>
                <TextContainer>
                    <h3><FormattedMessage id="confort.business"/></h3>
                    <p><FormattedMessage id="confort.business1"/></p>
                        <Book href='https://clickandbook.net/letsunhotel'><FormattedMessage id="nav.book"/></Book>
                </TextContainer>
            </CardsContainer>  
            <CardsContainer>
                <TextContainer>
                    <h3><FormattedMessage id="confort.romantic"/></h3>
                    <p> <FormattedMessage id="confort.romantic1"/> </p>
                        <Book href='/#/contact'><FormattedMessage id="nav.contact"/></Book>
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
                        {RomanticNight.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                            <img className='img-img' src={item} alt='let sun hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </SlideContainer>
            </CardsContainer>              
        </SectionContainer>
    )
}

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background: rgb(29, 29, 29);
    border: none;
    margin-top: 40px;
   
    @media screen and (max-width: 915px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 70px;
}
`

const SlideContainer = styled.div`
    width: 60%;
    height: auto;
    border-radius: 10px;

    @media screen and (max-width: 915px){
    width: 100%;
    order: 0;
}
`
const SectionContainer = styled.section`
margin-top: 40px;
h2 {
    font-size: 35px;
}
`

const TextContainer = styled.div`
width: 40%;
padding: 10px 10px;
height: auto;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: auto;
margin-bottom: auto;

h2 {
    font-size: 35px;
    text-align: center;
}

h3 {
    font-size: 35px;
    text-align: center;
}

@media screen and (max-width: 915px){
    width: 95%;
    order: 1;
h3 {
    text-align: center;
}
}
`

const SwipCont = styled.div`
display: flex;
position: relative;
width: 100%;
height: 100%;

img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
`

export const Book = styled.a`
    background-color: rgb(159, 43, 43);
    width: 45%;
    padding: 7px;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
    color: white;
    text-decoration: none;
    display: block;
    text-align: center;
    position: relative;
    margin-top: 100px;
    cursor: pointer;
    bottom: 10px;
    transition: all ease 0.5s;

    @media screen and (max-width: 915px) {
        width: 200px;
        margin-top: 70px;
        
    }

    :hover{
        font-weight: bold;
    }
`




export default ConfortSection