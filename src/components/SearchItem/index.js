import React, { memo } from 'react'

import { Container } from './styles'
import { convertDate } from '../../utils/convertDate'
import { cropString } from '../../utils/cropString'

function SearchItem(props) {
  return (
    <Container href="http://google.com" target="_blank">
      <img src={props.img} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>
          {cropString(
            props.desc,
            350,
            "Sorry, this anime don't have a description"
          )}
        </p>
      </div>
      <strong>
        {props.nextEp != null ? `${convertDate(props.nextEp)}` : 'Finalizado'}
      </strong>
    </Container>
  )
}
export default memo(SearchItem)
