import React from 'react';
import Chart from "react-google-charts";
import './dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductDetail from './productdetail';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            mobiles: 0,
            laptops: 0,
            cameras: 0,
            brandData:[[]]
        }
    }

    UNSAFE_componentWillMount() {
        console.log("Component Mounting")
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({ products: response.data })
                this.data()
                this.datab(this.state.products)
                // this.datas()
                // this.datap()
                console.log("Components loaded")
            }, error => {
                console.log(error)
            })
    }

    data = () => {
        this.state.products.map(product => {
            if (product.category === "Mobiles") {
                this.setState({ mobiles: this.state.mobiles + parseInt(product.stock) })
            }
            if (product.category === "Laptops") {
                this.setState({ laptops: this.state.laptops + parseInt(product.stock) })
            }
            if (product.category === "Cameras") {
                this.setState({ cameras: this.state.cameras + parseInt(product.stock) })
            }
        })
    }

    datab = (products) => {
        let brand=[["Brand","Stock"]]
        for(const data of products){
            if(brand.includes(data.brand)){
                var a=brand.indexOf(brand.name)
                console.log(a)
            }
            else{
                brand.push([data.brand,parseInt(data.stock)])
            }
            
        }
        console.log(brand)
        this.setState({brandData:brand})
    }

    render() {
        return (
            <div className="row">
                <Link to="/category">
                    <section id="category">
                        <p>Category</p>
                        <Chart
                            chartType="BarChart"
                            loader={<div>Loading Chart...</div>}
                            data={[
                                ['Category', 'Stock'],
                                ['Mobiles', this.state.mobiles],
                                ['Cameras', this.state.cameras],
                                ['Laptops', this.state.laptops],
                            ]}
                            options={{
                                title: 'Category-wise stock',
                                legend: { position: 'none' },
                                colors: ['green'],
                            }}
                        />
                    </section>
                </Link>
                <Link to="/vendor">
                    <section id="vendor">
                        <p>Vendor</p>
                        <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart...</div>}
                            data={this.state.brandData}
                            options={{
                                title: 'My Daily Activities',
                                // Just add this option
                                is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </section>
                </Link>
                <Link to="/stock">
                    <section id="stock">
                        <p>Stock</p>
                        <Chart
                            chartType="Histogram"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
                                [2 / 3, -1, 0, 0],
                                [2 / 3, -1, 0, null],
                                [2 / 3, -1, 0, null],
                                [-1 / 3, 0, 1, null],
                                [-1 / 3, 0, -1, null],
                                [-1 / 3, 0, null, null],
                                [-1 / 3, 0, null, null],
                            ]}
                            options={{
                                title: 'Charges of subatomic particles',
                                legend: { position: 'top', maxLines: 2 },
                                colors: ['#5C3292', '#1A8763', '#871B47', '#999999'],
                                interpolateNulls: false,
                            }}
                            rootProps={{ 'data-testid': '5' }}
                        />
                    </section>
                </Link>
                <Link to="/price">
                    <section id="price">
                        <p>Price</p>
                        <Chart
                            chartType="Histogram"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
                                [2 / 3, -1, 0, 0],
                                [2 / 3, -1, 0, null],
                                [2 / 3, -1, 0, null],
                                [-1 / 3, 0, 1, null],
                                [-1 / 3, 0, -1, null],
                                [-1 / 3, 0, null, null],
                                [-1 / 3, 0, null, null],
                            ]}
                            options={{
                                title: 'Charges of subatomic particles',
                                legend: { position: 'top', maxLines: 2 },
                                colors: ['#5C3292', '#1A8763', '#871B47', '#999999'],
                                interpolateNulls: false,
                            }}
                            rootProps={{ 'data-testid': '5' }}
                        />
                    </section>
                </Link>
            </div>
        );
    }
}

export default Dashboard;