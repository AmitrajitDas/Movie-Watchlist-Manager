import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.body.main,
    padding: '21.3rem',
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  search: {
    marginTop: '-10rem',
    width: '70rem',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
  },

  results: {
    marginTop: '5rem',
  },
}))
