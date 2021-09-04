import { createMuiTheme, PaletteColorOptions } from '@material-ui/core/styles';
import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { colors } from '../const/colors';
import { rgba } from 'polished';

type StatusItem =
  | (
      | {
          [key: string]: StatusItem;
        }
      | PaletteColorOptions
    )
  | any;

interface Status {
  [key: string]: StatusItem;
}

export const theme = (createMuiTheme({
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      fontSize: '14px',
      textTransform: 'none',
      letterSpacing: '0.3px',
      fontWeight: 500,
    },
    h1: {
      fontSize: '50px',
      letterSpacing: '0.3px',
      fontWeight: 300,
    },
    h2: {
      fontSize: '40px',
      fontWeight: 'bold',
      letterSpacing: '0.3px',
    },
    h3: {
      fontSize: '35px',
      fontWeight: 'bold',
      letterSpacing: '0.3px',
    },
    h4: {
      fontSize: '30px',
      fontWeight: 'bold',
      lineHeight: 2,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: 2.5,
    },
    h6: {
      fontSize: '12px',
      fontWeight: 300,
      lineHeight: 1.67,
      etterSpacing: '0.5px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 300,
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: 0.5,
    },
    caption: {
      fontSize: '10px',
      fontWeight: 300,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.white,
    },
    error: {
      main: colors.lightenRed,
    },
    background: {
      default: colors.black,
    },
  },
  status: colors,

  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 25,
        color: colors.white,
        backgroundColor: colors.greys[11],
        width: '225px',
        height: '50px',
        '&:hover': {
          color: colors.white,
          backgroundColor: colors.greys[9],
        },
        '&:disabled': {
          color: rgba(colors.white, 0.4),
          backgroundColor: colors.greys[9],
        },
      },
      text: {
        color: colors.blue,
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '0.3px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      sizeLarge: {
        width: '296px',
        height: '80px',
        boxShadow: `0 4px 4px 0 ${rgba(colors.black, 0.35)}`,
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: 500,
        letterSpacing: '0.3px',
      },
      sizeSmall: {
        width: '120px',
        height: '50px',
        borderRadius: '25px',
        border: `1px solid ${colors.greys[11]}`,
      },
    },

    MuiInputBase: {
      root: {
        fontSize: '14px',
        height: 38,
        transform: `translate(12px, ${(38 - 14) / 2}px) scale(1)`,
        '&$error': {
          border: `1px solid ${colors.red}`,
        },
      },
      shrink: {
        transform: `translate(12px, ${(38 - 14) / 2}px) scale(0.75)`,
      },
    },

    MuiTextField: {
      root: {
        color: rgba(colors.white, 0.4),
      },
    },
    MuiInput: {
      root: {
        color: rgba(colors.white, 0.4),
        transform: 'translate(0, 0) scale(1)',
        '&$focused': {
          color: colors.white,
          borderBottom: `1px solid ${colors.white}`,
        },
        '&$error': {
          color: colors.red,
          borderBottom: `1px solid ${colors.red}`,
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
        },
      },

      underline: {
        '&:before': {
          borderBottom: `1px solid ${rgba(colors.white, 0.4)}`,
        },
        '&:after': {
          borderBottom: `1px solid ${rgba(colors.white, 0.4)}`,
        },
        '&:hover': {
          '&:before': {
            borderBottom: `1px solid ${rgba(colors.white, 0.4)}!important`,
          },
          '&:after': {
            borderBottom: `1px solid ${rgba(colors.white, 0.4)}!important`,
          },
        },
      },
      input: {
        padding: '10px 0 10px',
      },
    },

    MuiFilledInput: {
      root: {
        color: rgba(colors.white, 0.4),
        transform: 'translate(0, 0) scale(1)',
        backgroundColor: colors.greys[8],
        borderRadius: '25px',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        width: '293px',
        height: '50px',
        '&:hover': {
          color: colors.white,
          borderBottom: 'none',
          backgroundColor: colors.greys[15],
        },
        '&$focused': {
          color: colors.white,
          borderBottom: 'none',
          backgroundColor: colors.greys[15],
        },

        '&$error': {
          color: colors.red,
          borderBottom: 'none',
        },
      },

      underline: {
        '&:before': {
          borderBottom: 'none',
        },
        '&:after': {
          borderBottom: 'none',
        },
        '&:hover': {
          '&:before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
        },
      },
      input: {
        paddingLeft: '35px',
      },
    },

    MuiInputLabel: {
      root: {
        fontSize: '14px',
      },
      filled: {
        paddingLeft: '30px',
      },
      shrink: {
        fontWeight: 500,
      },
    },

    MuiFormLabel: {
      root: {
        color: rgba(colors.white, 0.4),
        '&$focused': {
          color: colors.white,
        },
      },
    },
    MuiSvgIcon: {
      colorAction: {
        color: colors.greenTeal,
      },
      colorDisabled: {
        color: colors.greys[14],
      },
      colorError: {
        color: colors.darkRed,
      },
    },
    MuiMenu: {
      paper: {
        maxHeight: 'auto',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.greys[8],
        color: colors.white,
        width: '276px',
      },
      rounded: {
        borderRadius: '20px',
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: colors.greys[1],
      },
      colorSecondary: {
        color: colors.greys[2],
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '12px',
        letterSpacing: '0.3px',
        fontWeight: 500,
      },
    },
    MuiSnackbarContent: {
      root: {
        width: '315px',
        height: '50px',
        borderRadius: '15px',
        backgroundColor: colors.greys[5],
        color: colors.white,
        padding: 0,
      },
      message: {
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        fontSize: '12px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '15px',
      },
    },
  },

  shadows: Array(25).fill('none') as unknown, // dynamic fill for cortege type
} as ThemeOptions) as unknown) as Theme & {
  status: Status;
};
