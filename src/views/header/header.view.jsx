import useHeaderStyles from './header.styles'
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg'
import { TO_TOKEN_SYMBOL } from '../../constants'

function Header ({ onGoBack }) {
  const classes = useHeaderStyles()

  return (
    <div className={classes.header}>
      {onGoBack && (
        <button
          className={classes.goBackButton}
          onClick={onGoBack}
        >
          <ArrowLeft />
        </button>
      )}
      <p className={classes.title}>HEZ → {TO_TOKEN_SYMBOL}</p>
    </div>
  )
}

export default Header
