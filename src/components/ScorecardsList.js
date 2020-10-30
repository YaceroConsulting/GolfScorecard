import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddButton from './buttons/AddButton';
import Hole from '../DataClasses/Hole'

class ScorecardsList extends Component {
    constructor(props) {
        super(props);
        let scorecards = JSON.parse(localStorage.getItem("scorecards"));
        if(scorecards == null) {
            scorecards = [];
        }

        this.state = {
            scorecards: scorecards
        };
    }

    addScorecard() {
        const scorecards = this.state.scorecards.slice();
        scorecards.push({
            gameAlias: "YaceroGolf!",
            date: new Date().toDateString(),
            id: Math.random().toString(36).substr(2, 9),
            holes: [new Hole(1)],
            players: []
        })
        localStorage.setItem("scorecards", JSON.stringify(scorecards));
        this.setState({
            scorecards: scorecards
        });
    }
    
    render() {
        const scorecards = this.state.scorecards.map(card => {
            return (
                <Link key={card.id} to={`/scorecard/${card.id}`}>
                    <div className="Scorecard-mini-card">
                        <span className="Card-header">Round name: </span>
                        <span className="Card-header">Date:</span>
                        <span>{card.gameAlias}</span>
                        <span>{card.date}</span>
                    </div>
                </Link>
            )
        });
        return (
            <>
                <div className="Scoreboards-header">
                    <h1>Scorecards:</h1>
                    <AddButton 
                        onClick={() => this.addScorecard()} />
                </div>
                {scorecards}
            </>);
    }
}

export default ScorecardsList;