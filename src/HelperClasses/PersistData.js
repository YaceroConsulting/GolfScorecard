export default class PersistData {
    static setScoreCardFromId(id, updatedScorecard) {
        const scorecards = JSON.parse(localStorage.getItem("scorecards"));
        const index = scorecards.findIndex(c => c.id === id);
        
        scorecards[index] = updatedScorecard;
        this.setState({ scorecard: updatedScorecard });
        localStorage.setItem("scorecards", JSON.stringify(scorecards));
    }
}