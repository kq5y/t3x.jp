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
      <Container component="main" maxWidth={false} disableGutters sx={{height: "100vh"}}>
        {isWideScreen ? (
          <Grid container style={{ height: '100%' }}>
            <Grid item style={{ flexBasis: '40%', maxWidth: '750px' }}>
              <Name />
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Content direction="row" />
            </Grid>
          </Grid>
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
