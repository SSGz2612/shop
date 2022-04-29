import styled from "styled-components";

/*** Nav ***/
let Principal_Cl = "#5ECE7B",
Secondary_Cl = "#EFEFEF",
Third_Cl = "#AAAAAA";

export const NavPr = styled.nav`
position: fixed;
background: white;
width: 100%;
height: 60px;
border-bottom: 1px solid ${ Secondary_Cl };
z-index: 1;
`
export const NavBox = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
width: 100%;
height: 100%;
`
export const Btn = styled.a`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: Black;
padding: 0px 15px;
height: 50px;
border-bottom: 2px solid transparent;

&:hover {
    color: ${ Principal_Cl };
    border-bottom: 2px solid ${ Principal_Cl };
    transition: all 1s ease;
}
`
export const ElNav = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Select2 = styled.div`
display: flex;
align-items: center;
margin: 20px;
padding: 5px 10px 5px 5px;
`
export const Select = styled.select`
display: flex;
margin: 20px;
padding: 5px 10px 5px 5px;
border: none;
`
export const ElCard = styled.div`
display: flex;
align-items: start;
justify-content: end;
`
export const ContainerCountCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 20px;
height: 1px;
`
export const CountCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: black;
font-size: 12px;
color: white;
width: 20px;
height: 20px;
border-radius: 10px;
`

/*** Header ***/
export const Header = styled.header`
display: flex;
justify-content: center;
align-items: flex-end;
font-size: 20px;
width: 100%;
height: 120px;
margin: 0px auto 20px auto;
`

/*** Products - BODY ***/
export const BodyBox = styled.div`
display: grid;
justify-items: center;
grid-template-columns: repeat( auto-fill, minmax( 390px, 1fr ));
grid-gap: 20px;
margin: auto;
width: auto;
max-width: 1440px;
height: auto;
`

/*** Card ***/
export const CardBox = styled.div`
display: flex;
flex-direction: column;
width: 390px;
height: auto;
min-height: 450px;

&:hover {
    box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 4px 12px;
}
`
export const InternBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 15px 0px;
width: 390px;
height: auto;
`
export const ImgBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 360px;
height: 400px;
`
export const Img = styled.div`
display: flex;
justify-content: center;
background-image: url(${( props ) => props.url });
background-repeat: no-repeat;
background-size: 320px;
width: 320px;
height: 100%;
`
export const ImgBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: rgba( 255, 255, 255, 0.75 );
color: ${ Third_Cl };
width: 100%;
height: 100%;
`
export const BtnSlice = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: ${ Secondary_Cl };
background-color: white;
width: 20px;
height: 60px;
border: none;
cursor: pointer;

&:hover { background-color: ${ Secondary_Cl }; }
`
export const AddItemBox = styled.div`
display: flex;
align-items: center;
justify-content: end;
width: 80%;
height: 0px;
`
export const AddItem = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
background-color: white;
width: 30px;
height: 30px;
border: 1px solid black;
cursor: pointer;

&:hover { color: ${ Principal_Cl }; }
`
export const TextTittle = styled.div`
display: flex;
width: 360px;
padding: 5px 0px;
`

/*** CARD_CLIENT ***/
export const HeaderCardClient = styled.header`
display: flex;
justify-content: start;
align-items: flex-end;
font-size: 20px;
width: 80%;
height: 120px;
margin: 0 auto 20px auto;
`
export const HeaderCardClient2 = styled.header`
display: flex;
justify-content: start;
font-size: 20px;
width: 80%;
margin: 5px 0;
`
export const BodyBoxCardClient = styled.div`
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: 1fr;
width: 100%;
height: auto;
`
export const BBCenterCardClient = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
width: 100%;
`
/*** Card - CARD_CLIENT ***/
export const CardBoxCardClient = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
height: auto;
border-top: 2px solid ${ Secondary_Cl };
border-bottom: 2px solid ${ Secondary_Cl };

@media( max-width: 600px ) { width: 100%; }
`
export const CardBoxModal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
border-top: 2px solid ${ Secondary_Cl };
`
export const ContainerBoxLR = styled.div`
display: flex;
flex-direction: column;
`
export const ContainerBoxButtonCardClient = styled.div`
display: flex;
justify-content: end;
align-items: end;
width: 100%;
`
export const ContainerBoxTx = styled.div`
display: flex;
flex-direction: column;
width: 35%;

@media( max-width: 1000px ) {
    align-items: center;
    background-size: 300px;
    width: 90%;
    height: auto;
}
`
export const ContainerIMG = styled.div`
display: flex;
align-items: center;
`
export const BoxLR = styled.div`
display: flex;
align-items: center;
height: auto;
`
export const BoxLR2 = styled.div`
display: flex;
align-items: center;
min-height: 50px;
height: auto;
`
export const BoxLRModal = styled.div`
display: flex;
align-items: center;
margin: 2px 0;
width: 180px;
height: auto;
`
export const BoxLRModalInput = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
height: auto;
`
export const BoxNR = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 40px 0;
min-height: 50px;
height: auto;
`
export const TxTittle = styled.div`
display: flex;
font-size: 20px;
padding: 0px 20px;
`
export const TxTittle2 = styled.div`
display: flex;
justify-content: space-between;
font-size: 20px;
width: 100%;
padding: 5px 20px;
`
export const TxTittle3 = styled.div`
display: flex;
font-family: RobotoCondensed-Bold;
font-size: 13px;
font-weight: 600;
padding: 5px 0px 0px 20px;
`
export const TxTittle4 = styled.div`
display: flex;
align-items: center;
font-size: 20px;
padding: 0 20px;
height: 50px;
`
export const InfoTextTittle = styled.div`
padding: 5px 20px;
height: 230px;
overflow-y: auto;
`
export const ImgCardClient = styled.div`
display: flex;
justify-content: center;
background-image: url(${( props ) => props.url });
background-repeat: no-repeat;
background-size: 120px;
margin: 20px;
width: 120px;
height: 200px;
`
export const AddItemCardClient = styled.button`
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 15px;
background-color: rgba( 0, 0, 0, 0.75 );
margin: 5px 2.5px;
width: 24px;
height: 24px;
border: none;
border-radius: 2px;
cursor: pointer;
`

/*** Card - VIEW_CLIENT ***/
export const CardBoxViewClient = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
height: 100%;
min-height: 350px;

&:hover {
    box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 4px 12px;
}

@media( max-width: 1350px ) { flex-direction: column; }
`
export const ContainerBoxVC = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 20%;
height: auto;

@media( max-width: 1350px ) {
    flex-direction: row;
    width: auto;
}
@media( max-width: 800px ) {
    display: none;
}
`
export const ContainerViewClient = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 90%;
height: auto;

@media( max-width: 1000px ) {
    flex-direction: column;
    width: 100%;
}
`
export const ImgViewClient = styled.div`
display: flex;
justify-content: center;
background-image: url(${( props ) => props.url });
background-repeat: no-repeat;
background-size: 500px;
min-width: 150px;
width: 500px;
height: 600px;

@media( max-width: 1200px ) {
    background-size: 300px;
    width: 300px;
    height: 350px;
}
`
export const ImgViewCLMin = styled.div`
display: flex;
justify-content: center;
background-image: url(${( props ) => props.url });
background-repeat: no-repeat;
background-size: 80px;
margin: 5px;
width: 70px;
height: 90px;
cursor: pointer;
`
export const BtnVCC = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${ Principal_Cl };
color: white;
text-decoration: none;
margin: 20px;
width: 250px;
height: 50px;
cursor: pointer;

&:hover { background-color: black; }
`
export const BtnVCCModal = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${ Principal_Cl };
color: white;
text-decoration: none;
margin: 15px;
width: 150px;
height: 50px;
cursor: pointer;

&:hover { background-color: black; }
`
export const BtnVCC2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
color: black;
text-decoration: none;
margin: 15px;
width: 150px;
height: 50px;
border: 2px solid black;
cursor: pointer;
`
export const BtnVCCFalse = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
background-color: ${ Secondary_Cl };
color: white;
margin: 20px;
width: 250px;
height: 50px;
`

/*** Modal ***/
export const Overview = styled.div`
display: flex;
justify-content: end;
align-items: flex-start;
/* setting the view */
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 1;
/* *** */
background-color: rgba( 0, 0, 0, 0.50 );

@media( max-width: 600px ) { justify-content: center; }
` 
export const OvwContainer = styled.div`
position: relative;
overflow-y: auto;
background-color: white;
margin: 40px;
width: 400px;
height: 700px;
border-radius: 5px;
`
export const BtnContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 60px;
`

/*** Currency ***/
export const ContCurrency = styled.div`
display: flex;
position: absolute;
flex-direction: column;
/* setting the view */
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 2;
/* background-color: rgba( 0, 0, 0, 0.50 ); */
`
export const ContCurrencyBox = styled.div`
display: flex;
position: absolute;
flex-direction: column;
top: 6%;
right: 13%;
width: 100px;
height: 200px;
background-color: rgba( 0, 0, 0, 0.50 );
box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 4px 12px;
`
export const CurrencyBox = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-size: 18px;
font-family: Raleway-Medium;
font-weight: 500;
position: relative;
padding: 0px 10px;
background-color: white;
width: 80px;
height: 40px;

&:hover {
    background-color: ${ Secondary_Cl };
}
`