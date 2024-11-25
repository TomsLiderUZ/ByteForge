import styled from "styled-components";

export const OpenAppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  background-image: url("../assets/img/gif_openAppBg.gif");
  background-position: center;
  background-size: cover;
  background-color: black;
`;

export const OpenAppBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(3px);

  &::-webkit-scrollbar {
  width: 4px;
  } 
  &::-webkit-scrollbar-track {
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: transparent;
  }  
  &::-webkit-scrollbar-thumb {
    background: var(--txtColor);  
    transition: 1s all;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;    
    background: var(--colorPrimary); 
}
`;