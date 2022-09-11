import { useContext } from "react"
import { langContext } from "./langContext"
import styled from "styled-components";
import SpanishFlag from "./../components/pics/icons/spanishflag.png";
import EnglishFlag from "./../components/pics/icons/englishflag.png";

const ButtonLang = () =>{ 
const idioma = useContext(langContext);

    return(
    <div className="nav-li">
    <FlagCont onClick={() => idioma.setLanguage('en')}><img src={EnglishFlag} alt='English'/></FlagCont>
    <FlagCont onClick={() => idioma.setLanguage('es')}><img src={SpanishFlag} alt='spanish'/></FlagCont>
    </div>)
}

const FlagCont = styled.button`
background: none;
color: white;
cursor: pointer;
align-items: center;
border: none;
margin-left: 5px;
position: relative;

@media (max-width: 914px) {
       justify-content: space-between;
       display: inline-block;
       margin-left: 50px;
       margin-right: auto;
    }

img{
    width: 30px;
    height: auto;
    object-fit: cover;
    vertical-align: middle;
 
    @media (max-width: 914px) {
        width: 55px;
        margin-right: 20px;
    }

}
`

export default ButtonLang
