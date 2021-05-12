import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';
import { selected_id, page_type } from './InventoryTable'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_id: "",
            item_name: "",
            current_quantity: "",
            min_quantity: "",
            page_type: page_type,
            done: false
    }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.page_type === "Update") {
            const link = API + '/QuickOrder/get-item/' + selected_id + '/'
            let data = {
                method: 'GET',
            }

            setTimeout(() => {
                fetch(link, data)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        item_id: response.id,
                        item_name: response.item_name,
                        current_quantity: response.current_quantity,
                        min_quantity: response.min_quantity,
                    })
                })
                .then(
                    setTimeout(() => {
                        this.setState({done: true})
                    }, 600))
                .catch(error => {
                    console.log(error)
                })
            }, 700)

        } else {
            this.setState({
                item_id: "",
                item_name: "",
                current_quantity: "",
                min_quantity: "",
                done: true,
                page_type: "Add"
            })
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        if (this.state.page_type === 'Add') {
            event.preventDefault()
            const link = API + '/QuickOrder/add-item/'
            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }

            fetch(link,data)
            .catch(error => {console.log(error)})
            this.props.history.push('/admin/inventory')
        } else {
            event.preventDefault()
            const link = API + '/QuickOrder/update-item/' + selected_id + '/'
            const data = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }

            fetch(link,data)
            .then()
            .catch(error => {console.log(error)})
            this.props.history.push('/admin/inventory')
        }

        this.setState({
            item_id: "",
            item_name: "",
            current_quantity: "",
            min_quantity: "",
        })
        window.location.reload();
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