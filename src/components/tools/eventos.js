import styled from 'styled-components'
import React from "react";
import { Titulo } from '../services'
import Slideshow, { Slide } from './slideshow'
import audi1 from './../pics/services/auditorio-1.jpg'
import audi2 from './../pics/services/auditorio-2.jpg'
import sal1 from './../pics/services/salon1.jpg'
import sal2 from './../pics/services/salon2.jpg'
import terra1 from './../pics/services/terraza1.jpg'
import terra2 from './../pics/services/terraza2.jpg'
import "swiper/css";
import "swiper/css/navigation";
import { FormattedMessage } from 'react-intl';

const Events = (props) => {

    return (
        <section>
          <EventsContainer className="eventscontainer">
                <Titulo><FormattedMessage id='events.title'/></Titulo>
                <TextEvent><FormattedMessage id='events.description'/></TextEvent>
                <CardsContainer>
                    <CardEvent>
                        <div className='ImgCont' onClick={props.HandleAudi}>
                        <Slideshow controles={false}>
                            <Slide>
                                <img src={audi1} alt='LET SUN HOTEL'/>
                            </Slide>
                            <Slide>
                                <img src={audi2} alt='LET SUN HOTEL'/>
                            </Slide>
                        </Slideshow>
                        </div>
                        <h3><FormattedMessage id='auditorium.title'/></h3>
                        <p>
                        <FormattedMessage id='auditorium.description'/>
                        </p>
                        <ButtonCnt href='/#/contact'><FormattedMessage id='nav.contact'/></ButtonCnt>
                    </CardEvent>
                    <CardEvent >
                    <div className='ImgCont' onClick={props.HandleSalon}>
                        <Slideshow controles={false} >
                            <Slide>
                                <img src={sal1} alt='LET SUN HOTEL' />
                            </Slide>
                            <Slide>
                                <img src={sal2} alt='LET SUN HOTEL' />
                            </Slide>
                        </Slideshow>
                    </div>
                        <h3><FormattedMessage id='meeting.title'/></h3>
                        <p>
                        <FormattedMessage id='meeting.description'/>
                        </p>
                        <ButtonCnt href='/#/contact'><FormattedMessage id='nav.contact'/></ButtonCnt>
                    </CardEvent>
                    <CardEvent>
                    <div className='ImgCont' onClick={props.HandleTerraza}>
                        <Slideshow controles={false}>
                            <Slide>
                                <img src={terra1} alt='LET SUN HOTEL'/>
                            </Slide>
                            <Slide>
                                <img src={terra2} alt='LET SUN HOTEL'/>
                            </Slide>
                        </Slideshow>
                    </div>
                        <h3><FormattedMessage id='terrace.title'/></h3>
                        <p>
                        <FormattedMessage id='terrace.description'/>
                        </p>
                        <ButtonCnt href='/#/contact'><FormattedMessage id='nav.contact'/></ButtonCnt>
                    </CardEvent>
                </CardsContainer>
            </EventsContainer>
        </section>
    )
}

const EventsContainer = styled.div`
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 45px;
    border-radius: 10px;

    @media screen and (max-width: 864px) {
        text-align: center;
        height: auto;
    }
`
const TextEvent = styled.p`
text-align: left;
`

const CardsContainer = styled.div`
display: flex;
position: relative;
flex-wrap: wrap;
height: auto;
justify-content: space-between;

@media screen and (max-width: 900px) {
    max-height: fit-content;
}

`
const CardEvent = styled.div`
width: 26%;
height: 550px;
padding: 30px;
background-color: rgb(29, 29, 29);
border-radius: 10px;
position: relative;
text-align: left;
box-shadow: 4px;
display: block;

.ImgCont{
    cursor: pointer;
}

h3{
    padding: 10px ;
    margin: 5px;
}

@media screen and (max-width: 874px) {
    width: 80%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-left: auto;
    margin-right: auto;

    p {
        margin-bottom: 35px;
        text-align: left;
    }

    a {
        position: relative;
        width: auto;
    }
}
`

const ButtonCnt = styled.a`
    color: white;
    font-weight: 700;
    background: rgb(159, 43, 43);
    bottom: 15px;
    padding: 10px 12px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: auto;
    right: auto;
    box-shadow: 2px 2px black;
    text-decoration: none;
    width: 40%;

    @media screen and (max-width: 875px) {
        bottom: 0;
    }
`




export default Events
