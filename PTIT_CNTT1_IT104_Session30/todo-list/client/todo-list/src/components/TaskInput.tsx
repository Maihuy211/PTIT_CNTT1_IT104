import { Button, Form, Input, type FormProps } from "antd";

type FieldType = {
  nameTask?: string;
};

interface TaskInputProps {
  addTask: (nameTask: string) => void;
  error: string;
}

export default function TaskInput({ addTask, error }: TaskInputProps) {
  const [form] = Form.useForm<FieldType>();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    addTask(values.nameTask || "");
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" bg-white shadow-lg p-4 rounded  border-gray-100 border-2">
      <Form
        form={form}
        name="addTask"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> name="nameTask">
          <Input className="h-[40px]" placeholder="Nhập tên công việc" />
        </Form.Item>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-[100%] !h-[40px]"
          >
            Thêm công việc
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
