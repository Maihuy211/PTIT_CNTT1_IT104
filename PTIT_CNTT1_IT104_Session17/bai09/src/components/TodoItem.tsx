import { type Job } from "./TodoApp";

type Props = {
  job: Job;
  handleDelete: (job: Job) => void;
  handleChangeStatus: (id: number | string) => void;
};

export default function TodoItem({
  job,
  handleDelete,
  handleChangeStatus,
}: Props) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={job.isCompleted}
          onChange={() => handleChangeStatus(job.id)}
        />
        {job.isCompleted ? <s>{job.name}</s> : <span>{job.name}</span>}
      </div>
      <div>
        <a href="#!" className="text-info" title="Sửa công việc">
          <i className="fas fa-pencil-alt me-3" />
        </a>
        <a
          onClick={() => handleDelete(job)}
          href="#!"
          className="text-danger"
          title="Xóa công việc"
        >
          <i className="fas fa-trash-alt" />
        </a>
      </div>
    </li>
  );
}
