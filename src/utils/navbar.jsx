import uniqueId from "../hooks/useId"
import Game from "../pages/gane/index"; 
import Play from "../pages/play/index"; 
import NotPage from "../pages/notFound/index"



export const navbar = [
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/en/game",
        element: <Game/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/uz/game",
        element: <Game/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/jp/game",
        element: <Game/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/ru/game",
        element: <Game/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/en/play",
        element: <Play/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/uz/play",
        element: <Play/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/jp/play",
        element: <Play/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Alliance of Legends",
        path: "/ru/play",
        element: <Play/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "",
        path: "*",
        element: <NotPage/>,
        private: false,
        hidden: false,
    }
]
