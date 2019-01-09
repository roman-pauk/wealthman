import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Icon = ({ name }) => (
    <svg className={`icon icon-${name}`}>
        <use xlinkHref={`#icons-${name}`} />
    </svg>
)

Icon.propTypes = {
    name: PropTypes.string.isRequired
}

export default Icon