import {IPageFilter} from "./IPageFilter";
import {IIdName} from "./IIdName";
import {IListControls} from "./IListControls";
import {IDataControl} from "./IDataControl";
import {IReduxParams} from "./IReduxParams";

export type IdNameDto = IIdName;
export type PageFilter = IPageFilter;
export type ListControls = IListControls & IDataControl;
export type DataControls = IDataControl;
export type ReduxParams<TRes, TParams = any> = IReduxParams<TRes, TParams>;
export type ActionPayload<TRes, TParams = any> = {} & {payload: ReduxParams<TRes, TParams>};
