import { h, render, Component } from "preact";
import fetchAntInfo from "./fetchAntInfo";
import generateAntWinLikelihoodCalculator from "./generateAntWinLikelihoodCalculator";

const NOT_STARTED = "not-started";
const STARTING = "starting";
const FINISHED = "finished";

// @TODO Handle user clicking on button multiple times
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

        newAnts.sort((a, b) => {
            // Sort from highest to lowest
            return (b.odds || 0) - (a.odds || 0);
        });

        this.setState({ ants: newAnts });
    }

    formatAntOdds = odds => {
        return (odds * 100).toFixed(2);
    }

    renderAnts = () => {
        return this.state.ants.map(ant => {
            return <li>
                <span>{ant.name}</span>
                <p>Weight: {ant.weight}</p>
                <p>Length: {ant.length}</p>
                <div style={{ borderRadius: "50%", height: 50, width: 50, backgroundColor: ant.color}}></div>
                <span style={{ fontSize: 100 }}>{this.renderAntOdds(ant)}</span>
            </li>
        });
    }

    renderAntOdds = (ant) => {
        if (ant.odds === undefined) {
            return "no odds calculated";
        } else if (ant.odds === "pending") {
            return "calculating odds...";
        } else {
            return `${this.formatAntOdds(ant.odds)}%`;
        }
    }

    getAntOddsCalculatingState = () => {
        const { ants } = this.state;

        let status = NOT_STARTED;
        let counter = 0;
        ants.forEach(ant => {
            if (ant.odds === "pending") {
                status = STARTING;
            } else if (typeof ant.odds === "number") {
                counter++;
            }
        });

        if (counter === ants.length) {
            status = FINISHED;
        }

        return status;
    }

    renderTotalAntOddsCalculatingState = () => {
        const antOddsCalculatingState = this.getAntOddsCalculatingState();
        let antOddsCalculatingStateMarkup = "";

        if (antOddsCalculatingState === NOT_STARTED) {
            antOddsCalculatingStateMarkup = <p>Not started</p>
        } else if (antOddsCalculatingState === STARTING) {
            antOddsCalculatingStateMarkup = <p>Calculating odds</p>
        } else if (antOddsCalculatingState === FINISHED) {
            antOddsCalculatingStateMarkup = <p>Finished calculating odds</p>
        }

        return antOddsCalculatingStateMarkup;
    }

    render() {
        return <div>
            <h1>Ant Goods</h1>
            <div style={{fontSize: 200}}>🐜</div>
            <button onClick={this.handleCalculateOddsClick}>Calculate odds</button>
            {this.renderTotalAntOddsCalculatingState()}
            <ul>{this.renderAnts()}</ul>
        </div>
    }
}



render(<App />, document.body);