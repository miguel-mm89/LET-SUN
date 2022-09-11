import { FormattedMessage } from "react-intl";
import Slideshow, { Slide } from './slideshow';
import styled from 'styled-components'
import GalleryShow from "./galleryshow";
import { useState } from "react";
import { SwiperSlide } from 'swiper/react';
import Standard1 from './../pics/rooms/standard/standard1.jpg'
import Standard2 from './../pics/rooms/standard/standard4.jpg'
import Standard3 from './../pics/rooms/standard/standard3.jpg'
import Standard4 from './../pics/rooms/standard/standard2.jpg'
import Superior1 from './../pics/rooms/superior/superior1.jpg'
import Superior2 from './../pics/rooms/superior/superior2.jpg'
import Superior3 from './../pics/rooms/superior/superior3.jpg'
import Superior4 from './../pics/rooms/superior/superior4.jpg'
import Twin1 from './../pics/rooms/twin/twin1.jpg'
import Twin2 from './../pics/rooms/twin/twin2.jpg'
import Twin3 from './../pics/rooms/twin/twin3.jpg'
import Twin4 from './../pics/rooms/twin/twin4.jpg'
import Triple1 from './../pics/rooms/triple/triple1.jpg'
import Triple2 from './../pics/rooms/triple/triple2.jpg'
import Triple3 from './../pics/rooms/triple/triple3.jpg'
import Triple4 from './../pics/rooms/triple/triple4.jpg'
import { Titulo } from "../services";



const RoomSection = () => {
    const Stand = [Standard1, Standard2, Standard3, Standard4];
    const Superior = [Superior1, Superior2, Superior3, Superior4];
    const Twin = [Twin1, Twin2, Twin3, Twin4];
    const Triple = [Triple1, Triple2, Triple3, Triple4]
    const [Images, setImages] = useState([]);
    const [GalleryImg, setGalleryImg] = useState(false);
    const CloseGallery = () => setGalleryImg(!GalleryImg);
    const HandleStandard = () =>{
        CloseGallery()
        setImages(Stand)};
    const HandleSuperior = () =>{
            CloseGallery()
            setImages(Superior)};
    const HandleTwin = () =>{
        CloseGallery();
        setImages(Twin)
    };
    const HandleTriple = () =>{
        CloseGallery()
        setImages(Triple)
    };
    
    return (
        <SectionContainer>
            <GalleryShow CloseGallery={CloseGallery} GalleryImg={GalleryImg}>
            {Images.map((item, pos) => (<SwiperSlide  key={pos}  >
                            <SwipCont>
                                <img className='img-img' key={pos} src={item} alt='Let Sun Hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
            </GalleryShow>
            <Titulo><FormattedMessage id='rooms.title'/></Titulo>
            <p><FormattedMessage id='rooms.index' /></p>
            <SlideContainer onClick={HandleSuperior}>
                <Slideshow controles={false}>
                   {Superior.map((item, pos) => (<Slide  key={pos} >
                        <img src={item} alt='Let Sun Hotel'/>
                    </Slide>))}
                </Slideshow>
                <TextContainerL>
                    <p>
                       <FormattedMessage id="rooms.superior"/>
                    </p>
                    <BookButton href='https://clickandbook.net/letsunhotel'>
                            <FormattedMessage id='nav.book' />                  
                    </BookButton>
                </TextContainerL>
            </SlideContainer>
            <SlideContainer onClick={HandleStandard}>
                <Slideshow controles={false}>
                {Stand.map((item, pos) => (<Slide  key={pos} >
                        <img src={item} key={pos} alt='Let Sun Hotel'/>
                    </Slide>))}
                </Slideshow>
                <TextContainerL>
                    <p>
                    <FormattedMessage id="rooms.standard"/>
                    </p>
                    <BookButton href='https://clickandbook.net/letsunhotel'>                     
                            <FormattedMessage id='nav.book' />                       
                    </BookButton>
                </TextContainerL>
            </SlideContainer>
            <SlideContainer onClick={HandleTwin}>
                <Slideshow controles={false}>
                    {Twin.map((item, pos) => (<Slide  key={pos} >
                        <img src={item} key={pos} alt='Let Sun Hotel'/>
                    </Slide>))}
                </Slideshow>
                <TextContainerL>
                    <p>
                    <FormattedMessage id="rooms.twin"/>
                    </p>
                    <BookButton href='https://clickandbook.net/letsunhotel'>
                            <FormattedMessage id='nav.book' />
                    </BookButton>
                </TextContainerL>
            </SlideContainer>
            <SlideContainer onClick={HandleTriple}>
                <Slideshow controles={false}>
                {Triple.map((item, pos) => (<Slide  key={pos} >
                        <img src={item} key={pos} alt='Let Sun Hotel'/>
                    </Slide>))}
                </Slideshow>
                <TextContainerL>
                    <p>
                    <FormattedMessage id='rooms.triple' />   
                    </p>
                    <BookButton href='https://clickandbook.net/letsunhotel'>                        
                            <FormattedMessage id='nav.book' />                        
                    </BookButton>
                </TextContainerL>
            </SlideContainer>
        </SectionContainer>
    )
}


export const SectionContainer = styled.div`
width: 100%;
position: relative;
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin-top: 15px;

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
@media screen and (max-width: 914px) {
    width: 100%;
    height: auto;
    z-index: 5;
}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`
export const TextContainerL = styled.div`
display: flex;
flex-direction: column;
position: absolute;
text-align: center;
width: 60%;
left: 0;
bottom: 0;
background-color: rgb(9, 9, 9, 0.6);
z-index: 10;

@media screen and (max-width: 914px) {
    font-size: 15px;
    width: 100%;
    left: 0;
    bottom: 0;
    height: auto;
    padding: 5px;
}
p{
    width: 95%;
    align-content: space-between;
    padding: 10px;
    @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    
}
}
`

const BookButton = styled.a`
    background-color: rgb(159, 43, 43);
    width: 45%;
    padding: 7px;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    border: 1px solid black;
    color: white;
    text-decoration: none;
    transition: all 0.4s;

    @media screen and (max-width: 914px) {
        width: 200px;
    }

    :hover{
        font-weight: bold;
        font-size: 18px;
    }

`
export const SwipCont = styled.div`
display: block;
position: relative;
img {
    object-fit: cover;
    width: 100%;
    vertical-align: top;
}
`


export default RoomSection