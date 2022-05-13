import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
const Login = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
    navigate(`/dashboard`);
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  return (
    <div className="loginForm">
      <img className="logo" src="../assets/logo.png" alt="logo" />
      <Form
        className="login"
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 4,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit" block onClick={routeChange}>
            Submit
            <Link to="Dashboard"></Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
