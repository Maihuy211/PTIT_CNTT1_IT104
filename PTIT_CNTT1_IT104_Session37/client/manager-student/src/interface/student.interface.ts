export interface Student {
  id?: number;
  name: string;
  age?: number;
  grade?: string;
}

export interface InitialStateType {
  status: "idle" | "pending" | "success" | "failed";
  data: Student[];
  error: null | undefined | string;
  student: Student | null;
}

export type FilterState = {
  search: string;
  grade: string;
  sort: string;
};

export interface FilterStudentProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}
