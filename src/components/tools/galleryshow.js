import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';



const ImgCont = styled.div`
display: flex;
max-height: 100%;
max-width: 90%;
width: 80%;
margin: auto;
margin-top: 8%;

@media (max-height: 780px) {
    margin-top: 1%;
}


@media screen and (max-width: 768px) {
    max-height: 70%;
    margin-top: 25%;
    width: 98%;
}

`

const CloseGalery = styled.button`
background: none;
text-decoration: none;
position: absolute;
z-index: 80;
top: 0;
right: 0;
margin-right: 10px;
color: white;
border: solid 1px white;
padding: 5px 5px;
font-size: 10px;

@media screen and (max-width: 768px){
    right: 0;
}
`

const GalleryShow = ({children, CloseGallery, GalleryImg}) => {
    return (
        <>
            <Galeria GalleryImg={GalleryImg}>
                <CloseGalery onClick={CloseGallery}>CLOSE</CloseGalery>
                <ImgCont>
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                       {children}
                    </Swiper>
                </ImgCont>
            </Galeria>
        </>
    )
}


const Galeria = styled.div`
background-color: rgb(18, 18, 18,0.5);
position: fixed;
z-index: 70;
margin-top: 0;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
transition: transform .3s ease-in;
transform: ${props => props.GalleryImg ? 'translateX(0)' : 'translateX(-200%)'} ;
display: flex;

@media screen and (max-width: 768px) {
    max-width: 99%;
    height: 100%;
}
@media (max-height: 780px) {
    margin-top: -30px;
}

`



export default GalleryShow