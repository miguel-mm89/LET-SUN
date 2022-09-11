import styled from "styled-components"
import LogoMedio from './pics/icons/logo-medio.png'
import { FormattedMessage } from "react-intl";
import FacebookIco from './pics/icons/facebook.png'
import InstaIco from './pics/icons/instagram.png'
import TripIco from './pics/icons/tripadvisor.png'
import EmailIco from './pics/icons/email.png'
import AdressIco from './pics/icons/adress.png'
import PhoneIco from './pics/icons/phone1.png'
import LogoMike from './pics/icons/logomike.png'


const Footer = () => {
    return (
        <footer>
            <FooterCont>
                <ContainerFooter>
                    <BoxContainer>
                               <a className="LOGO-MIGUEL" href="mailto: mikemorales89@live.com">
                                   <img src={LogoMike} alt='Miguel Design'/><br/>
                                   
                                    DISEÑO Y PROGRAMACIÓN
                                    
                               </a>
                    </BoxContainer>
                    <BoxContainer>
                        <h2><FormattedMessage id='contact.network' /></h2>
                        <a href="https://www.facebook.com/letsunhotel.buenosaires/" target='_blank' rel="noreferrer"><img className="ico face" src={FacebookIco} alt='' /> FACEBOOK</a>
                        <a href="https://www.instagram.com/letsun.hotel/" target='_blank' rel="noreferrer"><img className="ico" src={InstaIco} alt='' /> INSTAGRAM</a>
                        <a href="https://www.tripadvisor.com.ar/Hotel_Review-g312741-d11985018-Reviews-Let_Sun_Hotel-Buenos_Aires_Capital_Federal_District.html" target='_blank' rel="noreferrer"><img className="ico" src={TripIco} alt='' /> TRIPADVISOR</a>
                    </BoxContainer>
                    <BoxContainer>
                        <h2><FormattedMessage id='nav.contact' /></h2>
                        <a href='tel: +5491147791212' ><img className="ico" src={PhoneIco} alt='' />+54 9 11 4779-1212</a>
                        <a href="tel: +5491147789203"><img className="ico" src={PhoneIco} alt='' /> +54 9 11 4778-9203</a>
                        <a href="mailto: info@letsunhotel.com"><img className="ico" src={EmailIco} alt='' /> info@letsunhotel.com</a>
                        <a href='https://goo.gl/maps/Z19QTfSxevfShGg7A' target='_blank' rel="noreferrer"><img className="ico" src={AdressIco} alt='' /> Fitz Roy 1527, Buenos Aires, Argentina</a>
                    </BoxContainer>
                    <BoxContainer>
                        <div className="terms">
                            <a href="/">
                               <img src={LogoMedio} alt='let sun hotel logo' />
                               </a>
                        </div>
                    </BoxContainer>
                </ContainerFooter>   
                    <p>© 2022 LET SUN HOTEL BOUTIQUE.</p>
            </FooterCont>
        </footer>
    )
}

const FooterCont = styled.div`
max-width: 1200px;
width: 100%;
padding: 0px;
height: auto;
bottom: 0;
margin-top: 20px;
margin: auto;
.LOGO-MIGUEL{
    text-align: center;
    margin-top: 15px;
    font-size: 12px;
    padding: 15px;
}
p{
    text-align: center;
    margin: 10px;
    padding: 15px;
}

`

const ContainerFooter = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 50px;
padding: 30px;
@media screen and  (max-width: 940px) {
    flex-direction: column;
}

`
const BoxContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 350px;

@media screen and  (max-width: 940px){
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
}

.ico{
width: 26px;
vertical-align: top;
padding-bottom: 5px;
padding-right: 2px;
}

img{
    width: 150px;
    vertical-align: top;
}

.terms{
    max-width: 350px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    @media screen and  (max-width: 940px){
        max-width: 100%;
    }
}

a{
    color: whitesmoke;
    text-decoration: none;
    padding: 0px;
}
`

export default Footer