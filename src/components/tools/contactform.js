import styled from "styled-components" 
import emailjs from '@emailjs/browser'
import { FormattedMessage } from "react-intl"
import { useState } from "react"
import MailSuccess from './../pics/icons/mailsuccess.png'


const ContactForm = () => { 
const [FomrShow, setFomrShow] = useState(true)
const SentForm = () => setFomrShow(!FomrShow)
const sendEmail = (e) =>{ 
    e.preventDefault()
    emailjs.sendForm('service_5nabrgd', 'template_pim2qad', e.target, '5bdEPxLIYKS-7eMwA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    SentForm()
};

    return (
        <FormContainer>       
               { FomrShow?
                   <FormContact onSubmit={sendEmail}>           
                   <label htmlFor="name"><FormattedMessage id='contact.name'/></label><br/>
                    <input type='text' name="name" required/><br/>
                    <label htmlFor="name"><FormattedMessage id='contact.email'/></label><br/>
                    <input type='email' name="email" required/><br/>
                    <label htmlFor="name"><FormattedMessage id='contact.subject'/></label><br/>
                    <input type='text' name='subject'/><br/>
                    <label htmlFor="name"><FormattedMessage id='contact.message'/></label> <br/>
                    <textarea type='textarea' className='text-area' name="message" required/><br/>
                    <button type="submit"><FormattedMessage id='contact.send'/></button>
                </FormContact>: <div>
                <Success>
                <img className="img-ico" src={MailSuccess} alt='mail ico'/><br/>
                    <p><FormattedMessage id='contact.datasend'/></p>           
                </Success>
                </div>
        }
        </FormContainer>
    )
}

const FormContainer = styled.div`
width: 50%;
background: rgb(29,29,29);
border-radius: 10px;
@media (max-width: 800px) {
    width: 100%;
}

`
const FormContact = styled.form`
display: flex;
flex-direction: column;
width: 90%;
padding: 15px;
text-align: left;
margin-left: auto;
margin-right: auto;

input{
    width: 90%;
    margin-bottom: 5px;
    height: 25px;
    background: none;
    color: whitesmoke;
    border-bottom: 1px solid red;
}
.text-area{
    background: none;
    max-height: 300px;
    color: whitesmoke;
    border: none;
    border-bottom: 1px solid red ;
    max-width: 90%;
    min-width: 90%;
    margin-top: 5px;
    max-height: 300px;
    height: 200px;
} 

button{
    width: 35%;
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
    color: whitesmoke;
    background: rgb(159, 43, 43) ;
    border-radius: 5px;
    font-weight: bold;
    @media (max-width: 800px) {
        margin-right: auto;
        margin-left: auto;
    }
}
`

const Success = styled.div`
    position: relative;
    height: 100%;
    margin-top: 20%;
    width: 100%;
    color: yellow;
    text-align: center;
    margin-bottom: 20%;
    font-size: 25px;
    .img-ico {
    width: 40%;
    transition: transform .5s ease-in;
}

p{
    margin-top: 5%;
}

`

export default ContactForm