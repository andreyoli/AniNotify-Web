import styled from 'styled-components'
import { opacify } from 'polished'

export const WrapperImg = styled.div`
  height: 250px;
  width: 150px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 1px 0px 40px 0px ${props => opacify(-0.6, props.color)};

  img {
    filter: contrast(150%);
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    object-fit: cover;
  }
`

export const Container = styled.div`
  height: 400px;
  width: auto;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  }
  p {
    color: #efeff1;
    text-align: justify;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  }
`

export const ContainerLeft = styled.div`
  position: relative;
  padding: 20px;
  box-shadow: 1px 0px 10px 0px rgba(2, 30, 56, 0.3);
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 212, 255, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
  }
`
export const ContainerRight = styled.div`
  position: relative;
  padding: 20px;
  height: 95%;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  width: 500px;
  background-color: rgba(5, 6, 6, 0.9);
  box-shadow: 1px 0 10px 0 rgba(2, 30, 56, 0.4);
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Li = styled.li`
  /* background-image: linear-gradient(90deg, rgba(254, 225, 64, .1) 0%, rgba(250, 112, 154, .1) 100%); */
  /* background-image: linear-gradient(45deg, rgba(82, 172, 255, .1) 25%, rgba(255, 227, 44, .1) 100%); */
  position: relative;
  background-size: cover;
  transition: all 500ms;
  border-radius: 10px;
  overflow: hidden;
`

export const BgImage = styled.div`
  /* backdrop-filter: saturate(90%) blur(100px); */
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  border-radius: 10px;
  filter: blur(40px) contrast(300%) brightness(150%);
  width: 100%;
  height: 100%;
  z-index: -1;
`
