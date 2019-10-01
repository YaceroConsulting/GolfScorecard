import React, { Component } from 'react';
import AddButton from './Addbutton';
import RemoveButton from './RemoveButton';
import './PlayerCard.css';

export default class PlayerCard extends Component {
    constructor(props) {
        super(props);
        const player = this.checkAndInitializeHoleScore(props.currentHole, props.player);
        this.state = {
            player: player,
            currentHole: props.currentHole,
            holeIsLocked: props.holeIsLocked,
            checkAndInitializeHoleScore: this.checkAndInitializeHoleScore
        }
    }
    static getDerivedStateFromProps(props, state) {
        if(props.currentHole !== state.currentHole) {
            const player = state.checkAndInitializeHoleScore(props.currentHole, state.player);
            return {
                player: player,
                currentHole: props.currentHole
            }
        }
        return null;
    }
    checkAndInitializeHoleScore = (currentHole, player) => {
        const isInitialized = (player.scores[currentHole.no - 1] !== undefined);
        let updatedPlayer = player;

        if(!isInitialized) {
            updatedPlayer.scores.push(0);
        }

        return updatedPlayer;
    }

    get currentHoleIndex() {
        return this.props.currentHole.no - 1;
    }

    get scoreForCurrentHole() {
        return this.state.player.scores[this.currentHoleIndex];
    }

    set scoreForCurrentHole(v) {
        let player = this.state.player;
        
        player.scores[this.currentHoleIndex] = v;
        this.setState({
            player: player
        });
        this.props.updateScorecard();
    }

    get cumulativeScore() {
        let cumulativeScore = 0;
        for (let index = 0; index <= this.currentHoleIndex; index++) {
            cumulativeScore += this.state.player.scores[index];
        }
        return cumulativeScore;
    }

    nameChange(e) {
        let player = this.state.player;
        
        player.name = e.target.value;
        this.setState({
            player: player
        });
        this.props.updateScorecard();
    }

    render() {
        return (
            <div className="PlayerCard">
                <div className="Name-input-container">
                    <label>Alias:</label>
                    <input id="name" 
                        value={this.state.player.name} 
                        onChange={(e) => this.nameChange(e)}>
                    </input>
                </div>
                <div className="Score-on-hole-container">
                    <div>
                        <label>Score on hole:</label>
                        <span>{this.scoreForCurrentHole}</span>
                    </div>
                    <div className="Buttons-container">
                        <AddButton 
                            onClick={() => this.scoreForCurrentHole++}
                            readOnly={this.props.holeIsLocked}
                         />
                        <RemoveButton 
                            onClick={() => this.scoreForCurrentHole--}
                            readOnly={this.props.holeIsLocked}
                         />
                    </div>
                </div>
                <div>
                    <label>Cumulative score:</label>
                    <span>{this.cumulativeScore}</span>
                </div>
            </div>
        );
    }
}