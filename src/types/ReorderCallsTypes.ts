interface IReorderTask {
  _id: string;
  order: number;
  columnId: string;
}

export type IReorderTasksArray = IReorderTask[];

interface IReorderColumn {
  _id: string;
  order: number;
}

export type IReorderColumnsArray = IReorderColumn[];
