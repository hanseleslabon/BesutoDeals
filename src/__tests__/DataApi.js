import DataApi from '../state-api';
import { data } from '../switchData';

const api = new DataApi(data);

describe('DataApi', () => {
    it('exposes articles as an object', () => {
        const switchGames = api.getSwitchGames();
        const id = data.NintedoSwitchGames[0].id;
        const title = data.NintedoSwitchGames[0].title;

        expect(switchGames).toHaveProperty(id);
        expect(switchGames[id].title).toBe(title);
    });
});
