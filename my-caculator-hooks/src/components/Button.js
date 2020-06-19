import React from 'react'
import './css/Button.css'
import classNames from 'classnames'

class Button extends React.Component {
    render(){
        const {children, classItem, onClick} = this.props; 
        return (
            <div className={classNames('Button', `${classItem}`)} onClick={onClick}>
                {children}
            </div>
        )
    }
}

export default Button;