import { Checkbox as MaterialCheckbox, CheckboxProps } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';

const Checkbox = (props: CheckboxProps) => {
  const classes = useStyles();

  return (
    <MaterialCheckbox
      color='secondary'
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
      {...props}
    />
  );
};

export default Checkbox;
