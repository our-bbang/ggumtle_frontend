import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/global-style';
import GlobalFonts from '@assets/fonts';

import { Layout } from '@components/layout';

import { LandingPage } from '@pages/Landing';
import { WritePage } from '@pages/Write';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Layout>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/write'} element={<WritePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
