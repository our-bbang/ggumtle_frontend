import { createGlobalStyle } from 'styled-components';
import PretendardRegular from './woff2/Pretendard-Regular.woff2';
import PretendardBold from './woff2/Pretendard-Bold.woff2';
import PretendardSemiBold from './woff2/Pretendard-SemiBold.woff2';
import PretendardMedium from './woff2/Pretendard-Medium.woff2';
import PretendardExtraBold from './woff2/Pretendard-ExtraBold.woff2';

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
`;
