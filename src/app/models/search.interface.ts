import { IFilter } from './filter.interface';

export interface ISearchModel {
    filters?: Array<IFilter>;
    query?: Object;
}
