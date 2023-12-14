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

export function Card({ title, subtitle, description, image, image_mobile }) {
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
          <img className="image_desktop" src={image} alt={title} />
          <img className="image_mobile" src={image_mobile} alt={title} />
          <div className="popup-text">
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
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
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 900;
  }

  &:hover {
    cursor: pointer;
    .button {
      background: ${props => props.theme["inverse-on-surface"]};

      &:before {
        opacity: 0.3; 
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    .button {
      padding: 3rem 1.5rem;
      padding-bottom: 100%;

      &:before {
        opacity: 0.2; 
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

  .image_desktop {
    display: block;
    width: 35rem;
    height: 100%;
    max-width: 30rem;
    border-radius: 8px;
  }

  .image_mobile {
    display: none;
  }

  .popup-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 3rem;

    h4 {
      color: ${props => props.theme['primary']};
    }

    p {
      max-height: 50vh;
      overflow-y: scroll;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 0;
    max-width: none;
    left: 0;
    top: 0;
    transform: none;
    border-radius: 0 !important;
    height: 100%;
    padding: 4rem 1rem 1rem 1rem;
    flex-direction: column;

    .image_desktop {
      display: none;
    }

    .image_mobile {
      display: block;
      width: calc(100vw - 2rem);
      height: calc((100vw - 2rem) * 0.58);
      border-radius: 8px;
      object-fit: cover;
      overflow: hidden;
    }

    .popup-text {
      padding-right: 0;
    }
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

  @media (max-width: 1024px) {
    top: 1rem;
    right: 1rem;
  }
`;