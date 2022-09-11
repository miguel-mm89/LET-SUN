import styled from "styled-components"
import ImgBG from './../pics/contacts.jpg'
import FacebookIco from './../pics/icons/facebook.png'
import InstaIco from './../pics/icons/instagram.png'
import TripIco from './../pics/icons/tripadvisor.png'
import EmailIco from './../pics/icons/email.png'
import AdressIco from './../pics/icons/adress.png'
import PhoneIco from './../pics/icons/phone1.png'
import { FormattedMessage } from 'react-intl';


const Contactsection = () =>{
    return(
        <ContactContainer>
            <img className ='img'src={ImgBG} alt='contact hotel'/>
            <IconContainer>
                <h2><FormattedMessage id='nav.contact'/></h2>
                <a href='tel: +5491147791212' ><img className="ico" src={PhoneIco} alt='icon'/>+54 9 11 4779-1212</a>
                    <a href="tel: +5491147789203"><img className="ico" src={PhoneIco} alt='icon'/> +54 9 11 4778-9203</a>
                    <a href="mailto: info@letsunhotel.com"><img className="ico" src={EmailIco} alt='icon'/> info@letsunhotel.com</a>
                    <a href='https://goo.gl/maps/Z19QTfSxevfShGg7A' target='_blank' rel="noreferrer"><img className="ico" src={AdressIco} alt='icon'/> Fitz Roy 1527, Buenos Aires, Argentina</a>
                    <h2><FormattedMessage id='contact.network'/></h2>
                    <a href="https://www.facebook.com/letsunhotel.buenosaires/" target='_blank' rel="noreferrer"><img className="ico face" src={FacebookIco} alt='icon'/> FACEBOOK</a>
                    <a href="https://www.instagram.com/letsun.hotel/" target='_blank' rel="noreferrer"><img className="ico" src={InstaIco} alt='icon'/> INSTAGRAM</a>
                    <a href="https://www.tripadvisor.com.ar/Hotel_Review-g312741-d11985018-Reviews-Let_Sun_Hotel-Buenos_Aires_Capital_Federal_District.html" target='_blank' rel="noreferrer"><img className="ico" src={TripIco} alt='icon'/> TRIPADVISOR</a>
            </IconContainer>
        </ContactContainer>
   
    )
}

const ContactContainer = styled.div`
width: 50%;
position: relative;
border-radius: 10px;
overflow: hidden;
margin-left: 10px;
@media screen and  (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-left: 0;
}

.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const IconContainer = styled.div`
background: rgb(0,0,0,0.5);
position: absolute;
width: 100%;
height: 100%;
top: 0;
text-align: center;
display: flex;
flex-direction: column;

a {
    color: whitesmoke;
    text-decoration: none;
    padding: 3px;
}

h2 {
    margin-top: 50px;
@media screen and  (max-width: 800px) {
    margin-top: 10px;
}
    
}

img{
width: 26px;
vertical-align: top;
padding-bottom: 5px;
padding-right: 2px;
}
`


export default Contactsection