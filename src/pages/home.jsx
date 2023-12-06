import styled from "styled-components";
import { ThemeToggle } from "../components/ThemeToggle";
import { Card } from "../components/Card";
import cards from "../../data/cards";

export function Home() {

  return (
    <Container>
      <ThemeToggle />
      
      <Hero>
        <div className="logo">
          <h3>Mensagens ocultas no universo solitário do Wall-E</h3>
        </div>
      </Hero>

      <CardsSection>
        {Object.entries(cards).map(([key, card]) => {
          return (
            <Card key={key} title={card.title} description={card.description} image={card.image} />
          )
        })}
      </CardsSection>
      
      <ApagarDps>
        
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ApagarDps>
    </Container>
  )
}

const ApagarDps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const Container = styled.div`
  background-color: ${props => props.theme["surface"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 6.5rem;
  gap: 13rem;
`;


const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("./images/heroImg.png");
  background-repeat: no-repeat;
  background-size: contain;

  h3 {
    position: absolute;
    bottom: 0;
    max-width: 30%;
  }
`;

const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  /* margin: 0 auto; */
`;