import { Input, Form, message } from "antd";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("https://newsapp-kzzy.onrender.com/users/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/category/general");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishHandler} className="card p-3">
        <h1 className="text-center">Login Form</h1>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Password" required></Input>
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
export default Login;
