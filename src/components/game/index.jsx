import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OpenAppWrapper, OpenAppBg } from "./style";
import GameCard from "../gameCard/index";
import MineSideMenu from "../mineSideMenu/index";
import GameAppInfo from "../gameAppInfo";
import useTitle from '../../hooks/useTitle';

function Game() {
  const [GameGetUp, setGameGetUp] = useState(false);
  const [GameGetUpLoad, setGameGetUpLoad] = useState(true);
  const [pageTitle, setPageTitle] = useState("Welcome to ByteForge"); // Sahifa sarlavhasi uchun state

  const location = useLocation();
  const navigate = useNavigate();

  useTitle(pageTitle);

  useEffect(() => {
    if (location.search.startsWith("?play")) {
      setPageTitle("Starting ByteForge");
      if (GameGetUpLoad === true) {
        setGameGetUp(true);
        setGameGetUpLoad(false);
        console.log(location.search.split("?play=")[1]);
        console.log(btoa(location.search.split("?play=git ")[1]));
        setTimeout(() => {
          navigate(location.pathname);
        }, 0);
      }
    } else {
      if (GameGetUpLoad === true) {
        setGameGetUp(false);
      } 
    }
  }, [location.search, GameGetUpLoad, navigate]);

  return (
    <OpenAppWrapper>
      <OpenAppBg>{GameGetUp ? <GameAppInfo /> : <GameCard />}</OpenAppBg>
      <MineSideMenu />
    </OpenAppWrapper>
  );
}

export default Game;
