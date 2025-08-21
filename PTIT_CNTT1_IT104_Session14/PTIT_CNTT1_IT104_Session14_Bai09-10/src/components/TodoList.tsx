import { Component } from "react";
import "./TodoList.css";

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  tasks: Task[];
  newTask: string;
  error: string;
  showDeleteModal: boolean;
  deleteId: number | null;
  showEditModal: boolean;
  editId: number | null;
  editValue: string;
};

export default class TodoList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      newTask: "",
      error: "",
      showDeleteModal: false,
      deleteId: null,
      showEditModal: false,
      editId: null,
      editValue: "",
    };
  }

  // Lưu localStorage
  saveTasks = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({ tasks });
  };

  // Xử lý input thay đổi
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value });
  };

  // Thêm công việc
  handleAdd = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() === "") {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }
    if (
      tasks.some((t) => t.name.toLowerCase() === newTask.trim().toLowerCase())
    ) {
      this.setState({ error: "Tên công việc đã tồn tại!" });
      return;
    }
    const newTasks = [
      ...tasks,
      { id: Date.now(), name: newTask.trim(), completed: false },
    ];
    this.saveTasks(newTasks);
    this.setState({ newTask: "", error: "" });
  };

  // Xóa công việc
  confirmDelete = (id: number) => {
    this.setState({ showDeleteModal: true, deleteId: id });
  };

  handleDelete = () => {
    const { deleteId, tasks } = this.state;
    if (deleteId !== null) {
      const newTasks = tasks.filter((t) => t.id !== deleteId);
      this.saveTasks(newTasks);
    }
    this.setState({ showDeleteModal: false, deleteId: null });
  };

  // Sửa công việc
  openEdit = (task: Task) => {
    this.setState({
      showEditModal: true,
      editId: task.id,
      editValue: task.name,
    });
  };

  handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editValue: e.target.value });
  };

  handleUpdate = () => {
    const { editId, editValue, tasks } = this.state;
    if (editValue.trim() === "") {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }
    if (
      tasks.some(
        (t) =>
          t.id !== editId &&
          t.name.toLowerCase() === editValue.trim().toLowerCase()
      )
    ) {
      this.setState({ error: "Tên công việc đã tồn tại!" });
      return;
    }
    const newTasks = tasks.map((t) =>
      t.id === editId ? { ...t, name: editValue.trim() } : t
    );
    this.saveTasks(newTasks);
    this.setState({
      showEditModal: false,
      editId: null,
      editValue: "",
      error: "",
    });
  };

  // Toggle hoàn thành
  toggleComplete = (id: number) => {
    const newTasks = this.state.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.saveTasks(newTasks);
  };

  render() {
    const { tasks, newTask, error, showDeleteModal, showEditModal, editValue } =
      this.state;

    const completedCount = tasks.filter((t) => t.completed).length;

    return (
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📝 TodoList</h1>
          <p>Quản lý công việc hiệu quả</p>
        </div>

        {/* Input Section */}
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              className="task-input"
              placeholder="Nhập công việc cần làm..."
              value={newTask}
              onChange={this.handleChange}
              maxLength={100}
            />
            <button className="add-btn" onClick={this.handleAdd}>
              ➕ Thêm
            </button>
          </div>
          <div className="error-message">{error}</div>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <div className="empty-state-text">Chưa có công việc nào</div>
              <div className="empty-state-subtext">
                Hãy thêm công việc đầu tiên của bạn!
              </div>
            </div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="todo-item">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={task.completed}
                  onChange={() => this.toggleComplete(task.id)}
                />
                <span
                  className={`todo-text ${task.completed ? "completed" : ""}`}
                >
                  {task.name}
                </span>
                <div className="todo-actions">
                  <button
                    className="edit-btn"
                    onClick={() => this.openEdit(task)}
                  >
                    ✏️ Sửa
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => this.confirmDelete(task.id)}
                  >
                    🗑️ Xóa
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="task-counter">
            Đã hoàn thành:{" "}
            <span className="counter-number">{completedCount}</span> /{" "}
            <span className="counter-number">{tasks.length}</span> công việc
          </div>
          {tasks.length > 0 && completedCount === tasks.length && (
            <div
              style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}
            >
              🎉 Hoàn thành công việc!
            </div>
          )}
        </div>

        {/* Modal Delete */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Xác nhận xoá</h3>
              <p>Bạn có chắc chắn muốn xoá công việc này?</p>
              <div className="modal-actions">
                <button
                  onClick={() => this.setState({ showDeleteModal: false })}
                >
                  Hủy
                </button>
                <button onClick={this.handleDelete}>Đồng ý</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Edit */}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Sửa công việc</h3>
              <input
                type="text"
                value={editValue}
                onChange={this.handleEditChange}
                className="task-input"
              />
              <div className="modal-actions">
                <button onClick={() => this.setState({ showEditModal: false })}>
                  Hủy
                </button>
                <button onClick={this.handleUpdate}>Cập nhật</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
