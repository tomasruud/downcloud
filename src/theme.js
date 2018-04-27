import Typography from 'typography'
import theme from 'typography-theme-noriega'

export const colors = {
  primary: '#f92300',
  white: '#fff',
  black: '#000'
}

theme.baseFontSize = '20px'
theme.overrideStyles = () => ({
  '::selection': {
    backgroundColor: colors.primary,
    color: colors.white
  },
  body: {
    color: colors.black
  },
  a: {
    color: colors.primary,
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  'a:hover,a:active': {
    color: colors.black,
    cursor: 'pointer'
  }
})

const typography = new Typography(theme)

export default typography
