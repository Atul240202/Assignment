import styles from "styled-components";
import backImg from "../Images/image64.png";
import nefcLine from "../Images/NefsLine.png"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FrameImg from "../Images/FrameImg.png"
// import "./Components.css"




export default function Banner() {
  const Div = styles.div`
  // position: absolute;
  width: 100%;
  // height: 120vh;  
  background: url(${backImg});
  z-index: -1;
  margin-top:-65px;    
  background-size: cover;
  rgba(0, 0, 0, 0.15);
  opacity: .99;
  display: flex;
  // padding-bottom:100px;
  @media all and (max-width: 850px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top:-60px;  
}
    `;
const LeftDiv = styles.div`
    padding-left: 30px;
    width:45%;
    rgba(50, 26, 185, 0.15); 
    backdrop-filter: blur(30px);
    background: linear-gradient(180deg, #000000 0%, rgba(99, 77, 0, 0) 100%);
    opacity: 1.5;
    @media all and (max-width: 850px) {
      width: 100%;
     padding-bottom: 100px;
      
  }
    

    `
    const RightDiv = styles.div`
    width:55%;
    // height: 120vh;
    rgba(0, 0, 0, 1); 
    backdrop-filter: blur(1px);
    background: linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0) 100%);
    opacity: 1.5;
    padding-bottom: 100px;
    @media all and (max-width: 850px) {
      width: 100%;
     
      
  }
    `
    const NeftLine = styles.div`
    background: url(${nefcLine});
    background-size: cover;
    height: 80px;
    width: 200px;
    
   

    `
    const H1 = styles.div`
    font-size: 50px;
    background: #B6DCFF;
    background: -webkit-linear-gradient(to right, #B6DCFF 0%, #70C9BE 50%, #D6C8FF 100%);
    background: -moz-linear-gradient(to right, #B6DCFF 0%, #70C9BE 50%, #D6C8FF 100%);
    background: linear-gradient(to right, #B6DCFF 0%, #70C9BE 50%, #D6C8FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    `
    const Component = styles.div`
        width: 70%;
        margin-left: 30%;
        margin-top: 180px;
        text-align: right;
        @media all and (max-width: 850px) {
          width: 100%;
          margin-left: 0%;
          
      }
    `
  const Discover = styles.div`
  font-size: 64px;
   font-weight: bold;
   @media all and (max-width: 850px) {
    font-size:50px;
   
    
}
  `
  return (
      <>
        <Div>
            <LeftDiv>
              <div style={{marginTop:"70px",
              fontFamily: "Quarto", 
              marginLeft:"50px",
              lineHeight: "76px",
              maxWidth:"450px",
              marginTop: "120px",
              }}>
              <Discover style={{color:"white"}}>
                Discover. Collect. & Sell. Extraordinary
              </Discover>
              <NeftLine>
                <H1> NFT's</H1>
              </NeftLine>
              <div style={{fontFamily: "Eina01SemiBold",
                fontSize: "20px",
                lineHeight: "25px",width:"80%", marginTop: "20px", color:"white" }}>
              On the world???s first & largest NFT marketplace.
              </div>

              <Stack spacing={3} direction="row" style={{marginTop:"35px"}}>
                <Button variant="contained" style={{borderRadius: "0px", width: "170px"}}>Explore</Button>
                <Button variant="outlined" style={{color: "#FFFFFF", padding: "10px", fontSize: "14px", borderRadius: "0px", width: "140px"}}> Create </Button>
              </Stack>
              <a href="#" style={{color: "#8F8F8F", textDecoration:"underline"}}>Get Featured On The Homepage</a>
              </div>
            </LeftDiv>
            <RightDiv>
             
              <Component >
             
                <img  style={{width: "90%", marginRight: "65px", marginTop: "45%"}} src={FrameImg} alt="" />
              
                <div className="Rtext" style={{color: "#41a1b4"}}>
                  SoulCurryArt
                </div>
                <div className="Text container-lg" style={{marginRight: "95px"}}>
                  A play of light and shade, chairoscurso is the realm between the light and dark
                </div>           
                <br></br>
                <button type="button" className="btn btn-secondary btn-lg " style={{borderRadius: "0px", borderColor:"#ffffff", marginRight: "105px", borderWidth:"2px", width: "170px", height: "50px"}} disabled>Place Bid</button>
             
              </Component>
            </RightDiv>
        </Div>
      </>
  )
  
}
