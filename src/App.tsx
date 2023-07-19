import { Container, CssBaseline, Grid, Stack, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Content from './components/Content';
import Name from './components/Name';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isWideScreen = useMediaQuery('(min-width: 950px)');
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
      <CssBaseline />
      <Container component="main" maxWidth={false} disableGutters>
        {isWideScreen ? (
          <Grid container sx={{ height: '100%' }}>
            <Grid item sx={{ flexBasis: '40%', maxWidth: '700px', height: "100vh" }}>
              <Name />
            </Grid>
            <Grid item sx={{ flex: 1, height: "100vh" }}>
              <Container sx={{minHeight: "100%", overflowX: "auto"}}>
                <Content />
              </Container>
            </Grid>
          </Grid>
        ) : (
          <Container>
            <Stack direction="column">
              <Name />
              <Content />
            </Stack>
          </Container>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
