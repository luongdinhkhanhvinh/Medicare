import { TextFieldProps } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FormTextField from '../formTextField';

const EmailField = (props: TextFieldProps) => {
  const { t } = useTranslation();

  return (
    <FormTextField
      id='email'
      label={t('Email Address')}
      name='email'
      autoComplete='email'
      {...props}
    />
  );
};

export default EmailField;
