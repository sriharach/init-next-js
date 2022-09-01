import React from 'react'
import styled from 'styled-components'
import Navbar from '@/components/contents/Navbar'
import { Typography } from 'antd'

const DefaultLayout = ({ children }) => {
  const { Title } = Typography
  return (
    <>
      {' '}
      <Navbar />
      {children}
    </>
  )
}

export default DefaultLayout
