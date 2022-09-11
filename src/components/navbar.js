import { FormattedMessage } from "react-intl";
import { NavLink } from 'react-router-dom'
import Home from "./Home";
import Rooms from "./Rooms";
import ButtonLang from "../context/ButtonLang";
import styled from 'styled-components'
import logo1 from './pics/icons/logo-rectangulo.png'
import BurgerBtn from "./tools/Burgerbtn";
import { useState } from "react";

const Navbar = () => {
    const [clicked, setCliked] = useState(false)
    function handleClick() {
        setCliked(!clicked)
    }

    return (
        <header>
        <NavContainer>
            <NavLink to='/'>
                <Title><img src={logo1} alt='Let Sun Hotel Logo'/></Title>
            </NavLink>
            <div className={`links ${clicked ? 'active' : null}`}>
                <NavLink onClick={clicked ? { handleClick } : null} className="nav-li" to='/' element={<Home />}><FormattedMessage id='nav.home' /> </NavLink>
                <NavLink onClick={clicked ? { handleClick } : null} className="nav-li" to='/rooms' element={<Rooms />}>
                    <FormattedMessage id='nav.rooms' />
                </NavLink>
                <NavLink onClick={clicked ? { handleClick } : null} className="nav-li" to='/services'>
                    <FormattedMessage id='nav.services' />
                </NavLink>
                <NavLink onClick={clicked ? { handleClick } : null} className="nav-li" to='/location' >
                    <FormattedMessage id='nav.location' />
                </NavLink>
                <button className="nav-li principal">
                    <a onClick={clicked ? { handleClick } : null} href="https://clickandbook.net/letsunhotel">
                        <FormattedMessage id='nav.book' />
                    </a>
                </button>
                <NavLink onClick={clicked ? { handleClick } : null} className="nav-li " to='/contact' >
                    <FormattedMessage id='nav.contact' />
                </NavLink>
                <div className='nav-li'>
                <ButtonLang/>
                </div>
            </div>
            <div className="burger">
                <BurgerBtn clicked={clicked} handleClick={handleClick} />
            </div>
        </NavContainer>
        </header>
    )
}



const NavContainer = styled.nav`
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 70px;
    /* position: absolute; */
    background-color: none;
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    .nav-li {
        color: whitesmoke;
        text-decoration: none;
        margin-right: 10px;
        align-items: center;
    } 
    .burger{
        margin-right: 5px;
        @media (min-width: 915px) {
            display: none;
        }
    }
    .links{
        position: absolute;
        z-index: 50;
        top: -1000px;
        margin-left: auto;
        text-align: center;
        transition: all .4s ease;
        overflow: hidden;
         
        .nav-li{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media (min-width: 915px) {
            position: initial;
            margin: 0;
            
        .nav-li{
            font-size: 1rem;
            display: inline;

        }
        }

        .nav-li:hover{
            font-weight: bold;
        }

        .nav-li.active{
            color: rgb(243, 240, 58);
            font-weight: bold;
            text-decoration: none;
            font-size: 20px;
        }

        .nav-li.principal{
            color: white;
            background-color: rgb(159, 43, 43);
            padding: 10px 10px;
            border-radius: 7px;
            transition: all 0.3s ease 0s;
            a{
                text-decoration: none;
                color: white;
            }
        }

        .nav-li.principal:hover{
            background-color: rgb(159, 43, 43,0.8) ;
        }

    }
    
    .links.active{
        width: 98%;
        position: absolute;
        z-index: 40;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        top: 63px;
        text-align: center;
        background: rgb(32, 31, 31,.9);
        height: 80%;
        border-radius: 10px;
        display: block;
        transition: all .5s ease;
        border: 1px solid yellow;
        
        
        .nav-li{
            color: red;
            font-weight: bold;
            margin-top: 2rem;
            font-size: 2rem;
            display: block;
        }
        
        .nav-li.principal{
            display: block;                
            color: white;
            width: auto;
            margin-left: auto;
            padding: 15px;
            margin-right: auto;
            text-decoration: none;

            a{
                text-decoration: none;
                color: white;
                
            }

        }

        } 
`
const Title = styled.div`
font-size: 15px;
left: 0;
display: inline-block;
img {
        height: 65px;
        width: auto;
        position: relative;
        background: none;
        margin-top: 5px;
        padding: 5px;
    }
`

export default Navbar