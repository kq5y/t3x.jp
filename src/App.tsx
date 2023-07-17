import { Container, CssBaseline, Divider, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Profile from './components/profile';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Profile />
        <Divider />
      </Container>
    </ThemeProvider>
  )
}

export default App
