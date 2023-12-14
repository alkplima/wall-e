import { useTheme } from "../contexts/ThemeContext";
import styled from "styled-components";


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleWrapper onClick={toggleTheme}>
        <button className={`${theme.mode}-btn`}>
          <span className={`${theme.mode}-slider`}></span>
        </button>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 10rem;

  button {
    background-color: ${props => props.theme['surface-variant']};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    width: 4em;
    height: 2.25em;
    font-size: 1em; 
    cursor: pointer;
    border-radius: 50px;
    

    .light-slider {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-1.85em) translateY(-50%);
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }

    .dark-slider {
      background-color: ${props => props.theme['primary']};
    }

    .dark-slider::before, .light-slider::before{
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      transition: 0.3s;
    }

    .light-slider::before {
      transform: translateX(-0.2em) translateY(-50%);
      background-color: ${props => props.theme['primary']};
      box-shadow: none;
    }
    
    .dark-slider::before {
      transform: translateX(-1.65em) translateY(-50%);
      background-color: ${props => props.theme['surface-variant']};
      box-shadow: inset 0.750em -0.125em 0 0 ${props => props.theme['primary']};
    }
  }
  @media (max-width: 1024px) {
    right: 1rem;
  }
`;