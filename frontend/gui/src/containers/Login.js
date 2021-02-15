import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class NormalLoginForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Recieved values of form:', values);
            }
        });
    }


    onFinish = (values) => {
        console.log('Success:', values);
        this.props.onAuth(values.username, values.password);
        this.props.history.push("/");
        // alert("Hello\nHow are you?");

    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        alert("Hello\nHow are you?");
    };

    

    render() {

        let errorMessage = null;
        if(this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                    <Spin />

                    :

                    <Form
                    {...layout}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                        <center>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{marginRight:'10px'}}>
                                Login
                            </Button>
                            or
                            <NavLink style={{marginRight:'10px'}} to='/signup/'> Signup
                            </NavLink>
                        </Form.Item>
                        </center>
                    </Form>
                
                }
            </div>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);     // ANT DESIGN KO LINE

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);


// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div>
//         {
            
//         <Form
//         {...layout}
//         name="basic"
//         initialValues={{
//             remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         >
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
//             label="Password"
//             name="password"
//             rules={[
//             {
//                 required: true,
//                 message: 'Please input your password!',
//             },
//             ]}
//         >
//             <Input.Password />
//         </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit" style={{marginRight:'10px'}}>
//                     Login
//                 </Button>
//                 or
//                 <NavLink style={{marginRight:'10px'}} to='/signup/'>
//                     Signup
//                 </NavLink>
//             </Form.Item>
//         </Form>
        
//         }
//     </div>
//   );
// };