import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/global-style';
import { Layout } from '@layout/index';

import { LandingPage } from '@pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
