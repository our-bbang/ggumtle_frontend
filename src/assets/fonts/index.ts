import { createGlobalStyle } from 'styled-components';
import PretendardRegular from './Pretendard-Regular.woff2';
import PretendardBold from './Pretendard-Bold.woff2';
import PretendardSemiBold from './Pretendard-SemiBold.woff2';
import PretendardMedium from './Pretendard-Medium.woff2';
import PretendardExtraBold from './Pretendard-ExtraBold.woff2';

export default createGlobalStyle`
@font-face {
    font-family: "Pretendard";
    src: local("PretendardRegular"),
    url(${PretendardRegular}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardBold";
    src: local("PretendardBold"),
    url(${PretendardBold}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardSemiBold";
    src: local("PretendardSemiBold"),
    url(${PretendardSemiBold}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardMedium";
    src: local("PretendardMedium"),
    url(${PretendardMedium}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardExtraBold";
    src: local("PretendardExtraBold"),
    url(${PretendardExtraBold}) format('woff2');
    font-style: normal;
}
`;
