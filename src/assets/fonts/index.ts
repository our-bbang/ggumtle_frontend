import { createGlobalStyle } from 'styled-components';
<<<<<<< HEAD

=======
>>>>>>> 7dd955e (chore: assets/fonts 폴더 구조 정리)
import PretendardRegular from './pretendard/Pretendard-Regular.woff2';
import PretendardBold from './pretendard/Pretendard-Bold.woff2';
import PretendardSemiBold from './pretendard/Pretendard-SemiBold.woff2';
import PretendardMedium from './pretendard/Pretendard-Medium.woff2';
import PretendardExtraBold from './pretendard/Pretendard-ExtraBold.woff2';
<<<<<<< HEAD

import OngothicRegular from './ongothic/KoddiUDOnGothic-Regular.woff';
import OngothicRegular2 from './ongothic/KoddiUDOnGothic-Regular.woff2';
import OngothicBold from './ongothic/KoddiUDOnGothic-Bold.woff';
import OngothicBold2 from './ongothic/KoddiUDOnGothic-Bold.woff2';
import OngothicExtraBold from './ongothic/KoddiUDOnGothic-ExtraBold.woff';
import OngothicExtraBold2 from './ongothic/KoddiUDOnGothic-ExtraBold.woff2';
=======
>>>>>>> 7dd955e (chore: assets/fonts 폴더 구조 정리)

export default createGlobalStyle`
@font-face {
    font-family: "Pretendard";
    src: local("PretendardRegular"),
    url(${PretendardRegular}) format('woff2'),
    url("./woff/Pretendard-Regular.woff") format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "PretendardBold";
    src: local("PretendardBold"),
    url(${PretendardBold}) format('woff2'),
    url("./woff/Pretendard-Bold.woff") format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "PretendardSemiBold";
    src: local("PretendardSemiBold"),
    url(${PretendardSemiBold}) format('woff2'),
    url("./woff/Pretendard-SemiBold.woff") format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "PretendardMedium";
    src: local("PretendardMedium"),
    url(${PretendardMedium}) format('woff2'),
    url("./woff/Pretendard-Medium.woff") format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "PretendardExtraBold";
    src: local("PretendardExtraBold"),
    url(${PretendardExtraBold}) format('woff2'),
    url("./woff/Pretendard-ExtraBold.woff") format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "OngothicRegular";
    src: local("OngothicRegular"),
    url(${OngothicRegular2}) format('woff2'),
    url(${OngothicRegular}) format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "OngothicBold";
    src: local("OngothicBold"),
    url(${OngothicBold2}) format('woff2'),
    url(${OngothicBold}) format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "OngothicExtraBold";
    src: local("OngothicExtraBold"),
    url(${OngothicExtraBold2}) format('woff2'),
    url(${OngothicExtraBold}) format('woff');
    font-style: normal;
    font-display: swap;
}
`;
