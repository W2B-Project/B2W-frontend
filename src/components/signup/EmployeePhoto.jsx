
function EmployeePhoto({isSelected}) {
    const fillColor = isSelected ? "#7F00FF" : "#75757b";

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="150" viewBox="0 0 135 150" fill="none">
            <path d="M20.6811 36.5522C17.2444 42.5658 21.5396 46.8612 25.8351 46.0021" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M75.6608 39.9883C75.6608 41.7064 74.8017 46.0018 69.6473 46.0018M68.7881 46.8609C66.2109 65.7606 33.566 74.3514 26.6934 48.5791" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M73.943 33.1169C79.0975 -2.96449 43.0163 -1.24718 30.9893 9.06253C26.1212 8.77661 18.1029 12.498 23.2578 33.1158" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M31.8481 21.0889C37.0026 26.2433 45.5934 32.2569 64.4931 27.9615" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M65.9507 27.9609L68.7888 34.8336" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M68.7886 34.834C71.0794 34.834 75.6612 35.8649 75.6612 39.9884" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <ellipse cx="68.9723" cy="46.1255" rx="1.82098" ry="1.45122" transform="rotate(-45.4525 68.9723 46.1255)" fill={fillColor}/>
            <mask id="path-8-inside-1_1261_6139" fill="white">
            <ellipse cx="29.3369" cy="37.282" rx="2.65049" ry="2.109" transform="rotate(134.547 29.3369 37.282)"/>
            </mask>
            <ellipse cx="29.3369" cy="37.282" rx="2.65049" ry="2.109" transform="rotate(134.547 29.3369 37.282)" fill={fillColor}/>
            <path d="M30.2836 36.3203C30.8959 36.923 30.9755 37.6302 30.9372 37.9923C30.8998 38.3455 30.7598 38.5321 30.6845 38.6086L24.9832 32.9966C23.0386 34.9721 21.6939 39.0906 24.6716 42.0216L30.2836 36.3203ZM30.6845 38.6086C30.6093 38.685 30.4249 38.8279 30.0724 38.8709C29.7109 38.9149 29.0026 38.8465 28.3902 38.2438L34.0022 32.5424C31.0245 29.6114 26.9278 31.021 24.9832 32.9966L30.6845 38.6086ZM28.3902 38.2438C27.7778 37.641 27.6983 36.9339 27.7366 36.5717C27.774 36.2186 27.914 36.0319 27.9892 35.9555L33.6906 41.5675C35.6351 39.592 36.9799 35.4734 34.0022 32.5424L28.3902 38.2438ZM27.9892 35.9555C28.0645 35.879 28.2489 35.7361 28.6014 35.6932C28.9629 35.6491 29.6712 35.7175 30.2836 36.3203L24.6716 42.0216C27.6492 44.9526 31.746 43.543 33.6906 41.5675L27.9892 35.9555Z" fill={fillColor} mask="url(#path-8-inside-1_1261_6139)"/>
            <mask id="path-10-inside-2_1261_6139" fill="white">
            <ellipse cx="26.8676" cy="47.7382" rx="1.55762" ry="3.17629" transform="rotate(161.823 26.8676 47.7382)"/>
            </mask>
            <ellipse cx="26.8676" cy="47.7382" rx="1.55762" ry="3.17629" transform="rotate(161.823 26.8676 47.7382)" fill={fillColor}/>
            <path d="M29.1881 46.9762C29.0629 46.5949 29.0949 46.4094 29.0821 46.5008C29.0757 46.5467 29.034 46.8301 28.8056 47.2095C28.5598 47.6179 28.0334 48.2224 27.1246 48.5208L24.6289 40.92C21.9664 41.7942 21.3083 44.3244 21.1589 45.395C20.9692 46.7544 21.1653 48.1866 21.5874 49.4719L29.1881 46.9762ZM27.1246 48.5208C26.2158 48.8192 25.4335 48.6444 24.9934 48.4612C24.5846 48.291 24.383 48.0875 24.3506 48.0544C24.2862 47.9883 24.4219 48.1187 24.5471 48.5001L32.1479 46.0044C31.7259 44.7191 31.0348 43.4494 30.0762 42.467C29.3212 41.6934 27.2914 40.0458 24.6289 40.92L27.1246 48.5208ZM24.5471 48.5001C24.6723 48.8815 24.6404 49.0669 24.6531 48.9755C24.6595 48.9297 24.7012 48.6462 24.9296 48.2668C25.1754 47.8585 25.7018 47.254 26.6106 46.9556L29.1063 54.5563C31.7688 53.6821 32.4269 51.1519 32.5763 50.0814C32.766 48.7219 32.5699 47.2897 32.1479 46.0044L24.5471 48.5001ZM26.6106 46.9556C27.5195 46.6571 28.3018 46.8319 28.7418 47.0151C29.1506 47.1853 29.3522 47.3888 29.3846 47.422C29.449 47.488 29.3133 47.3576 29.1881 46.9762L21.5874 49.4719C22.0094 50.7572 22.7004 52.027 23.6591 53.0093C24.414 53.7829 26.4438 55.4305 29.1063 54.5563L26.6106 46.9556Z" fill={fillColor} mask="url(#path-10-inside-2_1261_6139)"/>
            <mask id="path-12-inside-3_1261_6139" fill="white">
            <path d="M27.0563 47.0058C27.0767 47.0037 27.0997 47.0287 27.1239 47.0793C27.1481 47.1299 27.1731 47.2051 27.1974 47.3007C27.2218 47.3963 27.245 47.5103 27.2657 47.6363C27.2865 47.7623 27.3044 47.8978 27.3184 48.035C27.3324 48.1723 27.3423 48.3086 27.3474 48.4362C27.3525 48.5637 27.3529 48.6801 27.3483 48.7786C27.3438 48.8772 27.3345 48.9559 27.321 49.0103C27.3075 49.0648 27.2901 49.0939 27.2697 49.0959L27.163 48.0509L27.0563 47.0058Z"/>
            </mask>
            <path d="M27.0563 47.0058C27.0767 47.0037 27.0997 47.0287 27.1239 47.0793C27.1481 47.1299 27.1731 47.2051 27.1974 47.3007C27.2218 47.3963 27.245 47.5103 27.2657 47.6363C27.2865 47.7623 27.3044 47.8978 27.3184 48.035C27.3324 48.1723 27.3423 48.3086 27.3474 48.4362C27.3525 48.5637 27.3529 48.6801 27.3483 48.7786C27.3438 48.8772 27.3345 48.9559 27.321 49.0103C27.3075 49.0648 27.2901 49.0939 27.2697 49.0959L27.163 48.0509L27.0563 47.0058Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-12-inside-3_1261_6139)"/>
            <mask id="path-13-inside-4_1261_6139" fill="white">
            <path d="M27.8035 46.0597C27.6652 46.0573 27.528 46.0689 27.3997 46.0937C27.2714 46.1185 27.1547 46.156 27.056 46.2042C26.9573 46.2524 26.8787 46.3103 26.8247 46.3745C26.7706 46.4388 26.7422 46.5081 26.7409 46.5786C26.7397 46.6492 26.7658 46.7195 26.8176 46.7855C26.8694 46.8516 26.946 46.9121 27.0429 46.9637C27.1399 47.0152 27.2553 47.0568 27.3827 47.086C27.51 47.1151 27.6467 47.1314 27.7851 47.1338L27.7943 46.5967L27.8035 46.0597Z"/>
            </mask>
            <path d="M27.8035 46.0597C27.6652 46.0573 27.528 46.0689 27.3997 46.0937C27.2714 46.1185 27.1547 46.156 27.056 46.2042C26.9573 46.2524 26.8787 46.3103 26.8247 46.3745C26.7706 46.4388 26.7422 46.5081 26.7409 46.5786C26.7397 46.6492 26.7658 46.7195 26.8176 46.7855C26.8694 46.8516 26.946 46.9121 27.0429 46.9637C27.1399 47.0152 27.2553 47.0568 27.3827 47.086C27.51 47.1151 27.6467 47.1314 27.7851 47.1338L27.7943 46.5967L27.8035 46.0597Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-13-inside-4_1261_6139)"/>
            <mask id="path-14-inside-5_1261_6139" fill="white">
            <path d="M25.6129 50.1877C25.7015 50.1613 25.7787 50.0995 25.8399 50.0059C25.9012 49.9122 25.9454 49.7885 25.9699 49.6419C25.9945 49.4952 25.999 49.3285 25.9831 49.1511C25.9672 48.9738 25.9313 48.7894 25.8774 48.6083C25.8235 48.4273 25.7527 48.2533 25.669 48.0962C25.5853 47.939 25.4903 47.8019 25.3896 47.6925C25.2888 47.5832 25.1842 47.5038 25.0816 47.4589C24.9791 47.414 24.8808 47.4045 24.7921 47.4309L25.2025 48.8093L25.6129 50.1877Z"/>
            </mask>
            <path d="M25.6129 50.1877C25.7015 50.1613 25.7787 50.0995 25.8399 50.0059C25.9012 49.9122 25.9454 49.7885 25.9699 49.6419C25.9945 49.4952 25.999 49.3285 25.9831 49.1511C25.9672 48.9738 25.9313 48.7894 25.8774 48.6083C25.8235 48.4273 25.7527 48.2533 25.669 48.0962C25.5853 47.939 25.4903 47.8019 25.3896 47.6925C25.2888 47.5832 25.1842 47.5038 25.0816 47.4589C24.9791 47.414 24.8808 47.4045 24.7921 47.4309L25.2025 48.8093L25.6129 50.1877Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-14-inside-5_1261_6139)"/>
            <ellipse cx="65.7442" cy="27.8342" rx="1.69185" ry="1.57444" transform="rotate(26.5911 65.7442 27.8342)" fill={fillColor}/>
            <ellipse cx="64.9083" cy="27.6345" rx="1.44525" ry="1.16014" transform="rotate(26.5911 64.9083 27.6345)" fill={fillColor}/>
            <mask id="path-17-inside-6_1261_6139" fill="white">
            <path d="M75.8653 33.7031C75.5885 33.5656 75.3062 33.4643 75.0345 33.405C74.7628 33.3457 74.5069 33.3294 74.2816 33.3573C74.0562 33.3851 73.8658 33.4564 73.7212 33.5671C73.5765 33.6778 73.4805 33.8258 73.4385 34.0026C73.3966 34.1794 73.4096 34.3815 73.4767 34.5974C73.5439 34.8133 73.6639 35.0388 73.8299 35.261C73.996 35.4832 74.2048 35.6978 74.4444 35.8924C74.684 36.0871 74.9498 36.258 75.2265 36.3954L75.5459 35.0493L75.8653 33.7031Z"/>
            </mask>
            <path d="M75.8653 33.7031C75.5885 33.5656 75.3062 33.4643 75.0345 33.405C74.7628 33.3457 74.5069 33.3294 74.2816 33.3573C74.0562 33.3851 73.8658 33.4564 73.7212 33.5671C73.5765 33.6778 73.4805 33.8258 73.4385 34.0026C73.3966 34.1794 73.4096 34.3815 73.4767 34.5974C73.5439 34.8133 73.6639 35.0388 73.8299 35.261C73.996 35.4832 74.2048 35.6978 74.4444 35.8924C74.684 36.0871 74.9498 36.258 75.2265 36.3954L75.5459 35.0493L75.8653 33.7031Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-17-inside-6_1261_6139)"/>
            <mask id="path-18-inside-7_1261_6139" fill="white">
            <path d="M72.4253 31.3688C72.342 31.4317 72.2619 31.5583 72.1896 31.7415C72.1172 31.9247 72.0541 32.1608 72.0038 32.4364C71.9535 32.712 71.9169 33.0217 71.8963 33.3478C71.8756 33.6739 71.8713 34.01 71.8834 34.337C71.8956 34.6639 71.9241 34.9753 71.9672 35.2533C72.0103 35.5313 72.0673 35.7704 72.1348 35.9572C72.2023 36.1439 72.2791 36.2745 72.3607 36.3416C72.4424 36.4086 72.5273 36.4108 72.6106 36.3479L72.518 33.8584L72.4253 31.3688Z"/>
            </mask>
            <path d="M72.4253 31.3688C72.342 31.4317 72.2619 31.5583 72.1896 31.7415C72.1172 31.9247 72.0541 32.1608 72.0038 32.4364C71.9535 32.712 71.9169 33.0217 71.8963 33.3478C71.8756 33.6739 71.8713 34.01 71.8834 34.337C71.8956 34.6639 71.9241 34.9753 71.9672 35.2533C72.0103 35.5313 72.0673 35.7704 72.1348 35.9572C72.2023 36.1439 72.2791 36.2745 72.3607 36.3416C72.4424 36.4086 72.5273 36.4108 72.6106 36.3479L72.518 33.8584L72.4253 31.3688Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-18-inside-7_1261_6139)"/>
            <mask id="path-19-inside-8_1261_6139" fill="white">
            <path d="M67.0405 26.4548C66.9859 26.3418 66.8966 26.2402 66.7776 26.1559C66.6587 26.0715 66.5125 26.0061 66.3473 25.9632C66.1822 25.9203 66.0014 25.9009 65.8152 25.906C65.629 25.9111 65.4411 25.9407 65.2621 25.993C65.0832 26.0454 64.9168 26.1194 64.7724 26.211C64.628 26.3026 64.5085 26.4099 64.4206 26.5268C64.3327 26.6437 64.2782 26.7679 64.2602 26.8923C64.2422 27.0167 64.2611 27.1389 64.3157 27.2518L65.6781 26.8533L67.0405 26.4548Z"/>
            </mask>
            <path d="M67.0405 26.4548C66.9859 26.3418 66.8966 26.2402 66.7776 26.1559C66.6587 26.0715 66.5125 26.0061 66.3473 25.9632C66.1822 25.9203 66.0014 25.9009 65.8152 25.906C65.629 25.9111 65.4411 25.9407 65.2621 25.993C65.0832 26.0454 64.9168 26.1194 64.7724 26.211C64.628 26.3026 64.5085 26.4099 64.4206 26.5268C64.3327 26.6437 64.2782 26.7679 64.2602 26.8923C64.2422 27.0167 64.2611 27.1389 64.3157 27.2518L65.6781 26.8533L67.0405 26.4548Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-19-inside-8_1261_6139)"/>
            <mask id="path-20-inside-9_1261_6139" fill="white">
            <path d="M67.0054 26.3644C66.922 26.2457 66.7769 26.1432 66.5783 26.0628C66.3797 25.9823 66.1315 25.9256 65.8479 25.8957C65.5643 25.8659 65.2509 25.8635 64.9255 25.8887C64.6002 25.914 64.2692 25.9663 63.9516 26.0428C63.634 26.1193 63.3359 26.2185 63.0743 26.3346C62.8128 26.4507 62.5929 26.5815 62.4273 26.7195C62.2617 26.8576 62.1536 27.0002 62.1091 27.1391C62.0646 27.2781 62.0846 27.4107 62.168 27.5295L64.5867 26.9469L67.0054 26.3644Z"/>
            </mask>
            <path d="M67.0054 26.3644C66.922 26.2457 66.7769 26.1432 66.5783 26.0628C66.3797 25.9823 66.1315 25.9256 65.8479 25.8957C65.5643 25.8659 65.2509 25.8635 64.9255 25.8887C64.6002 25.914 64.2692 25.9663 63.9516 26.0428C63.634 26.1193 63.3359 26.2185 63.0743 26.3346C62.8128 26.4507 62.5929 26.5815 62.4273 26.7195C62.2617 26.8576 62.1536 27.0002 62.1091 27.1391C62.0646 27.2781 62.0846 27.4107 62.168 27.5295L64.5867 26.9469L67.0054 26.3644Z" fill={fillColor} stroke={fillColor} strokeWidth="8" mask="url(#path-20-inside-9_1261_6139)"/>
            <path d="M33.5289 33.1159C30.485 36.2939 29.724 37.0885 29.724 37.0885" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M28.4119 37.4113C25.8346 35.6932 23.2574 33.9756 20.6802 36.5523" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M4.3578 136.205L2.63965 89.8145" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M17.2441 136.205V100.983" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M41.2979 136.205L43.016 88.0972" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M54.1842 136.205L51.6069 87.2373" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M65.3525 115.587V141.36" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M130.642 117.305V141.359" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M68.7886 96.687H128.065" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M91.1245 84.6606H104.87" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M110.024 119.023H118.615" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M65.3525 141.36C65.3525 143.937 66.3834 147.373 70.507 147.373" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M63.6343 102.701C63.6343 100.124 64.6652 96.6876 68.7887 96.6876" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M132.36 102.701C132.36 100.124 131.329 96.6876 127.206 96.6876" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M86.8296 90.6738C86.8296 88.0966 87.0014 84.6603 91.125 84.6603" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M110.024 90.6738C110.024 88.0966 109.853 84.6603 105.729 84.6603" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M130.642 141.36C130.642 143.937 129.611 147.373 125.488 147.373" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M71.3657 147.373H125.488" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M86.8296 96.6871C86.8296 91.8762 86.8296 90.1008 86.8296 89.8145" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M110.024 96.6874V90.6738" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M63.6343 102.701V111.292" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M132.36 102.701V111.292" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M86.8292 119.023H77.3794" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M75.6614 122.46C69.6478 120.742 63.6343 113.354 63.6343 111.292" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M120.333 122.46C126.347 120.742 132.36 113.354 132.36 111.292" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M31.8484 59.627V67.479M30.1302 67.479L24.1167 73.4925" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M61.9158 60.127V67.479M63.6339 67.479L69.6475 73.4925" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M24.1167 74.3516L34.4256 88.9559" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M70.5068 74.3516L60.1979 88.9559" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M30.9893 67.479L55.0434 89.815" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M43.0161 93.251H51.6069" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M39.5798 89.8146C38.7207 90.6737 35.2844 90.6737 34.4253 88.9556" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M55.0438 89.8146C55.9029 90.6737 59.3392 90.6737 60.1982 88.9556" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M63.6343 67.479L39.5801 89.815" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M24.1164 73.4922L7.79395 80.3648" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M70.5066 74.3516L82.5337 79.506" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M77.3794 128.473C77.3794 121.6 77.3794 119.882 77.3794 119.882" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M77.3794 128.473C77.3794 121.6 77.3794 119.882 77.3794 119.882" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M110.024 128.473C110.024 121.6 110.024 119.882 110.024 119.882" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M86.8296 119.023V128.473" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M88.5474 125.896C92.27 126.755 101.434 126.755 102.293 126.755" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M119.474 119.023V128.473" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M77.3794 128.473C77.3794 130.191 83.3929 134.487 86.8292 128.473" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M110.024 128.473C110.024 130.191 116.038 134.487 119.474 128.473" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M7.79411 80.3652C6.07596 81.5107 2.63965 85.1761 2.63965 90.6742" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            <path d="M5.21729 84.6606C6.64908 86.9515 18.1034 94.9696 17.2444 101.842" stroke={fillColor} strokeWidth="4" strokeLinecap="round"/>
            </svg>
        </div>
    )
}

export default EmployeePhoto
