import { Box } from '@material-ui/core';
import { Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Image } from 'src/commons/images';
import EmailField from 'src/components/formikField/emailField';
import PasswordField from 'src/components/formikField/passwordField';
import Button from 'src/components/materialUI/components/button';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { RouteName } from 'src/routers/routeName';
import useStyles from './style';
import { LoginFormValue } from './types';
import { loginFormSchema } from './validation';

const loginFormInitValues: LoginFormValue = {
  email: '',
  password: '',
};

const Login = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = React.useCallback(
    (values: LoginFormValue) => {
      dispatch({ type: SHOW_SPINNER });
      console.log(values);
      setTimeout(() => {
        dispatch({ type: HIDE_SPINNER });
        history.push(RouteName.HOME);
      }, 2000);
      // //TODO Remove when integrate api
    },
    [dispatch, history],
  );

  return (
    <div className={classes.root}>
      <Box className={classes.form}>
        <Box mb={3} className={classes.logo}>
          <img src={Image.LOGO} className={classes.imgLogo} />
        </Box>
        <Formik<LoginFormValue>
          initialValues={loginFormInitValues}
          validationSchema={loginFormSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            const { handleSubmit } = formikProps;

            return (
              <>
                <EmailField />
                <PasswordField />
                <Box textAlign='center'>
                  <Button
                    variant='contained'
                    color='secondary'
                    className={classes.submit}
                    onClick={() => handleSubmit()}
                  >
                    {t('Login')}
                  </Button>
                </Box>
              </>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};

export default Login;
