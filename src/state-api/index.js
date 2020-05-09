class StateApi {
    constructor(rawData) {
        this.rawData = rawData;
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getSwitchGames = () => {
        return this.mapIntoObject(this.rawData.NintedoSwitchGames);
    }

    getState = () => {
        return {
            switchGames: this.getSwitchGames(),
        };
    }

}

export default StateApi;
