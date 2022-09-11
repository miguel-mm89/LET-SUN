import { FormattedMessage } from "react-intl";
import Slideshow from "./tools/slideshow";
import { Slide } from "./tools/slideshow";
import img1 from './pics/home/home0.jpg'
import img2 from './pics/home/home1.jpg'
import img3 from './pics/home/home3.jpg'
import img4 from './pics/home/buenosaires.jpg'
import img5 from './pics/home/home4.jpg'
import styled from 'styled-components'
import HomeGallery from "./tools/homegallery";


const Home = () => {
    const HomeImg = [img1, img2, img3, img4, img5]
    return (
        <main>
            <PrincipalContainer>
                <ImgContainer>
                <Slideshow controles={false}>                      
                         {HomeImg.map((item, pos) => (<Slide key={pos}><img src={item} alt='Let Sun Hotel'/></Slide>))}                              
                  </Slideshow>
                </ImgContainer>
                <TextContainer>
                    <h1>HOTEL</h1>
                    <p><FormattedMessage id='home.index' />
                        <FormattedMessage id="home.index1" />
                    </p>
                </TextContainer>
                
            </PrincipalContainer>
            <HomeGallery/>
        </main>
    )
}

const ImgContainer = styled.div`
display: flex;
position: relative;
height: 100%;
flex-wrap: nowrap;
overflow: hidden;
border: solid 1px rgb(220, 216, 216) ;
border-radius: 10px;
@media screen and (max-width: 768px) {
    width: 100%;
    z-index: 5;
    order: 1;
}
`

const PrincipalContainer = styled.div`
margin: auto ;
width: 90%;
position: relative;
display: flex;
flex-wrap: wrap;
flex-direction: row;
img{
    flex-grow: 1;
    width: 100%;
    @media screen and (max-width: 768px) {
}
}

`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 75%;
right: 0;
bottom: 0;
background-color: rgb(9, 9, 9, 0.5);
z-index: 10;
padding-right: 15px;

@media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    order: 0;
}
p{
    width: 95%;
    align-content: space-between;
    position: relative;
    padding: 10px;
    @media screen and (max-width: 768px) {
    width: 100%;

}
}
h1{
    width: 95%;
    position: relative;
    height: 30px;
    text-align: center;
@media screen and (max-width: 768px) {
    width: 100%;
}
}
`

export default Home;