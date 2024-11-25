import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceInfo } from "../../hooks/deviceInfo";
import {
  GameAppInfoWrapper,
  GameAppInfoLoaderBg,
  GameAppInfoLoader,
} from "./style";
function GameAppInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [locLang, setLocLang] = useState("en");
  const [GameThisDeviceCode, setGameThisDeviceCode] = useState("A00o00F");
  const [GameThisDevice, setGameThisDevice] = useState("");

  const deviceInfo = useDeviceInfo();

  useEffect(() => {
    if (deviceInfo && typeof deviceInfo === "object") {
      const filteredDeviceInfo = Object.entries(deviceInfo).reduce(
        (acc, [key, value]) => {
          if (value !== "none" && value !== null) {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );
      if (Object.keys(filteredDeviceInfo).length > 0) {
        console.log(filteredDeviceInfo);
      }
    }
  }, [deviceInfo]);

  useEffect(() => {
    if (GameThisDeviceCode === "A00o00F") {
      
      console.log(`Device code: ${GameThisDeviceCode}`);
    } else if (GameThisDeviceCode === "A10o11F") {
      console.log(`Device code: ${GameThisDeviceCode}`);
    } else if (GameThisDeviceCode === "A63o33F") {
      console.log(`Device code: ${GameThisDeviceCode}`);
    } else {
      console.log("Other device code");
    }
  }, [GameThisDeviceCode]);

  useEffect(() => {
    let currentLang;

    if (location.pathname.startsWith("/uz/")) {
      currentLang = "uz";
    } else if (location.pathname.startsWith("/en/")) {
      currentLang = "en";
    } else if (location.pathname.startsWith("/jp/")) {
      currentLang = "jp";
    } else if (location.pathname.startsWith("/ru/")) {
      currentLang = "ru";
    } else {
      currentLang = "en";
    }

    setLocLang(currentLang);
  }, [location.pathname]);

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
  const randomId = generateRandomId();

  const GameGet = () => {
    navigate(`/${locLang}/play?code=${randomId}`);
  };

  return (  
    <GameAppInfoWrapper>
      <GameAppInfoLoaderBg>
        <GameAppInfoLoader />
      </GameAppInfoLoaderBg>
    </GameAppInfoWrapper>
  );
}

export default GameAppInfo;
