import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_id: "",
            requested_quantity: "",
            user: "",
            students: [],
            items: [],
            done: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            fetch(API + '/QuickOrder/inventory/')
            .then((response) => response.json())
            .then(data => {
                let inventory = data.map(item => {
                    return {value: item.id, display: item.item_name}
                })
                this.setState({
                    items: [{value: '', display: ''}].concat(inventory)
                })
            })
            .catch(error => {
                console.log(error);
            })

            fetch(API + '/UserManagement/get-Users/')
            .then((response) => response.json())
            .then(data => {
                let users = data.map(user => {
                    return {value: user.id, display: user.name}
                })
                this.setState({
                    students: [{value: '', display: ''}].concat(users)
                })
            })
            .catch(error => {
                console.log(error);
            })
            setTimeout(() => {
                this.setState({
                    done: true,
                })
            }, 600)
        }, 700)
        
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const link = API + '/QuickOrder/add-order/'
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }

        fetch(link,data)
        .then()
        .catch(error => {console.log(error)})
        this.props.history.push('../inventory')
    }

    render() {
        return(
            <div>
            {!this.state.done ? <h2></h2> : 
            <FormComponent 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            data = {this.state}
            />
            }
            </div>
        )
    }

}

export default withRouter(Form)