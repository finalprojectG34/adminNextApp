import { useTheme } from '@mui/material/styles'
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material'

import AuthWrapper from '../../src/ui-components/wrapper/AuthWrapper'
import AuthCardWrapper from '../../src/ui-components/wrapper/AuthCardWrapper'
import AuthLogin from '../../src/ui-components/authentication/auth-forms/AuthLogin'
import {withApollo} from '../../src/hooks/useIsAuth'


const LoginPage = () => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AuthWrapper theme={theme}>
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? 'column-reverse' : 'row'}
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Grid item>
                        <Stack
                          alignItems='center'
                          justifyContent='center'
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.primary.main}
                            gutterBottom
                            variant={matchDownSM ? 'h3' : 'h2'}
                          >
                            Hi, Welcome Back
                          </Typography>
                          <Typography
                            variant='caption'
                            fontSize='16px'
                            textAlign={matchDownSM ? 'center' : 'inherit'}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction='column'
                      alignItems='center'
                      xs={12}
                    >
                      <Typography
                        component='div'
                        variant='subtitle1'
                        sx={{ textDecoration: 'none' }}
                      >

                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper>
  )
}

export default withApollo({ssr: true}) (LoginPage)
