import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "phosphor-react";

const show = {
  opacity: 1,
  display: "block"
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  }
};

export function Card({ title, description, image }) {
  const [isVisible, setIsVisible] = useState(false);

  function checkTextForLineBreak(text) {
    const textWithLinksAndLineBreaks = text.split('\n').map(paragraph => {
      return paragraph
    })
    .join('<br>'); // Adiciona quebras de linha.
  
    return <p dangerouslySetInnerHTML={{ __html: textWithLinksAndLineBreaks }} />;
  }

  return (
    <CardContainer image={image}>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="button"
      >
        <div className="controls">
          <div className="bg-fill"></div>
          <h4>{title}</h4>
        </div>
      </motion.button>

      <motion.div className="popup" animate={isVisible ? show : hide} onClick={() => setIsVisible(!isVisible)}>

        <Content>
          <CloseButton onClick={() => setIsVisible(!isVisible)}>
            <X size={20} />
          </CloseButton>
          <img src={image} alt={title} />
          <div className="popup-text">
            <h4>{title}</h4>
            <p>{checkTextForLineBreak(description)}</p>
          </div>
        </Content>
      </motion.div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: calc(33% - 1rem);
  margin-bottom: 1rem;
  /* height: calc((30vw) * 1.17); */
  /* width: 34rem;
  height: 40rem; */

  .button {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden; 
    padding: 4rem 3rem;
    background: ${props => props.theme["inverse-on-surface"]};
    transition: background .3s ease-in-out;
    border-radius: 16px;
    padding-bottom: 100%;

    h4 {
      color: ${props => props.theme["primary"]};
      opacity: 1;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${props => props.image});
      background-size: cover;
      opacity: 0;
      transition: opacity .3s ease-in-out; 
  }

    .controls {
      width: 100%;
      height: 100%;
    }

  }

  .popup {
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0; /* top, bottom, right e left = 0 */
    background: rgba(0, 0, 0, 0.75);
    z-index: 900;
  }

  &:hover {
    cursor: pointer;
    .button {
      background: ${props => props.theme["inverse-on-surface"]};

      &:before {
        opacity: 0.5; /* Define a opacidade durante a transição */
      }
    }
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  min-width: 32rem;
  width: 70vw;
  max-width: 89rem;
  height: 70vh;
  border-radius: 16px;
  padding: 4rem 3rem;
  background: ${props => props.theme['inverse-on-surface']};

  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 35rem;
    height: 100%;
    max-width: 30rem;
    border-radius: 8px;
  }

  .popup-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 3rem;

    h4 {
      color: ${props => props.theme['primary']};
    }
  }

  @media (max-width: 1024px) {
    min-width: 90vw;
    padding: 1.5rem 1rem;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  background: ${props => props.theme['primary']};
  border-radius: 100%;
  border: 0;
  top: 4rem;
  right: 3rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['inverse-on-surface']};
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  &:hover {
    opacity: 0.7;
  }
`;