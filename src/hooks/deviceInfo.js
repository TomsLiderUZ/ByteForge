// DeviceInfo.js
import { useEffect, useState } from 'react';

const DeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState(null); // Boshlanishda null

    useEffect(() => {
        const userAgent = window.navigator.userAgent;

        // Brauzer haqida ma'lumot olish
        const getBrowserInfo = () => {
            let browserName = 'none';
            let fullVersion = 'none';
            let architecture = 'none';

            if (userAgent.includes("Firefox")) {
                browserName = "Firefox";
                fullVersion = userAgent.split("Firefox/")[1];
            } else if (userAgent.includes("Chrome")) {
                if (userAgent.includes("Edg/")) {
                    browserName = "Edge"; // Edge
                    fullVersion = userAgent.split("Edg/")[1].split(" ")[0];
                } else if (userAgent.includes("OPR")) {
                    browserName = "Opera"; // Opera
                    fullVersion = userAgent.split("OPR/")[1].split(" ")[0];
                } else if (userAgent.includes("Brave")) {
                    browserName = "Brave"; // Brave
                    fullVersion = userAgent.split("Chrome/")[1].split(" ")[0];
                } else if (userAgent.includes("Vivaldi")) {
                    browserName = "Vivaldi"; // Vivaldi
                    fullVersion = userAgent.split("Vivaldi/")[1].split(" ")[0];
                } else if (userAgent.includes("YaBrowser")) {
                    browserName = "Yandex Browser"; // Yandex Browser
                    fullVersion = userAgent.split("YaBrowser/")[1].split(" ")[0];
                } else {
                    browserName = "Chrome"; // Chrome
                    fullVersion = userAgent.split("Chrome/")[1].split(" ")[0];
                }
            } else if (userAgent.includes("Safari")) {
                if (userAgent.includes("DuckDuckGo")) {
                    browserName = "DuckDuckGo"; // DuckDuckGo
                    fullVersion = userAgent.split("DuckDuckGo/")[1].split(" ")[0];
                } else if (userAgent.includes("SamsungBrowser")) {
                    browserName = "Samsung Internet"; // Samsung Internet
                    fullVersion = userAgent.split("SamsungBrowser/")[1].split(" ")[0];
                } else {
                    browserName = "Safari";
                    fullVersion = userAgent.split("Version/")[1].split(" ")[0];
                }
            } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
                browserName = "Internet Explorer";
                fullVersion = userAgent.includes("MSIE") ? userAgent.split("MSIE ")[1].split(";")[0] : userAgent.split("rv:")[1].split(")")[0];
            } else if (userAgent.includes("UCBrowser")) {
                browserName = "UC Browser";
                fullVersion = userAgent.split("UCBrowser/")[1].split(" ")[0];
            }

            // Brauzer bitligini aniqlash
            architecture = userAgent.includes('WOW64') || userAgent.includes('Win64') ? '64-bit' : '32-bit';

            return {
                name: browserName,
                version: fullVersion,
                architecture: architecture,
            };
        };
        console.log(userAgent);
        
        // Operating System aniqlash
        const getOSInfo = () => {
            let osName = 'none';
            let architecture = 'none';
            const versionMatch = userAgent.match(/Windows NT (\d+\.\d+)/);
            if (versionMatch) {
                const ver = parseFloat(versionMatch[1]);
                switch (ver) {
                    default: osName = `Windows ${ver}`;
                }
            }

            // Qurilma bitligini aniqlash
            architecture = userAgent.includes('WOW64') || userAgent.includes('Win64') ? '64-bit' : '32-bit';
            
            return { name: osName, architecture };
        };
        console.log(navigator);
        
        // RAM ni olish
        const getRamInfo = () => {
            const totalRam = navigator.deviceMemory || 'none'; // RAMni aniqlash
            const worksRam = totalRam !== 'none' ? `${(totalRam * 0.93).toFixed(2)} GB` : 'none'; // Ishlovchi RAM miqdorini hisoblash
            
            return {
                all: totalRam !== 'none' ? `${totalRam} GB` : 'none',
                works: worksRam,
            };
        };

        // Protsessorni aniqlash
        const getProcessorInfo = () => {
            const cores = navigator.hardwareConcurrency || 'none'; // Yadro soni
            return {
                type: 'none',
                version: 'none',
                other: 'none',
                core: cores.toString(),
            };
        };

        // IP manzilini olish
        const getIpAddress = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                return data.ip;
            } catch (error) {
                console.error('IP manzilini olishda xato:', error);
                return 'none';
            }
        };

        const fetchData = async () => {
            const ip = await getIpAddress();
            const osInfo = getOSInfo();
            const ramInfo = getRamInfo();
            const browserInfo = getBrowserInfo();
            const processorInfo = getProcessorInfo();

            // Ma'lumotlar to'planganda setDeviceInfo chaqiriladi
            if (osInfo.name !== 'none' && ramInfo.all !== 'none' && browserInfo.name !== 'none' && processorInfo.core !== 'none' && ip !== 'none') {
                setDeviceInfo({
                    os: osInfo,
                    ram: ramInfo,
                    browser: browserInfo,
                    processor: processorInfo,
                    ip: ip,
                });
            }
        };

        fetchData();
    }, []); // [] - faqat bir marta chaqirish uchun

    // Ma'lumotlar tayyor bo'lguncha bo'sh bo'lsa, hech narsa ko'rsatmaymiz
    if (!deviceInfo) return null; // Yoki yuklanmoqda ko'rsatish uchun boshqa bir narsa

    return deviceInfo; // Obyekti qaytaramiz
};

export const useDeviceInfo = () => {
    const deviceInfo = DeviceInfo();
    return deviceInfo;
};

export default DeviceInfo;
