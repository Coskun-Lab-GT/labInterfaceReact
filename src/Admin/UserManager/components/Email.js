import React from 'react'

function Email(props) {
    return (
        <div className="admin-input">
            <h3 className = "label">Email</h3>
            <input
                id="email"
                type="email"
                name="email"
                value = {props.email}
                onChange = {props.handleChange}
                required
            />
        </div>
    )
}

export default Email