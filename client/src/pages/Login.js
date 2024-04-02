import React from "react";
import anime from 'animejs/lib/anime.es.js'; // Importa anime.js desde tu proyecto
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    var current = null;
    document.querySelector('#email').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0, // Ajusta el valor según tu longitud inicial deseada
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '185 500', // Ajusta la longitud de la línea
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#password').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -389,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '185 500',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#submit').addEventListener('focus', function (e) {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 700,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '185 500',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }, []);

  //form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/admin/login", values);
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Inicio de sesión con éxito");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Algo va mal");
    }
  };

  return (
    <div className="page">
      <div className="containerLogin">
        <div className="left">
          <div className="loginstyle">
        <img src="logo_login.svg" alt="Tu SVG" /></div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300" className="svg">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  style={{ stopColor: "#09ff00ab" }}
                  offset="0"
                  id="stop876"
                />
                <stop
                  style={{ stopColor: "#001ba3" }}
                  offset="1"
                  id="stop878"
                />
              </linearGradient>
            </defs>
            <path
              className="path"
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
          </svg>
          <div className="form">
            <Form
              layout="vertical"
              onFinish={onFinishHandler}
              className="register-form"
            >
              <label htmlFor="email" className="label">
                Email
              </label>
              <Form.Item name="email">
                <Input type="email" id="email" />
              </Form.Item>
              <label htmlFor="password" className="label">
                Password
              </label>
              <Form.Item name="password">
                <Input type="password" id="password" />
              </Form.Item>
              <input
                type="submit"
                className="input"
                id="submit"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;