import { h, render, Component } from "preact";
import fetchAntInfo from "./fetchAntInfo";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ants: []
        };
    }

    componentDidMount() {
        fetchAntInfo()
            .then(data => {
                /*
                    color: "BLACK"
                    length: 12
                    name: "Marie ‘Ant’oinette"
                    weight: 2
                */
                this.setState({
                    ants: data.data.ants
                })
            });
    }

    renderAnts() {
        return this.state.ants.map(ant => {
            return <li>
                <span>{ant.name}</span>
                <p>Weight: {ant.weight}</p>
                <p>Length: {ant.length}</p>
                <div style={{ borderRadius: "50%", height: 50, width: 50, backgroundColor: ant.color}}></div>
            </li>
        });
    }

    render() {
        return <div>
            <h1>Ant Goods</h1>
            <div style={{fontSize: 200}}>🐜</div>
            <ul>
                {this.renderAnts()}
            </ul>
        </div>
    }
}



render(<App />, document.body);