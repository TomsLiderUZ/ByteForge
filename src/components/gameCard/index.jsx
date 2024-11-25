import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  OpenAppCardBg,
  OpenCardIconWrapper,
  OpenCardIcon,
  OpenCardNameWrapper,
  OpenCardInfoWrapper,
  OpenCardButtonWrapper,
  OpenCardButtonPlay,
} from "./style";

function GameCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cardGameName, setDardGameName] = useState("ByteForge");
  const [GameGetInfo, setGameGetInfo] = useState(false);


  let cardInfo;
  let buttonText;

  if (location.pathname.startsWith("/uz/")) {
    cardInfo =
      "Anime qahramonlaringiz bilan kuchli yovuz kuchlarga qarshi kurashib, uyga qaytish yo'lini toping!";
    buttonText = "O'YNASH";
  } else if (location.pathname.startsWith("/en/")) {
    cardInfo =
      "Fight powerful evil forces with your favorite anime characters to find your way home!";
    buttonText = "PLAY";
  } else if (location.pathname.startsWith("/jp/")) {
    cardInfo =
      "お気に入りのアニメキャラクターと一緒に悪の力と戦い、帰る道を見つけましょう！";
    buttonText = "プレイ";
  } else if (location.pathname.startsWith("/ru/")) {
    cardInfo =
      "Сражайтесь с злыми силами и найдите путь домой с любимыми аниме-персонажами!";
    buttonText = "ИГРАТЬ";
  } else {
    cardInfo = "Welcome to the game!";
    buttonText = "PLAY";
  }


  const generateRandomId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 50;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  
  const GameGet = () => {
    setGameGetInfo(true);
    const randomId = generateRandomId();
    navigate(`?play=${randomId}`);
  };

  return (
    <OpenAppCardBg>
      <OpenCardIconWrapper>
        <OpenCardIcon />
      </OpenCardIconWrapper>
      <OpenCardNameWrapper>{cardGameName}</OpenCardNameWrapper>
      <OpenCardInfoWrapper>{cardInfo}</OpenCardInfoWrapper>
      <OpenCardButtonWrapper>
        <OpenCardButtonPlay onClick={GameGet}>{buttonText}</OpenCardButtonPlay>
      </OpenCardButtonWrapper>
    </OpenAppCardBg>
  );
}

export default GameCard;
