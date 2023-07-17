import { Container, CssBaseline, Stack, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Content from './components/Content';
import Name from './components/Name';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isWideScreen = useMediaQuery('(min-width: 750px)');
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
        {isWideScreen ? (
          <Stack direction="row">
            <Name />
            <Content direction="row" />
          </Stack>
        ) : (
          <Stack direction="column">
            <Name />
            <Content direction="column" />
          </Stack>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
