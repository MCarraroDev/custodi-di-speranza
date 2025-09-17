import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SponsorPage from './pages/SponsorPage';
import PressPage from './pages/PressPage';
import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTopButton from './components/common/ScrollToTopButton';

// Aggiungiamo alcuni stili globali per un look più pulito
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.background.light};
    color: ${(props) => props.theme.colors.text.dark};
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }
`;

// Creiamo un contenitore principale per l'applicazione
const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh; /* Assicura che l'app occupi almeno tutta l'altezza dello schermo */
`;

// Contenitore per il contenuto principale, separato da Header e Footer (forzo reload)
const MainContent = styled.main`
	flex: 1; /* Fa in modo che il contenuto principale occupi lo spazio rimanente */
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<AppContainer>
					<Header />
					<MainContent>
						<Routes>
							<Route
								path='/'
								element={<HomePage />}
							/>
							<Route
								path='/progetto'
								element={<ProjectPage />}
							/>
							<Route
								path='/sponsor'
								element={<SponsorPage />}
							/>
							<Route
								path='/dicono-di-noi'
								element={<PressPage />}
							/>
							<Route
								path='/dove-siamo'
								element={<LocationPage />}
							/>
							<Route
								path='*'
								element={<NotFoundPage />}
							/>
						</Routes>
					</MainContent>
					<Footer />
					<ScrollToTopButton />
				</AppContainer>
			</Router>
		</ThemeProvider>
	);
}

export default App;
