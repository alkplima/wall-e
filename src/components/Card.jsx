import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);

  return (
    <CardContainer image={image}>
      <div className="controls">
        <div className="bg-fill"></div>
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
        >
          <h2>{title}</h2>

        </motion.button>
      </div>

      <motion.div className="popup" animate={isVisible ? show : hide}>

      </motion.div>
    </CardContainer>
  );
}

const CardContainer = styled.div`

  width: 34rem;
  height: 40rem;

  .controls {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: ${props => props.theme["inverse-on-surface"]};
    transition: all .3s ease-in-out;

    .bg-fill {
      
    }

    button {
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
      padding: 4rem 3rem;

      h2 {
        z-index: 100;
        color: ${props => props.theme["primary"]};
      }
    }
  }

  .popup {
    background-color: blue;
    width: 100%;
    height: 100%;
  }

  &:hover {
    .controls {
      background: url(${props => props.image});
    }
  }
`;
