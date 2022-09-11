import GalleryShow from "./galleryshow"
import {  SwipCont, TextContainerL } from "./roomsection"
import { SwiperSlide } from 'swiper/react';
import { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Hotel1 from './../pics/home/galeria/hotel/hotel5.jpg'
import Hotel2 from './../pics/home/galeria/hotel/hotel4.jpg'
import Hotel3 from './../pics/home/galeria/hotel/hotel3.jpg'
import Hotel4 from './../pics/home/galeria/hotel/hotel2.jpg'
import Hotel5 from './../pics/home/galeria/hotel/hotel1.jpg'
import Hotel6 from './../pics/home/galeria/hotel/hotel6.jpg'
import Hotel7 from './../pics/home/galeria/hotel/hotel7.jpg'
import Spa1 from './../pics/home/galeria/spa/spa1.jpg'
import Spa2 from './../pics/home/galeria/spa/spa2.jpg'
import Spa3 from './../pics/home/galeria/spa/spa3.jpg'
import Spa4 from './../pics/home/galeria/spa/spa4.jpg'
import Spa5 from './../pics/home/galeria/spa/spa5.jpg'
import Spa6 from './../pics/home/galeria/spa/spa6.jpg'
import Spa7 from './../pics/home/galeria/spa/spa7.jpg'
import Spa8 from './../pics/home/galeria/spa/spa8.jpg'
import Spa9 from './../pics/home/galeria/spa/spa9.jpg'
import Rooms1 from './../pics/home/galeria/rooms/rooms1.jpg'
import Rooms2 from './../pics/home/galeria/rooms/rooms2.jpg'
import Rooms3 from './../pics/home/galeria/rooms/rooms3.jpg'
import Rooms4 from './../pics/home/galeria/rooms/rooms4.jpg'
import Rooms5 from './../pics/home/galeria/rooms/rooms5.jpg'
import Rooms6 from './../pics/home/galeria/rooms/rooms6.jpg'
import Rooms7 from './../pics/home/galeria/rooms/rooms7.jpg'
import Rooms8 from './../pics/home/galeria/rooms/rooms8.jpg'
import Insta from './../pics/home/galeria/instagram.jpg'



const HomeGallery = () => {
    const Hotel = [Hotel1, Hotel2, Hotel3, Hotel4, Hotel5, Hotel6, Hotel7]
    const Spa = [Spa1, Spa2, Spa3, Spa4, Spa5, Spa6, Spa7, Spa8, Spa9]
    const Rooms = [Rooms1, Rooms2, Rooms3, Rooms4, Rooms5, Rooms6, Rooms7, Rooms8]
    const [Images, setImages] = useState([])
    const [GalleryImg, setGalleryImg] = useState(false)
    const CloseGallery = () => setGalleryImg(!GalleryImg)
    const SetHotel = () => {
        CloseGallery()
        setImages(Hotel)
    };
    const SetSpa = () => {
        CloseGallery()
        setImages(Spa)
    };
    const SetRooms = () =>{
        CloseGallery()
        setImages(Rooms)
    }
    return(
        <section>
            <GalleryContainer>
            <GalleryShow CloseGallery={CloseGallery} GalleryImg={GalleryImg}>
            {Images.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                                <img className='img-img' src={item} alt='Let Sun Hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
            </GalleryShow>
            </GalleryContainer>
            <Title><FormattedMessage id="home.gallery"/></Title>
            <ImagesContainer>
            <SlideContainer>
                <div onClick={SetHotel}>
                <img src={Hotel1} alt='Let Sun Hotel Palermo'/>
                </div>
            <TextContainerL>HOTEL</TextContainerL>
            </SlideContainer>
            <SlideContainer>
                <div onClick={SetSpa}>
                <img src={Spa1} alt='Let Sun Hotel Palermo'/>
                </div>
            <TextContainerL>
                SPA</TextContainerL>
            </SlideContainer>
            <SlideContainer>
                <div onClick={SetRooms}>
                <img src={Rooms3} alt='Let Sun Hotel Palermo'/>
                </div>
            <TextContainerL><FormattedMessage id='nav.rooms'/></TextContainerL>
            </SlideContainer>
            <SlideContainer>
                <a href="https://www.instagram.com/letsun.hotel/" target='_blank' rel="noreferrer">
                <img src={Insta} alt='Let Sun Hotel Palermo'/>
                </a>
            <TextContainerL>INSTAGRAM</TextContainerL>
            </SlideContainer>
            </ImagesContainer>
        </section>
    )

}

const GalleryContainer = styled.div`
position: fixed;
height: 100%;
top: 80px;
z-index: 999;

`
const ImagesContainer = styled.div`
width: 100%;
position: relative;
display: flex;
flex-wrap: wrap;
margin-top: 10px;
font-size: 30px;
`
const SlideContainer = styled.div`
display: flex;
position: relative;
width: 47%;
flex-wrap: nowrap;
overflow: hidden;
border: solid 1px rgb(220, 216, 216) ;
border-radius: 10px;
margin: auto;
margin-top: 20px ;
height: auto;

img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: top;
}
`
const Title = styled.h2`
margin-top: 50px;
font-size: 35px;
@media screen and (max-width: 900px) {
    font-size: 25px;
}
` 

export default HomeGallery