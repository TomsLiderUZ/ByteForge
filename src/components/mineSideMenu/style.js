import styled from "styled-components";

export const MineSideMenuWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: start;
  position: fixed;
  /* background-color: red; */
  z-index: 99999;
  right: 0;
  margin-right: 10px;
`;
export const MineSideMenuBg = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: right;
  align-items: start;
  flex-wrap: wrap;
  row-gap: 1%;
  /* background-color: red; */
  box-sizing: border-box;
  padding: 30px 10px 0 0;

  #LangConectionSideMenu{
    margin-bottom: 30px;
  }
`;

export const SideMenuRow = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: right;
  align-items: center;
  /* background-color: green; */
`;

export const SideMenuIconBg = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  cursor: pointer;
  color: white;
  font-size: 15px;
  border-radius: 5000px;
  border: 2px solid white;
  font-weight: 700;
  /* box-shadow: 0px 0px 5px 1px white, inset 0px 0px 5px 1px white; */
  /* background-color: var(--bgWrapperOnly); */
  transition: all 0.6s ease-in-out;


  a{
    width: inherit;
    height: inherit;
    position: absolute;
    z-index: 99999;
    color: white;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .SideMenuIcon{
    font-size: 20px !important;
  }

  &::after{
    content: "";
    width: 35px;
    height: 35px;
    transform: rotate(45deg);
    position: absolute;
    border: 2px solid white;
    transition: all 0.8s ease-in-out;
  }

  &::before{
    content: "";
    width: 35px;
    height: 35px;
    position: absolute;
    transform: rotate(0);
    border: 2px solid white;
    transition: all 0.7s ease-in-out;
  }

  &:hover{
    filter: drop-shadow(0px 0px 1px white);
  }

  &:hover::after{
    box-shadow: 0px 0px 2px 1px white, inset 0px 0px 2px 1px white; 
    transform: rotate(270deg); 
  }
  &:hover::before{
    box-shadow: 0px 0px 2px 1px white, inset 0px 0px 2px 1px white;
    transform: rotate(225deg); 
  }

  &:focus{
    filter: drop-shadow(0px 0px 1px white);
  }

  &:focus::after{
    box-shadow: 0px 0px 2px 1px white, inset 0px 0px 2px 1px white; 
    transform: rotate(270deg); 
  }
  &:focus::before{
    box-shadow: 0px 0px 2px 1px white, inset 0px 0px 2px 1px white;
    transform: rotate(225deg); 
  }

  &:hover #SideMenuLangsWrapper{
    width: 180px;
    margin-left: -180px;
    filter: drop-shadow(0px 0px 5px white);
    border-color: white;
    opacity: 1;
  }

  &:focus #SideMenuLangsWrapper{
    width: 180px;
    margin-left: -180px;
    filter: drop-shadow(0px 0px 5px white);
    border-color: white;
    opacity: 1;
  }
`;


export const SideMenuLangsWrapper = styled.div`
  width: 0px;
  height: 39px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute; 
  border: 2px solid transparent;
  border-right: 0px;
  border-radius: 5000px 0 0 5000px;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  margin-left: 0;
  opacity: 0;
  box-sizing: border-box;
  padding: 0 30px 0 0;
  gap: 15px;
`;

export const SideMenuLangCard = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 15px;
  border: 2px solid white;
  font-weight: 700;
  border-radius: 5000px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: black;

  &:hover{
    background-color: white;
    color: black;
  }
`;