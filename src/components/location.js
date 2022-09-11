import Slideshow, { Slide } from "./tools/slideshow"
import styled from 'styled-components'
import loct1 from './pics/location/location1.jpg'
import loct2 from './pics/location/location2.jpg'
import loct3 from './pics/location/location3.jpg'
import loct4 from './pics/location/location4.jpg'
import { Titulo } from "./services"
import { FormattedMessage } from "react-intl"


const Location = () => {
    return (
        <main>
            <Titulo><FormattedMessage id='nav.location'/></Titulo>
            <LocationCont>
                <DivSlide>
                    <Slideshow controles={false}>
                        <Slide>
                            <img src={loct1} alt='Hotel Argenta Buenos Aires'/>
                        </Slide>
                        <Slide>
                            <img src={loct2} alt='Hotel Argenta Buenos Aires'/>
                        </Slide>
                        <Slide>
                            <img src={loct3} alt='Hotel Argenta Buenos Aires'/>
                        </Slide>
                        <Slide>
                            <img src={loct4} alt='Hotel Argenta Buenos Aires'/>
                        </Slide>
                    </Slideshow>
                </DivSlide>
                <ListCont>

                    <UlTitle><FormattedMessage id='location.hightlist'/></UlTitle>
                    <UlList>
                        <li>Aeropuerto Internacional (Ezeiza) 27Km</li>
                        <li>Aeroparque 3,8Km</li>
                        <li>Plazoleta Julio Cortázar (ex Plaza Serrano) 0,8Km</li>
                        <li>Ecoparque de Buenos aires 2,2km </li>
                        <li>Rosedal Palermo</li>
                        <li>Museo Nacional Bellas Arte 4,1Km</li>
                        <li>Estadio River Plate 4,6Km</li>
                        <li>El Ateneo 3,8 Km</li>
                    </UlList>
                    <UlTitle><FormattedMessage id='location.other'/></UlTitle>
                    <UlList>
                        <li>Campobravo 0,2Km</li>
                        <li>Las Cabras 0,3Km</li>
                        <li>Famous Loungebar 0,2 Km</li>
                        <li>La Pantera Rosa 1,1Km</li>
                        <li>Don Julio 1,6Km</li>
                        <li>Skybar 8,3Km</li>
                    </UlList>
                </ListCont>
            </LocationCont>
            <MapCont>
                <AdressHotel>FITZ ROY 1527, PALERMO, CIUDAD DE BUENOS AIRES</AdressHotel>
                <Imap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1161.3257222866116!2d-58.43801972641756!3d-34.585819889235374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58d0fabd171%3A0x5969f362ba1069d7!2sLet%20Sun%20Hotel%20Boutique!5e0!3m2!1ses-419!2sar!4v1652956286529!5m2!1ses-419!2sar" ></Imap>
            </MapCont>
        </main>
    )
}

const LocationCont = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    border-radius: 10px;
    background: rgb(29, 29, 29);
    border: none;
    @media screen and (max-width: 768px) {
    flex-direction: column;
}

`
const ListCont = styled.div`
display: flex;
width: 38%;
flex-direction: column;
align-content: space-between;
margin-top: 15px;
margin-bottom: 15px;


@media screen and (max-width: 768px) {
 width: 100% ;
}
`

const UlTitle = styled.h2`
position: relative;
text-align: center;
`
const UlList = styled.ul`
position: relative;
margin-left: 40px;

`

const DivSlide = styled.div`
    overflow: hidden;
    width: 60%;
    height: 500px;
    border-radius: 10px;
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        vertical-align: top;
        height: 100%;
    }
    @media screen and (max-width: 768px) {
     width: 100% ;
    object-fit: cover;
    height: 100%;
}
`

export const Imap = styled.iframe`
width: 95%;
margin-left: auto;
margin-right: auto;
height: 440px;
padding: 10px;
border: none;

@media screen and (max-width: 768px) {
    width: 95%;
}
`

export const MapCont = styled.div`
width: 100%;
display: block;
text-align: center;
margin-top: 35px;
border-radius: 10px;
`
const AdressHotel = styled.h3`
font-size: 1.3rem;
background: rgb(29, 29, 29);
height: 80%;
width: 80%;
padding: 15px;
display: block;
justify-content: center;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
border: 1px solid red;
`


export default Location 