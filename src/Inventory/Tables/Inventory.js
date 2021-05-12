import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../Main/constants'

class Inventory extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            done: false
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
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

    convertText(refill_needed) {
        if (refill_needed) {
            return "Yes"
        }
        return "No"
    }


    render() {
        return (
            <div>
                {!this.state.done ? <h2></h2> : 
                <div>
                <div className = "inventory-buttons">
                    <Link to = "/inventory/quickOrder">Quick Order</Link>
                    <Link to = "/inventory/generalOrder">General Order</Link>
                    <Link to = "/inventory/orders">Order History</Link>
                </div>
                <div className = "heading">
                    <h1 className = "title">Inventory Items</h1>
                    <div className = "arrange">
                        <p className = "indicator">Sort By</p>
                        <select 
                            className = "sort"
                            onChange = {this.sortBy}
                        >
                            <option value = "item_name:1">A to Z</option>
                            <option value = "item_name:2">Z to A</option>
                            <option value = "refill_needed:2">Refill Needed</option>
                        </select>
                    
                    </div>
                </div>
                
                <div className = "table">
                    <table>
                        
                        <thead className = 'headers'>
                            <tr>
                                <th>Item</th>
                                <th>Current Quantity</th>
                                <th>Min Quantity</th>
                                <th>Refill Needed</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {this.state.items.map(inventory => {
                                    return(
                                        inventory.map((item, index) => {
                                            const {item_name, current_quantity, min_quantity, refill_needed} = item
                                            return(
                                                <tr key = {index} className = "data">
                                                    <td style = {{height: "70px"}}>{item_name}</td>
                                                    <td>{current_quantity}</td>
                                                    <td>{min_quantity}</td>
                                                    <td>{this.convertText(refill_needed)}</td>
                                                    </tr>
                                                )
                                        })
                                    )
                                })}
                                


                            </tbody>
                    
                    </table>
                
                </div>
                </div>
                }
            </div>
        )
    }

}

export default Inventory