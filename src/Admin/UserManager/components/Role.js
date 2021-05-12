import React from 'react'

function Role(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Role</h3>
            <select 
                id="role"
                name="role"
                value = {props.role}
                onChange = {props.handleChange}
                required
                >
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )
}

export default Role