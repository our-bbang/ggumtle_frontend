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
import { MandalartPage } from '@pages/Mandalart';
import { ErrorPage } from '@pages/Error';

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
              <Route path={'/mandalart'} element={<MandalartPage />} />
              <Route path={'/*'} element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StyleSheetManager>
    </RecoilRoot>
  );
}

export default App;
