export interface Task {
  id?: number;
  taskName?: string;
  completed?: boolean;
  priority?: string;
}

export interface InitialStateType {
  status: "idle" | "pending" | "success" | "failed";
  data: Task[];
  error: null | undefined | string;
  task: Task | null; 
}

