import { Link } from 'react-router-dom'
import styled from 'styled-components'

/*------------------------------------------------------------Video------------------------------------------------------------*/

export const LoginVideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const LoginContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const LoginContentContainer = styled.div`
  width: 75%;
  @media (max-width: 525px) {
    width: 90%;
  }
`
export const LoginVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.75);
`

/*------------------------------------------------------------Content------------------------------------------------------------*/

export const LoginHeader = styled.div`
  width: 100%;
  text-align: center;
`
export const VsLogo = styled.img`
  width: clamp(240px, 34%, 600px);
  margin: 1.5rem auto;
  display: block;
  @media (max-width: 1260px) {
    margin: auto;
  }
`
export const LoginSubtitle = styled.p`
  margin: 2rem auto 0;
  font-size: 0.46rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  @media (max-width: 768px) {
    letter-spacing: 5px;
  }
`
export const LoginForm = styled.form`
  width: 100%;
  display: grid;
  place-items: center;
`
export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem auto 1rem;
  border: none;
  @media (max-width: 1260px) {
    flex-direction: column;
    gap: 30px;
  }
`
export const LoginInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 1.5rem 2rem;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 0;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;

  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    ::placeholder {
      color: white;
    }
  }

  @media (max-width: 1260px) {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    ::placeholder {
      opacity: 1;
      color: white;
    }
  }
`
export const LoginButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 0;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: white;
  background-color: rgb(129, 8, 8);
  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.552);
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(129, 8, 8, 0.837);
  }
`

export const ToSingupLink = styled(Link)`
  font-size: 0.95rem;
  margin: 1rem auto;
  padding: 0.3rem;
  color: rgb(255, 255, 255);
  text-align: center;
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.837);
  }
`
