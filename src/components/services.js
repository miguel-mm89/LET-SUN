import Slideshow from "./tools/slideshow"
import styled from "styled-components";
import img3 from './pics/services/FCF_0634.jpg'
import img1 from './pics/services/FCF_0703.jpg'
import img2 from './pics/services/FCF_0799.jpg'
import img4 from './pics/services/FCF_0504.jpg'
import { Slide, TextoSlide } from "./tools/slideshow";
import { FormattedMessage } from "react-intl";


const Services = () => {
    return (
        <main>
            <Titulo>spa</Titulo>
            <p><FormattedMessage id="services.index"/></p>
            <SpaContainer>
            <Slideshow>
                <Slide>
                    <img src={img1} alt='Let Sun Hotel' />
                    <h2>JACUZZI</h2>
                   <TextoSlide><FormattedMessage id="services.jacuzzi" /></TextoSlide>
                </Slide>
                <Slide>
                    <img src={img2} alt='Let Sun Hotel' />
                    <h2>SAUNA</h2>
                    <TextoSlide><FormattedMessage id="services.sauna" /></TextoSlide>
                </Slide>
                <Slide>                    
                    <img src={img3} alt='Let Sun Hotel' />                    
                    <h2>GYM</h2>
                    <TextoSlide><FormattedMessage id="services.gym" /></TextoSlide>
                </Slide>
                <Slide>
                    <img src={img4} alt='Let Sun Hotel' />
                    <h2><FormattedMessage id="services.massage"/></h2>
                    <TextoSlide><FormattedMessage id="services.massage1"/></TextoSlide>
                </Slide>
            </Slideshow>
            </SpaContainer>
            <ServiceExclisive>
            <FormattedMessage id='spa.exclusive'/>
            </ServiceExclisive>
        </main>
    )
}

export const Titulo = styled.h1`
font-size: 30px;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 10px;
width: 95%;
text-align: left;
`

 const SpaContainer = styled.div`
 position: relative;
 max-width: 1000px;
 margin-left: auto;
 margin-right: auto;
 h2{
    margin-top: 15px;
 }
 `

 const ServiceExclisive = styled.p`
 margin-top: 50px;
 border-radius: 10px;
 border: 1px solid rgb(243, 240, 58);
 padding: 15px 15px;
 `



export default Services