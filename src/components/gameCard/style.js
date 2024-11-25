import styled from "styled-components";

export const OpenAppCardBg = styled.div`
  width: 300px;
  height: 420px;
  background-color: var(--bgWrapperOnly);
  backdrop-filter: blur(3px);
  position: absolute;
  display: flex;
  z-index: 9999999999;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  border-radius: 15px;
  box-shadow: var(--bgWrapperOnly) 0px 2px 4px, var(--bgWrapperOnly) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const OpenCardIconWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

export const OpenCardIcon = styled.div`
  width: 160px;
  height: 160px;
  position: absolute;
  background-image: url("/logo.jpg");
  background-position: center;
  background-size: cover;
  background-color: black;
  border: 1px solid gray;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
  overflow: hidden;
`;


export const OpenCardNameWrapper = styled.div`
  text-align: center; 
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: start;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 20px;
  color: var(--bgContent);
  letter-spacing: 0.1px;
`;

export const OpenCardInfoWrapper = styled.div`
  text-align: center; 
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: start;
  font-weight: 500;
  font-size: 15px;
  color: var(--txtColor);
  box-sizing: border-box;
  padding: 0 20px;
`;

export const OpenCardButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const OpenCardButtonPlay = styled.button`
  background-color: var(--colorPrimary) !important;
  color: white;
  border: 1px solid var(--colorPrimary) !important;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: var(--bgWrapper) !important;
  }
`;