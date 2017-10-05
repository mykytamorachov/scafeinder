import { cafesJson } from './cafe.data';

export const getCafesServiceStub = {
    getAllCafes() {
        return cafesJson;
    },
    // getCafeById(id) {
    //     return cafesJson.filter(cafe => cafe._id === id);
    // }
};
