import React, { Component } from 'react';
import Hole from './DataClasses/Hole'
import './scorecard.css';
import AddButton from './Addbutton';
import RemoveButton from './RemoveButton';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PlayerCard from './PlayerCard';
import Padlock from './Padlock';

class Scorecard extends Component {
    constructor(props) {
        super(props);

        const scorecard = this.getScorecardFromId(props.match.params.id);
        this.state = {
            id: props.match.params.id,
            scorecard: scorecard,
            selectedHole: 1
        };

        this._scorecard = this.state.scorecard;
    }

    getScorecardFromId(id) {
        const scorecards = JSON.parse(localStorage.getItem("scorecards"));
        return scorecards.find(c => c.id === id);
    }

    setScoreCardFromId(id) {
        const scorecards = JSON.parse(localStorage.getItem("scorecards"));
        const index = scorecards.findIndex(c => c.id === id);
        
        scorecards[index] = this._scorecard;
        this.setState({ scorecard: this._scorecard });
        localStorage.setItem("scorecards", JSON.stringify(scorecards));
    }

    nameChange(e) {
        this._scorecard.gameAlias = e.target.value;
        this.setScoreCardFromId(this._scorecard.id);
    };

    goToPreviousHole() {
        this.setState({
            selectedHole: this.state.selectedHole - 1
        });
    }

    goToNextHole() {
        this.setState({
            selectedHole: this.state.selectedHole + 1
        });
    }

    createAndGoToNewHole() {
        this._scorecard.holes.push(new Hole(this.state.selectedHole + 1));
        this.setScoreCardFromId(this._scorecard.id);
        this.goToNextHole();
    }

    raiseParOfCurrentHole() {
        this._scorecard.holes[this.state.selectedHole - 1].par++;
        this.setScoreCardFromId(this._scorecard.id);
        this.setState({
            scorecard: this._scorecard
        });
    }

    lowerParOfCurrentHole() {
        if(this._scorecard.holes[this.state.selectedHole - 1].par < 1) {
            return;
        }
        this._scorecard.holes[this.state.selectedHole - 1].par--;
        this.setScoreCardFromId(this._scorecard.id);
        this.setState({
            scorecard: this._scorecard
        });
    }

    addPlayer() {
        this._scorecard.players.push({
            id: Math.random().toString(36).substr(2, 9),
            name: "Player " + (this._scorecard.players.length + 1),
            scores: []
        });

        this.setScoreCardFromId(this._scorecard.id);
        this.setState({
            scorecard: this._scorecard
        });
    }

    get IsLastHole() {
        return this.state.selectedHole === this.state.scorecard.holes.length;
    }
    
    get currentHole() {
        return this.state.scorecard.holes[this.state.selectedHole - 1];
    } 

    get currentHolePar() {
        const par = this.currentHole.par;
        return par;
    }

    get holeIsLocked() {
        return this.currentHole.isLocked;
    }

    set holeIsLocked(v) {
        this._scorecard.holes[this.state.selectedHole - 1].isLocked = v;
        this.setScoreCardFromId(this._scorecard.id);
        this.setState({
            scorecard: this._scorecard
        });
    }

    render() {
        const isLastHole = this.IsLastHole;
        const isFirstHole = this.state.selectedHole === 1;

        const players = this._scorecard.players.map(player => {
            return (
                <PlayerCard 
                    key={player.id} 
                    player={player} 
                    holes={this._scorecard.holes}
                    currentHole={this.currentHole}
                    holeIsLocked={this.holeIsLocked}
                    updateScorecard={() => this.setScoreCardFromId(this._scorecard.id)}
                />
            )
        });

        return (
            <div className="Scorecard">
                <div className="name-input-container section">
                    <label htmlFor="name">Round name:</label>
                    <input id="name" 
                        value={this.state.scorecard.gameAlias} 
                        onChange={(e) => this.nameChange(e)}>
                    </input>
                </div>

                <div className="hole-input-container section">
                    <div>
                        <label htmlFor="name">Current hole:</label>
                        <span>{this.state.selectedHole}</span>
                    </div>
                    <Padlock 
                        locked={this.holeIsLocked}
                        onClick={() => this.holeIsLocked = !this.holeIsLocked } />
                    <div className="par-container">
                        <div>
                            <label htmlFor="par">Par:</label>
                            <span>{this.currentHolePar}</span>
                        </div>
                        <div className="par-buttons-container">
                            <AddButton 
                                onClick={() => this.raiseParOfCurrentHole()}
                                readOnly={this.holeIsLocked}
                            />
                            <RemoveButton 
                                onClick={() => this.lowerParOfCurrentHole()}
                                readOnly={this.holeIsLocked}
                             />
                        </div>
                    </div>
                    <div className="buttons-container">
                        {!isFirstHole && 
                            <ArrowLeft onClick={() => this.goToPreviousHole()} /> }
                        {!isLastHole &&
                            <ArrowRight onClick={() => this.goToNextHole()} /> }
                        {isLastHole && 
                            <AddButton onClick={() => this.createAndGoToNewHole()} /> }
                    </div>
                </div>
                <div>
                    <div className="players-header">
                        <h2>Players/Teams</h2>
                        <AddButton 
                            onClick={() => this.addPlayer()}
                            readOnly={this.holeIsLocked}
                         />
                        
                    </div>
                    {players}    
                </div>
            </div>
        );
    }
}

export default Scorecard;