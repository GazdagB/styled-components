import './App.css';
import { styled } from 'styled-components';

//Styled elements 
const Container = styled.div`
max-width: 1200px; 
margin: 0 auto; 
background: #efefef; 
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
border-radius: 5px; 

`

const Title = styled.h1`

font-size: 5rem;
letter-spacing: 7px;
font-family: system-ui

`

const Paragraph = styled.p`
font-size: 18px;
text-alig: center;
line-height: 18px;
`

const Button = styled.button`
padding: 10px ; 
border: 2px solid blue; 
background: ${props => props.primary ? "blue" : "white"};
color: ${props => props.primary ? "white" : "blue"};
font-size: 18px ;
border-radius: 5px;
cursor: pointer;
display: block;
text-align: center;
margin: 10px auto;
`

const SucsessButton = styled(Button)`
background: ${props => props.sucsess ? "green" : "white"}
color: ${props => props.sucsess ? "white" : "green"}
`

function App() {
  return (
    <>
    <Container>
      <Title>Hello World</Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium non fuga quibusdam iure, voluptatem, consequuntur cumque quam aliquam dignissimos architecto consectetur, sapiente illum minima.
        <Button primary>Primary Button</Button>
        <Button>Secondary Button</Button>

        <SucsessButton sucsess>Sucsess</SucsessButton>
        <SucsessButton>NonSucsess</SucsessButton>
      </Paragraph>
    </Container>
   </>
  );
}

export default App;
