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
            <Card key={key} title={card.title} description={card.description} image={card.image} image_mobile={card.image_mobile} />
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

  @media (max-width: 1024px) {
    padding: 4.5rem 1rem;
  }
`;


const Hero = styled.section`
  width: calc(100vw - 13rem);
  height: calc((100vw - 13rem) * 0.51);
  background-image: url("./images/heroImg.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  border-radius: 16px;

  h3 {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    max-width: 30%;
  }

  @media (max-width: 1024px) {
    width: calc(100vw - 2rem);
    height: calc((100vw - 2rem) * 1.4);
    background-image: url("./images/heroImg_mobile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;

    h3 {
      font-size: 2rem;
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: -10rem;
      left: 0;
      max-width: 100vw;
    }
  }
`;

const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap; /* Permite a quebra de linha */
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;