import styled from "styled-components";

export const GameAppInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const GameAppInfoLoaderBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const GameAppInfoLoader = styled.div`
  width: 10%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url("../assets/icon/tube-spinner.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* background-color: red; */
`;