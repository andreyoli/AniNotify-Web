import React from 'react'
import {
  Container,
  Li,
  ContainerLeft,
  BgImage,
  ContainerRight,
  WrapperImg
} from './styles.js'
import { IconContext } from 'react-icons'
import { FaStar } from 'react-icons/fa'

import { convertDate } from '../../utils/convertDate'
import { cropString } from '../../utils/cropString'

export default function SearchItem(props) {
  return (
    <>
      <Li>
        <Container>
          <ContainerLeft>
            <WrapperImg
              color={
                props.coverColor ? props.coverColor : 'rgba(172, 18, 255, 0.5)'
              }
            >
              <img src={props.img} alt="img" />
            </WrapperImg>
            <h2>{props.title}</h2>
            <IconContext.Provider
              value={{ color: 'blue', className: 'global-class-name' }}
            >
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </IconContext.Provider>
            {/* <h3>Finge que tem estrelas aqui</h3> */}

            <p>
              {props.nextEp != null
                ? `${convertDate(props.nextEp)}`
                : 'Finalizado'}
            </p>
            <BgImage img={props.img} />
          </ContainerLeft>
          <ContainerRight>
            <p>
              {cropString(
                props.desc,
                350,
                "Sorry, this anime don't have a description"
              )}
            </p>
            <BgImage img={props.img} />
          </ContainerRight>
        </Container>
      </Li>
    </>
  )
}
