import classnames from "classnames"
import PropTypes from "prop-types"

const Icon = ({ type, className, ...rest }) => {
  return (
    <svg {...rest} className={classnames("icon", className)} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
