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
    </Container>
  )
}


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
  width: calc(100vw - 13rem);
  height: calc((100vw - 13rem) * 0.51);
  background-image: url("./images/heroImg.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  h3 {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    max-width: 30%;
  }
`;

const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap; /* Permite a quebra de linha */
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  /* margin: 0 auto; */
`;