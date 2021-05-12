import React from 'react'
import {API} from '../../Main/constants'



class Orders extends React.Component {
    constructor() {
        super()
        this.state = {
            order: [],
            filtered: [],
            done: false
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
        this.filterBy = this.filterBy.bind(this)
        this.search = this.search.bind(this)
    }

    componentDidMount() {
        let link = API + '/QuickOrder/orders/'
        let data = {
            method: 'GET',
        }
        setTimeout(() => {
            fetch(link, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    order: [response],
                    filtered: [response],
                })
            })
            .then(
                setTimeout(() => {
                    this.setState({
                        done: true,
                    })
                }, 600))
            .catch(error => {
                console.log(error);
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
        let arrayCopy = this.state.filtered[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({filtered: [arrayCopy]})
    }

    filterBy(event) {
        let selected = event.target.value
        let arrayCopy = []
        this.state.order[0].forEach(item => {
            if (selected === "all")
                arrayCopy = this.state.order[0]
            if (selected === "current" && (item.status === "Pending Approval"
                || item.status === "Approved" || item.status === "Ordered"))
                arrayCopy.push(item)
            if (selected === "past" && item.status === "Delivered")
                arrayCopy.push(item)
            if (selected === "inactive" && (item.status === "Declined" || item.status === "Cancelled"))
                arrayCopy.push(item)
        })
        this.setState({filtered: [arrayCopy]})
    }

    search(event) {
        let selected = event.target.value
        let arrayCopy = []
        this.state.order[0].forEach(item => {
            if (item.order_name.toLowerCase().includes(selected.toLowerCase())) {
                arrayCopy.push(item)
            }
            if (new Date(item.order_date).toLocaleString().includes(selected)) {
                arrayCopy.push(item)
            }
        })
        this.setState({filtered: [arrayCopy]})

    }

    render() {
        return (
            <div>
                {!this.state.done ? <h2></h2> : 
                <div>
                <div className = "heading">
                    <h1 className = "title">Order History</h1>
                    <div className = "arrange">
                        <input type="text" id="search" onChange={this.search} placeholder="Search for orders.."/>
                        <p className = "indicator">Sort By</p>
                        <select 
                            className = 'sort'
                            onChange = {this.sortBy}
                            >
                            <option value = "order_date:2">Newest to Oldest</option>
                            <option value = "order_date:1">Oldest to Newest</option>
                            <option value = "order_name:1">A to Z</option>
                            <option value = "order_name:2">Z to A</option>
                        </select>
                        
                        <p className = "indicator">Filter</p>
                        <select 
                            className = "filter"
                            onChange = {this.filterBy}
                            >
                            <option value = "all">All Orders</option>
                            <option value = "current">Current Orders</option>
                            <option value = "past">Past Orders</option>
                            <option value = "inactive">Inactive Orders</option>
                        </select>
                    
                    </div>
                </div>

                <div className = "table">
                    <table>

                        <thead className = 'headers'>
                            <tr>
                                <th style={{width:"150px", height: "35px"}}>Item</th>
                                <th style={{width:"150px"}}>Requested Quantity</th>
                                <th style={{width:"150px"}}>Status</th>
                                <th style={{width:"150px"}}>Order Date</th>
                            </tr>
                            </thead>

                            <tbody>
                                {this.state.filtered.map(items => {
                                    return(
                                        items.map((item, index) => {
                                            const {order_name, requested_quantity, status, order_date} = item
                                            return(
                                                    <tr key = {index} className = "data">
                                                        <td style = {{height: "70px"}}>{order_name}</td>
                                                        <td>{requested_quantity}</td>
                                                        <td>{status}</td>
                                                        <td>{new Date(order_date).toLocaleString()}</td>
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

export default Orders