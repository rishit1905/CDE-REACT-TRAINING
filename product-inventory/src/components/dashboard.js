import React from 'react';
import Chart from "react-google-charts";
import './dashboard.css';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    state = {}
    render() {
        return (
            <div className="row">
                <Link to="/category">
                    <section id="category">
                        <p>Category</p>
                        <Chart
                            chartType="Histogram"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Dinosaur', 'Length'],
                                ['Acrocanthosaurus (top-spined lizard)', 12.2],
                                ['Albertosaurus (Alberta lizard)', 9.1],
                                ['Allosaurus (other lizard)', 12.2],
                                ['Apatosaurus (deceptive lizard)', 22.9],
                                ['Archaeopteryx (ancient wing)', 0.9],
                                ['Argentinosaurus (Argentina lizard)', 36.6],
                                ['Baryonyx (heavy claws)', 9.1],
                                ['Brachiosaurus (arm lizard)', 30.5],
                                ['Ceratosaurus (horned lizard)', 6.1],
                                ['Coelophysis (hollow form)', 2.7],
                                ['Compsognathus (elegant jaw)', 0.9],
                                ['Deinonychus (terrible claw)', 2.7],
                                ['Diplodocus (double beam)', 27.1],
                                ['Dromicelomimus (emu mimic)', 3.4],
                                ['Gallimimus (fowl mimic)', 5.5],
                                ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                                ['Megalosaurus (big lizard)', 7.9],
                                ['Microvenator (small hunter)', 1.2],
                                ['Ornithomimus (bird mimic)', 4.6],
                                ['Oviraptor (egg robber)', 1.5],
                                ['Plateosaurus (flat lizard)', 7.9],
                                ['Sauronithoides (narrow-clawed lizard)', 2.0],
                                ['Seismosaurus (tremor lizard)', 45.7],
                                ['Spinosaurus (spiny lizard)', 12.2],
                                ['Supersaurus (super lizard)', 30.5],
                                ['Tyrannosaurus (tyrant lizard)', 15.2],
                                ['Ultrasaurus (ultra lizard)', 30.5],
                                ['Velociraptor (swift robber)', 1.8],
                            ]}
                            options={{
                                title: 'Lengths of dinosaurs, in meters',
                                legend: { position: 'none' },
                                colors: ['green'],
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </section>
                </Link>
                <Link to="/vendor">
                    <section id="vendor">
                        <p>Vendor</p>
                        <Chart
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Work', 11],
                                ['Eat', 2],
                                ['Commute', 2],
                                ['Watch TV', 2],
                                ['Sleep', 7],
                            ]}
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
            </div>
        );
    }
}

export default Dashboard;