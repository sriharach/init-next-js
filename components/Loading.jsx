import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import styled from 'styled-components'

const Loading = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 36,
      }}
      spin
    />
  )
  return (
    <Layout>
      <Spin indicator={antIcon} />
    </Layout>
  )
}

export default Loading

const Layout = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 410px;
  z-index: 999;
`
