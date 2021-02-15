import React from 'react';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserOutlined, LockOutlined , MailOutlined} from '@ant-design/icons';

const { Option } = Select;

class RegistrationForm extends React.Component {
    // const [form] = Form.useForm();

    onFinish = (values) => {
        console.log('Received values of form: ', values)
        this.props.onAuth(
            values.username, 
            values.email,
            values.password,
            values.confirm
            );
        alert("Hello\nHow are you?");
    };
  
    render() {

        return (
            <Form
                name="register"
                onFinish={this.onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter a Username"/>
                </Form.Item>
        
                <Form.Item
                    name="email"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Enter your Email"/>
                </Form.Item>
        
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Enter a Password" />
                </Form.Item>
        
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
        
                        return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm your Password" />
                </Form.Item>
        
                <center>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginRight:'10px'}}>
                            SignUp
                        </Button>
                        or
                        <NavLink style={{marginRight:'10px'}} to='/login/'> Login
                        </NavLink>
                    </Form.Item>
                </center>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);


// const RegistrationForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };


//   return (
//     <Form
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       scrollToFirstError
//     >
//         <Form.Item
//             label="Username"
//             name="username"
//             rules={[
//             {
//                 required: true,
//                 message: 'Please input your username!',
//             },
//             ]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             name="email"
//             label="E-mail"
//             rules={[
//             {
//                 type: 'email',
//                 message: 'The input is not valid E-mail!',
//             },
//             {
//                 required: true,
//                 message: 'Please input your E-mail!',
//             },
//             ]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             name="password"
//             label="Password"
//             rules={[
//             {
//                 required: true,
//                 message: 'Please input your password!',
//             },
//             ]}
//             hasFeedback
//         >
//             <Input.Password />
//         </Form.Item>

//         <Form.Item
//             name="confirm"
//             label="Confirm Password"
//             dependencies={['password']}
//             hasFeedback
//             rules={[
//             {
//                 required: true,
//                 message: 'Please confirm your password!',
//             },
//             ({ getFieldValue }) => ({
//                 validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                     return Promise.resolve();
//                 }

//                 return Promise.reject('The two passwords that you entered do not match!');
//                 },
//             }),
//             ]}
//         >
//             <Input.Password />
//         </Form.Item>

//         <center>
//             <Form.Item>
//                 <Button type="primary" htmlType="submit" style={{marginRight:'10px'}}>
//                     Login
//                 </Button>
//                 or
//                 <NavLink style={{marginRight:'10px'}} to='/signup/'> Signup
//                 </NavLink>
//             </Form.Item>
//         </center>
//     </Form>
//   );
// };
