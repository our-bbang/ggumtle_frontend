import { createGlobalStyle } from 'styled-components';
import PretendardRegular from './pretendard/Pretendard-Regular.woff2';
import PretendardBold from './pretendard/Pretendard-Bold.woff2';
import PretendardSemiBold from './pretendard/Pretendard-SemiBold.woff2';
import PretendardMedium from './pretendard/Pretendard-Medium.woff2';
import PretendardExtraBold from './pretendard/Pretendard-ExtraBold.woff2';

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
