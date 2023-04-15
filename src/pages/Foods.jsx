import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Common from '../components/common/Common'
import FilterFood from '../components/Filter/FilterFood'

const Foods = () => {
  return (
    <>
      <Helmet title='Foods'>
        <Common title='All Foods' />
        <FilterFood />
      </Helmet>
    </>
  )
}

export default Foods