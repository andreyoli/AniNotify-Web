import React from 'react'
import { ClipLoader } from 'react-spinners'

function Loading({ loading }) {
  return loading ? (
    <>
      <ClipLoader size={150} color={'#123abc'} />
    </>
  ) : null
}

export default Loading
