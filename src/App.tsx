import {
  Container,
  CssBaseline,
  Grid,
  Stack,
  useMediaQuery
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import Content from './components/Content'
import Name from './components/Name/Name'
import SimpleBar from 'simplebar-react'

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isWideScreen = useMediaQuery('(min-width: 950px)')
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth={false} disableGutters>
        {isWideScreen ? (
          <Container sx={{ minHeight: '100%', maxWidth: '1920px' }} disableGutters maxWidth={false}>
            <Grid container sx={{ height: '100%' }}>
              <Grid
                item
                sx={{ flexBasis: '40%', maxWidth: '700px', height: '100dvh' }}
              >
                <Name />
              </Grid>
              <SimpleBar style={{ flex: 1, height: '100dvh', overflowX: 'auto' }}>
                <Grid item>
                  <Content />
                </Grid>
              </SimpleBar>
            </Grid>
          </Container>
        ) : (
          <SimpleBar style={{ height: '100dvh', overflowX: 'auto' }}>
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
