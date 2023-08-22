import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { GlobalStyle } from '@styles/global-style';
import GlobalFonts from '@assets/fonts';

import { Layout } from '@components/layout';

//pages
import { LandingPage } from '@pages/Landing';
import { WritePage } from '@pages/Write';
import { UserInfoPage } from '@pages/UserInfo';
import { PlanPage } from '@pages/Plan';
import { ErrorPage } from '@pages/Error';
import { DownloadImgPage } from '@pages/DownloadImg';

function App() {
  return (
    <RecoilRoot>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <BrowserRouter>
          <GlobalStyle />
          <GlobalFonts />
          <Layout>
            <Routes>
              <Route path={'/'} element={<LandingPage />} />
              <Route path={'/write'} element={<WritePage />} />
              <Route path={'/userinfo'} element={<UserInfoPage />} />
              <Route path={'/plan'} element={<PlanPage />} />
              <Route path={'/planimg'} element={<DownloadImgPage />} />
              <Route path={'*'} element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StyleSheetManager>
    </RecoilRoot>
  );
}

export default App;
