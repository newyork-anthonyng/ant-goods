import { h, render, Component } from "preact";
import fetchAntInfo from "./fetchAntInfo";
import generateAntWinLikelihoodCalculator from "./generateAntWinLikelihoodCalculator";

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
                    odds: undefined // Initial state
                    odds: "pending" // pending
                    odds: A value // Final state
                */
                this.setState({
                    ants: data.data.ants
                });
            });
    }

    handleCalculateOddsClick = () => {
        const { ants } = this.state;

        if (ants.length === 0) return;

        const newAnts = ants.map(ant => {
            const updatedAnt = {
                ...ant,
                odds: "pending"
            };

            generateAntWinLikelihoodCalculator()(this.updateAntOdds(updatedAnt));

            return updatedAnt;
        });

        this.setState({ ants: newAnts });
    }

    updateAntOdds = ant => odds => {
        const newAnts = this.state.ants.map(currentAnt => {
            if (ant.name === currentAnt.name) {
                return {
                    ...currentAnt,
                    odds
                };
            }
            return currentAnt;
        });

        this.setState({ ants: newAnts });
    }

    renderAnts = () => {
        return this.state.ants.map(ant => {
            return <li>
                <span>{ant.name}</span>
                <p>Weight: {ant.weight}</p>
                <p>Length: {ant.length}</p>
                <div style={{ borderRadius: "50%", height: 50, width: 50, backgroundColor: ant.color}}></div>
                {this.renderAntOdds(ant)}
            </li>
        });
    }

    renderAntOdds = (ant) => {
        if (ant.odds === undefined) {
            return "no odds calculated";
        } else if (ant.odds === "pending") {
            return "calculating odds...";
        } else {
            return ant.odds;
        }
    }

    render() {
        return <div>
            <h1>Ant Goods</h1>
            <div style={{fontSize: 200}}>🐜</div>
            <button onClick={this.handleCalculateOddsClick}>Calculate odds</button>
            <ul>
                {this.renderAnts()}
            </ul>
        </div>
    }
}



render(<App />, document.body);