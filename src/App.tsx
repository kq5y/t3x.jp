import { Container, CssBaseline, Grid, Stack, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Content from './components/Content';
import Name from './components/Name';
import SimpleBar from 'simplebar-react';

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
            <SimpleBar style={{flex: 1, height: "100vh", overflowX: "auto"}}>
              <Grid item>
                <Container sx={{minHeight: "100%"}}>
                  <Content />
                </Container>
              </Grid>
            </SimpleBar>
          </Grid>
        ) : (
          <SimpleBar style={{height: "100vh", overflowX: "auto"}}>
            <Container>
              <Stack direction="column">
                <Name />
                <Content />
              </Stack>
            </Container>
          </SimpleBar>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
