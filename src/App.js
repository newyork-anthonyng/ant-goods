import { h, Component } from "preact";
import fetchAntInfo from "./fetchAntInfo";
import generateAntWinLikelihoodCalculator from "./generateAntWinLikelihoodCalculator";
import Header from "./Header";
import Ant from "./Ant";

const NOT_STARTED = "not-started";
const STARTING = "starting";
const FINISHED = "finished";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ants: []
        };

        this.areOddsCalculated = false;
    }

    componentDidMount() {
        fetchAntInfo()
            .then(data => {
                this.setState({
                    ants: data.data.ants
                });
            });
    }

    handleCalculateOddsClick = () => {
        // users can only calculate odds once
        if (this.areOddsCalculated) {
            return;
        }
        const { ants } = this.state;
        if (ants.length === 0) return;

        this.areOddsCalculated = true;
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
                <Ant {...ant} odds={this.renderAntOdds(ant)} />
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
            <Header />

            <button onClick={this.handleCalculateOddsClick}>Calculate odds</button>

            {this.renderTotalAntOddsCalculatingState()}

            <ul>{this.renderAnts()}</ul>
        </div>
    }
}

export default App;