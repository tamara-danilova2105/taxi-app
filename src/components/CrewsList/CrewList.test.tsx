import { getDistance } from "./helpers/helpers";

describe('CrewList', () => {
    test('get distance', () => {
        expect(getDistance({lat1: 56.847811, lon1: 53.203811, lat2: 56.853218, lon2: 53.204573})).toBe(600);
    });
})