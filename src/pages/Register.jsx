import { Input, Form, message } from "antd";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  //Form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("https://newsapp-kzzy.onrender.com/users/register", values);
      if (res.data.success) {
        message.success("Register User Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("Register User Failed");
    }
  };
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="card p-3">
        <h1 className="text-center">Register Form</h1>
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" required></Input>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Password" required></Input>
        </Form.Item>
        <Link to="/" className="m-2">
          Already user login here
        </Link>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
