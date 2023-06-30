import styles from './index.module.scss'
import logoLeft from '@/assets/images/login_left.png'
import { Card, Form, Input, Button, Row, Col } from 'antd'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { LoginData } from '@/types/data'
import { login } from '@/api/login'

function Login() {
  const [form] = Form.useForm()
  const onReset = () => {
    form.resetFields()
  }
  const onSubmit = async (value: LoginData) => {
    console.log(value)
    const res = await login(value)
    console.log('res', res.data)
  }
  return (
    <div className={styles.root}>
      <div className="frostedGlass">
        <div className="login_left">
          <img src={logoLeft} alt="" />
        </div>
        <div className="loginForm">
          <Card style={{ width: '500px' }}>
            <div className="title">Gin-Admin</div>
            <Form
              autoComplete="off"
              validateTrigger={['onChange', 'onBlur']}
              form={form}
              onFinish={onSubmit}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '用户名不能为空' }]}
              >
                <Input placeholder="请输入用户名" size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input type="password" placeholder="请输入密码" size="large" />
              </Form.Item>
              <Form.Item style={{ marginTop: '40px' }}>
                <Row>
                  <Col span={10}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      icon={<UserOutlined />}
                      shape="round"
                    >
                      登录
                    </Button>
                  </Col>
                  <Col span={10} offset={4}>
                    <Button
                      htmlType="button"
                      onClick={onReset}
                      icon={<CloseCircleOutlined />}
                      style={{ color: 'grey' }}
                      size="large"
                      block
                      shape="round"
                    >
                      重置
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
