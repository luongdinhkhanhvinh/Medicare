import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      color: theme.colors.gray60,
      '&$checked': {
        color: theme.colors.info,
      },
      borderRadius: 20,
    },
    checked: {},
  }),
);
