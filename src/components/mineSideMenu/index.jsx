import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import {
  MineSideMenuWrapper,
  SideMenuRow,
  MineSideMenuBg,
  SideMenuIconBg,
  SideMenuLangsWrapper,
  SideMenuLangCard,
} from "./style";

function MineSideMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  const locationPathName = location.pathname
  const locationSearch = location.search
  const locationHash = location.hash

  let locLangInfo;

  if (location.pathname.startsWith("/en/")) {
    locLangInfo = "en";
  } else if (location.pathname.startsWith("/uz/")) {
    locLangInfo = "uz";
  } else if (location.pathname.startsWith("/jp/")) {
    locLangInfo = "jp";
  } else if (location.pathname.startsWith("/ru/")) {
    locLangInfo = "ru";
  } else {
    locLangInfo = "en";
  }

  const funcLangInfoPathName = locationPathName.split(`/${locLangInfo}/`)[1]
  const funcLangInfoSearch = locationSearch === null ? "" : locationSearch
  const funcLangInfoHash = locationHash === null ? "" : locationHash

  

  const getLangUZ = () => navigate(`/uz/${funcLangInfoPathName}${funcLangInfoSearch}${funcLangInfoHash}`);
  const getLangEN = () => navigate(`/en/${funcLangInfoPathName}${funcLangInfoSearch}${funcLangInfoHash}`);
  const getLangJP = () => navigate(`/jp/${funcLangInfoPathName}${funcLangInfoSearch}${funcLangInfoHash}`);
  const getLangRU = () => navigate(`/ru/${funcLangInfoPathName}${funcLangInfoSearch}${funcLangInfoHash}`);

  let langInfo;
  let langTitle_1;
  let langTitle_2;
  let langTitle_3;
  let langTitle_4;
  let lang;
  let languages;

  if (location.pathname.startsWith("/uz/")) {
    langInfo = "UZ";
    lang = "uz";
    languages = [
      { lang: "EN", getLangFunc: getLangEN },
      { lang: "RU", getLangFunc: getLangRU },
      { lang: "JP", getLangFunc: getLangJP },
    ];
    langTitle_1 = `Tilni almashtirish, hozirda 'O'zbek' tili o'rnatilgan.`;
    langTitle_2 = `Qo'shimcha yordam olish, Operator bilan bog'lanish`;
    langTitle_3 = `'Alliance of Legends' haqidagi qaynoq videolarni YouTubeda tomosha qiling.`;
    langTitle_4 = `'Alliance of Legends' bo'layotgan yangiliklarni Telegram orqali kuzatib boring.`;
  } else if (location.pathname.startsWith("/en/")) {
    langInfo = "EN";
    lang = "en";
    languages = [
      { lang: "UZ", getLangFunc: getLangUZ },
      { lang: "RU", getLangFunc: getLangRU },
      { lang: "JP", getLangFunc: getLangJP },
    ];
    langTitle_1 = `Switch language, currently 'English' is selected.`;
    langTitle_2 = `Get additional help, contact the operator.`;
    langTitle_3 = `Watch the hottest videos about 'Alliance of Legends' on YouTube.`;
    langTitle_4 = `Follow the latest updates about 'Alliance of Legends' on Telegram.`;
  } else if (location.pathname.startsWith("/jp/")) {
    langInfo = "JP";
    lang = "ja";
    languages = [
      { lang: "UZ", getLangFunc: getLangUZ },
      { lang: "RU", getLangFunc: getLangRU },
      { lang: "EN", getLangFunc: getLangEN },
    ];
    langTitle_1 = `言語を切り替える、現在「日本語」が選択されています。`;
    langTitle_2 = `追加のヘルプを取得し、オペレーターに連絡する。`;
    langTitle_3 = `YouTubeで**「Alliance of Legends」**に関するホットな動画を視聴してください。`;
    langTitle_4 = `'Alliance of Legends' に関する最新情報をTelegramでフォローしてください。`;
  } else if (location.pathname.startsWith("/ru/")) {
    langInfo = "RU";
    lang = "ru";
    languages = [
      { lang: "UZ", getLangFunc: getLangUZ },
      { lang: "EN", getLangFunc: getLangEN },
      { lang: "JP", getLangFunc: getLangJP },
    ];
    langTitle_1 = `Сменить язык, в настоящее время выбран 'Русский'.`;
    langTitle_2 = `Получить дополнительную помощь, связаться с оператором.`;
    langTitle_3 = `Смотрите самые горячие видео о 'Alliance of Legends' на YouTube.`;
    langTitle_4 = `Следите за новостями о 'Alliance of Legends' через Telegram.`;
  } else {
    langInfo = "EN";
    lang = "en";
    languages = [
      { lang: "UZ", getLangFunc: getLangUZ },
      { lang: "RU", getLangFunc: getLangRU },
      { lang: "JP", getLangFunc: getLangJP },
    ];
    langTitle_1 = `Switch language, currently 'English' is selected.`;
    langTitle_2 = `Get additional help, contact the operator.`;
    langTitle_3 = `Watch the hottest videos about 'Alliance of Legends' on YouTube.`;
    langTitle_4 = `Follow the latest updates about 'Alliance of Legends' on Telegram.`;
  }
  
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <MineSideMenuWrapper>
      <MineSideMenuBg>
        <SideMenuRow id="LangConectionSideMenu">
          <SideMenuIconBg>
            {langInfo}
            <SideMenuLangsWrapper id="SideMenuLangsWrapper">
              {languages.map(({ lang, getLangFunc }, index) => (
                <SideMenuLangCard key={index} onClick={getLangFunc}>
                  {lang}
                </SideMenuLangCard>
              ))}
            </SideMenuLangsWrapper>
          </SideMenuIconBg>
        </SideMenuRow>
        <SideMenuRow>
          <SideMenuIconBg>
            <Link to={"/"} target="_blank">
              <i className="fa-solid fa-headset SideMenuIcon"></i>
            </Link>
          </SideMenuIconBg>
        </SideMenuRow>
        <SideMenuRow>
          <SideMenuIconBg>
            <Link
              to={"https://www.youtube.com/@ByteForge_community"}
              target="_blank"
            >
              <i className="fa-brands fa-youtube SideMenuIcon"></i>
            </Link>
          </SideMenuIconBg>
        </SideMenuRow>
        <SideMenuRow>
          <SideMenuIconBg>
            <Link to={"https://t.me/ByteForge_community"} target="_blank">
              <i className="fa-brands fa-telegram SideMenuIcon"></i>
            </Link>
          </SideMenuIconBg>
        </SideMenuRow>
      </MineSideMenuBg>
    </MineSideMenuWrapper>
  );
}

export default MineSideMenu;
