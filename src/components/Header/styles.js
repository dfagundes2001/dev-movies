import { styled } from 'styled-components'

export const DivHeader = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 1s ease-in-out;

  img {
    width: 30%;
    margin: 15px 30px;
  }
`
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin-top: 45px;
  margin-right: 4%;
`
export const Li = styled.li`
  font-weight: 600;
  font-size: 50px;
  position: relative;
  height: 70px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }

  &::after {
    content: '';
    height: 7px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background: green;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`
