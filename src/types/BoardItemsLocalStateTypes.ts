import { IColumn, ITask } from './boardTypes';

export type ColumnStateType = Map<string, ITask[]>;
export type ColumnPayloadProps = [string, ITask[]];

export type BoardStateType = Map<string, IColumn[]>;
export type BoardPayloadProps = [string, IColumn[]];
