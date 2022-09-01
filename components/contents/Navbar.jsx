import { Typography, Row, Col } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

const Navbar = () => {
  return (
    <ManuBar>
      <Row>
        <Col>
          <Title type='warning' level={3}>
            BaithomDev
          </Title>
        </Col>
        <Col>
          <Title style={{ color: '#fff' }} level={4}>
            Home
          </Title>
        </Col>
      </Row>
      <Row>
        <Title style={{ color: '#fff' }} level={4}>
          BaithomDev
        </Title>
      </Row>
    </ManuBar>
  )
}

export default Navbar

const ManuBar = styled.div`
  border: 0px;
  padding: 20px;
  background-color: #464141;
  display: flex;
  justify-content: space-between;
`
