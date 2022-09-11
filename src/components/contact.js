import { FormattedMessage } from "react-intl"
import styled from "styled-components"
import { Imap, MapCont } from "./location"
import { Titulo } from "./services"
import ContactForm from "./tools/contactform"
import Contactsection from "./tools/contactsection"



const Contact = () => {
    return (
        <main>
            <Titulo><FormattedMessage id='nav.contact' /></Titulo>
            <p><FormattedMessage id='contact.help'/></p>
            <Container>
                <ContactForm />
                <Contactsection />
            </Container>
            <MapCont>
                <Imap  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1161.3257222866116!2d-58.43801972641756!3d-34.585819889235374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58d0fabd171%3A0x5969f362ba1069d7!2sLet%20Sun%20Hotel%20Boutique!5e0!3m2!1ses-419!2sar!4v1652956286529!5m2!1ses-419!2sar">
                </Imap>
            </MapCont>
        </main>

    )

}

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;

@media screen and (max-width: 800px) {
    flex-direction: column;
}
`

export default Contact