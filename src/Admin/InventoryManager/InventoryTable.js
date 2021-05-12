import React from 'react'
import {  Link, withRouter } from 'react-router-dom'
import { API } from '../../Main/constants'

export let selected_id = ""
export let page_type = ""

class InventoryTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            selectedQuery: "",
            selectedButton: "",
            item: [],
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onButtonChange = this.onButtonChange.bind(this)
    }

    componentDidMount() {
        let inventoryLink = API + '/QuickOrder/inventory/'
        let data = {
            method: 'GET',
        }
        setTimeout(() => {
            fetch(inventoryLink, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: [response],
                })
            })
            .then(
                setTimeout(() => {
                    this.setState({
                        done: true,
                    })
                }, 600))
            .catch(error => {
                console.log(error)
            })
        }, 700)

    }

    compareBy(key, sort) {
        return function (a, b) {
            if (sort === "1") {
                if (a[key] < b[key])
                    return -1
                if (a[key] > b[key])
                    return 1
            }
            if (sort === "2") {
                if (a[key] < b[key])
                    return 1
                if (a[key] > b[key])
                    return -1 
            }
            return 0
        }
    }

    sortBy(event) {
        let selected = event.target.value.split(":")
        let arrayCopy = this.state.items[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({order: [arrayCopy]})
    }

    onChange(event) {
        this.setState({ selectedQuery: event.target.value})
    }

    async onSubmit(event) {
        event.preventDefault()
        let button = this.state.selectedButton

        if (button === 'add' && this.state.selectedQuery === "") {
            page_type = "Add"
            this.props.history.push('./inventory/form')
        }
        if (button === 'update' && this.state.selectedQuery !== "") {
            selected_id = this.state.selectedQuery
            page_type = "Update"
            this.props.history.push ('./inventory/form')
        }
        if (button === 'delete' && this.state.selectedQuery !== "") {
            const link = {API}.API+ '/QuickOrder/delete-item/' + this.state.selectedQuery + '/'
            let data = {
                method: 'DELETE',
            }
            await fetch(link, data)
            .then().catch(error => {
                console.log(error)
            })
            window.location.reload();
        }
    }
    
    refresh() {
        window.location.reload();
    }

    onButtonChange(event) {
        this.setState({ selectedButton: event.target.value})
    }


    render() {
        return (
            <div>
            {!this.state.done ? <h2></h2> : 
            <div>
                <div className = "admin-buttons">
                    <Link to = "/admin/inventory">Inventory</Link>
                    <Link to = "/admin/users">Users</Link>
                    <Link to = "/admin/levels">Levels</Link>
                </div>
                <form onSubmit = {this.onSubmit}>
                    <div className = "heading">
                        <h1 className = "title">Inventory Items</h1>
                        <div className = "arrange">
                            <div className = "actions">
                                <button value = "clear" onClick = {this.refresh}>Clear</button>
                                <button value = "add" onClick = {this.onButtonChange} type = "submit">Add</button>
                                <button value = "update" onClick = {this.onButtonChange} type = "submit">Edit</button>
                                <button value = "delete" onClick = {this.onButtonChange} type = "submit">Delete</button>
                            </div>
                            <p className = "indicator">Sort By</p>
                            <select 
                                className = "sort"
                                onChange = {this.sortBy}
                            >
                                <option value = "item_name:1">A to Z</option>
                                <option value = "item_name:2">Z to A</option>
                            </select>
                        
                        </div>
                    </div>
                    
                    <div className = "table">
                        <table>
                            
                            <thead className = 'headers'>
                                <tr>
                                    <th> </th>
                                    <th>Item</th>
                                    <th>Current Quantity</th>
                                    <th>Minimum Quantity</th>
                                </tr>
                                </thead>
                                
                                <tbody>
                                    {this.state.items.map(inventory => {
                                        return(
                                            inventory.map((item, index) => {
                                                const {id, item_name, current_quantity, min_quantity} = item
                                                return(
                                                    <tr key = {index} className = "data">
                                                        <td style = {{height: "55px"}}>
                                                        <input type = "radio" name = "name"
                                                                value = {id}
                                                                onChange = {this.onChange}
                                                        />
                                                        </td>
                                                        <td>{item_name}</td>
                                                        <td>{current_quantity}</td>
                                                        <td>{min_quantity}</td>
                                                    </tr>
                                                    )
                                            })
                                        )
                                    })}
                                    
                                </tbody>
                        
                        </table>                
                    </div>
                </form>
            </div>
            }
            </div>
        )
    }

}

export default withRouter(InventoryTable)