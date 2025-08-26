import type { Job } from "./TodoApp";
import TodoItem from "./TodoItem";

type Props = {
  listJob: Job[];
  handleDelete: (job: Job) => void;
  handleChangeStatus: (id: number | string) => void;
};

export default function TodoList({
  listJob,
  handleDelete,
  handleChangeStatus,
}: Props) {
  return (
    <div style={{ marginTop: "15px" }}>
      {listJob.map((job) => (
        <TodoItem
          key={job.id}
          job={job}
          handleDelete={handleDelete}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </div>
  );
}
