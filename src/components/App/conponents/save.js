//             <Roll>
//                 <div id="flex">
//                     <div className="about">
//                         <div>
//                             <Form onSubmit={this.handleSubmit} className="login-form">
//                                 <Form.Item label="E-mail">
//                                     {getFieldDecorator('email', {
//                                         rules: [
//                                             {
//                                                 message: 'The input is not valid E-mail!',
//                                                 type: 'email',
//                                             },
//                                             {
//                                                 message: 'Please input your E-mail!',
//                                                 required: true,
//                                             },
//                                         ],
//                                     })(<Input />)}
//                                 </Form.Item>
//                                 <Form.Item label="Password">
//                                     {getFieldDecorator('password', {
//                                         rules: [
//                                             {
//                                                 message: 'Please input your Password!',
//                                                 required: true,
//                                             },
//                                         ],
//                                     })(
//                                         <Input
//                                             prefix={
//                                                 <Icon
//                                                     type="lock"
//                                                     style={{ color: 'rgba(0,0,0,.25)' }}
//                                                 />
//                                             }
//                                             type="password"
//                                             placeholder="Password"
//                                         />,
//                                     )}
//                                 </Form.Item>
//                                 <Form.Item>
//                                     {getFieldDecorator('remember', {
//                                         initialValue: true,
//                                         valuePropName: 'checked',
//                                     })(<Checkbox>Remember me</Checkbox>)}
//                                     Or{' '}
//                                     <Link href="/register">
//                                         <a>register now!</a>
//                                     </Link>
//                                 </Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     className="login-form-button"
//                                 >
//                                     Log in
//                                 </Button>
//                                 &nbsp; &nbsp;
//                                 <Button
//                                     type="primary"
//                                     htmlType="button"
//                                     className="login-form-button"
//                                 >
//                                     Switch to Sign Up
//                                 </Button>
//                             </Form>
//                         </div>
//                     </div>
//                     <style jsx>{`
//             .about {
//                 height:100%;
//                 width: 80%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 justify-content: space-around;
//                 margin: 30px;
//             }
//             .about_head {
//                 background-color: #D2AC2C;
//                 height:80px;
//                 width: 90%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 justify-content: space-around;
//                 padding-top: 7px;
//                 margin: 20px;
//                 border-radius: 40px:
//             }
//             .about_us {
//               background-color: #333E51;
//               height:65px;
//               width: 90%;
//               color: #D2AC2C;
//               text-align: center;
//               padding-top: 7px;
//               border-radius: 40% 30% 50% / 20% 40%;

//             }
//             #flex {
//               display: flex;
//               flex-wrap: wrap;
//               justify-content: space-around;
//               background-color: #CAD0D7;
//               height: 100vh;
//           }

// `}</style>
//                 </div>
//             </Roll>;
