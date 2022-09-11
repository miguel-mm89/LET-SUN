import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';
import Img1 from './../pics/services/auditorio-1.jpg'
import Img2 from './../pics/services/auditorio-2.jpg'
import Img3 from './../pics/services/auditorio-3.jpg'
import sal1 from './../pics/services/salon1.jpg'
import sal2 from './../pics/services/salon2.jpg'
import terra1 from './../pics/services/terraza1.jpg'
import terra2 from './../pics/services/terraza2.jpg'
import Services from '../services';
import Events from './eventos';
import BreakFast from './BreakFast';
import OtherServices from './otherservices';



const ImgCont = styled.div`
display: flex;
max-height: 80%;
width: 90%;
margin: auto;
margin-top: 30px;


@media screen and (max-width: 768px) {
    max-height: 70%;
    margin-top: 25%;
    width: 99%;
}

`

const CloseGalery = styled.button`
background: none;
text-decoration: none;
position: absolute;
z-index: 80;
top: 0;
right: 0;
color: white;
border: solid 1px white;
padding: 5px 5px;
font-size: 10px;
`

const Galery = () => {
    const [Images, setImages] = useState([])
    const [GaleryImg, setGaleryImg] = useState(false)
    const CloseGallery = () => {
    setGaleryImg(!GaleryImg)
    setImages([])
    } 
    const HandleAudi = () => {
        CloseGallery()
        setImages([Img1, Img2, Img3])
    }
    const HandleSalon = () => {
        CloseGallery()
        setImages([sal1, sal2])
    }

    const HandleTerraza = () => {
        CloseGallery()
        setImages([terra1, terra2])
    }
    return (
        <section>
            <Galeria GaleryImg={GaleryImg}>
                <CloseGalery onClick={CloseGallery}>CLOSE</CloseGalery>
                <ImgCont>
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                        {Images.map((item, pos) => (<SwiperSlide key={pos}>
                            <SwipCont>
                                <img className='img-img' src={item} alt='Let Sun Hotel' />
                            </SwipCont>
                        </SwiperSlide>))}
                    </Swiper>
                </ImgCont>
            </Galeria>
            <Services />
            <Events HandleAudi={HandleAudi} HandleSalon={HandleSalon} HandleTerraza={HandleTerraza} />
            <BreakFast/>
            <OtherServices/>
        </section>
        
    )
}


const Galeria = styled.div`
background-color: rgb(18, 18, 18,0.5);
position: fixed;
z-index: 70;
max-width: 1200px;
width: 100%;
height: 100%;
transition: transform .3s ease-in;
transform: ${props => props.GaleryImg ? 'translateX(0)' : 'translateX(-200%)'} ;
display: block;

@media screen and (max-width: 768px) {
    max-width: 98%;
}
`

const SwipCont = styled.div`
display: flex;
position: relative;

img {
    object-fit: cover;
    width: 100%;
}

`



export default Galery