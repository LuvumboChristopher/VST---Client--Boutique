import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'

/*------------------------------------------------------------Store------------------------------------------------------------*/

const Icon = ({ className, children }) => (
  <FaAngleUp className={className}>{children}</FaAngleUp>
)
export const TopButtonContainer = styled.div`
  position: relative;
`
export const TopButtonIcon = styled(Icon)`
  z-index: 99;
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #000000;
  border: 1px solid #fff;
  height: 40px;
  width: 40px;
  padding: 0.45rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    background: rgba(255, 255, 255, 0.89);
    color: #000000;
    border: 1px solid #000000;
  }
`

export const StoreContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1580px;
`

export const StoreHeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    top: 0;
    position: fixed;
    z-index: 1;
  }
`

export const StoreHeaderContent = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    text-align: center;
  }
`

export const HeaderStyle = styled.div`
  width: 100%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const LogoStore = styled.img`
  width: clamp(165px, 25%, 350px);
  margin: 1.3rem auto;
`

export const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 85%;
    margin: 10.5rem auto 0;
    border: none;
    display: grid;
    place-items: center;
  }
`

export const Copyright = styled.div`
  width: 100%;
  margin: auto;
  padding: 3.5rem;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
`
/*------------------------------------------------------------StoreNav------------------------------------------------------------*/

export const StoreNavContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
`

export const StoreNavButtons = styled(Link)`
  width: 105px;
  height: 50px;
  margin: 0;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  display: grid;
  place-items: center;
  background-color: black;
  border: 1px solid black;
  transition: all 0.18s linear;
  &:hover {
    background-color: rgb(129, 8, 8);
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    border: none;
  }
`
export const BacktoSiteButton = styled(StoreNavButtons)`
  color: black;
  background-color: white;
  &:hover {
    color: white;
    background-color: rgb(129, 8, 8);
  }
  @media (max-width: 768px) {
    background: transparent;
    color: black;
  }
`

export const Amount = styled.span`
  width: 25px;
  height: 25px;
  color: white;
  background-color: black;
  position: absolute;
  display: grid;
  place-items: center;
  bottom: 20px;
  left: 30px;
  font-size: 0.8em;
`

export const CartButton = styled(StoreNavButtons)`
  background-color: rgb(129, 8, 8);
  &:hover {
    color: white;
    background-color: black;
  }
  &:hover ${Amount} {
    color: white;
    background-color: rgb(129, 8, 8);
  }
`

export const CartButtonContainer = styled.div`
  position: relative;
  text-align: center;
  display: grid;
  place-items: center;
  margin: 0;
`

export const DropDownContent = styled.div`
  padding: 2rem auto;
  display: none;
  position: absolute;
  color: black;
  background-color: #ffffff;
  min-width: 315px;
  border: 1px solid black;
  border-top: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
  @media (max-width: 768px) {
    width: 100vw;
    margin: auto;
    border-bottom: 1px solid black;
  }
`

export const DropDown = styled.div`
  position: relative;
  color: rgb(0, 0, 0) !important;
  background-color: rgb(255, 255, 255) !important;
  &:hover ${DropDownContent} {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DropDownLink = styled(Link)`
  width: 100%;
  margin: auto;
  padding: 1.5rem;
  font-size: 0.98rem;
  text-decoration: none;
  gap: 17px;
  display: flex;
  color: black;
  &:hover {
    color: white;
    background: black !important;
    border-top: 1px solid white;
  }
`

/*------------------------------------------------------------Search------------------------------------------------------------*/

export const SearchWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
`
export const SearchInput = styled.input`
  width: 100%;
  margin: auto;
  border: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.5rem;
  &:focus {
    outline: none;
  }
`
export const SearchResultContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
`
/*------------------------------------------------------------Vinylist------------------------------------------------------------*/

export const VinylListContainer = styled.div`
  width: 100%;
  margin: 1.5rem auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`
export const ListWrapper = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylList = styled.div`
  @media (min-width: 1340px) {
    width: 100%;
    margin: 1.5rem auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, minmax(0, 100%));
    gap: 1rem 6rem;
  }
  @media (min-width: 1640px) {
    width: 100%;
    margin: 3rem 0;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, minmax(0, 100%));
    gap: 5rem 4rem;
  }
  
`

/*------------------------------------------------------------VinylistItem------------------------------------------------------------*/



export const VinylItem = styled.div`
  width: 275px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 631px) and (max-width: 1639px) {
    width: 100%;
    margin: 2rem auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  @media (max-width: 1339px) {
    margin: 3.5rem auto;
  }
  @media (max-width: 630px) {
    width: 100%;
    margin: 2.5rem auto 4.5rem;
  }
  @media (min-width: 425px) and (max-width: 630px)   {
    max-width: 405px;
  }
`

export const VinylCoverContainer = styled.div`
  width: 190px;
  margin: auto;
`
export const VinylCover = styled.img`
  width: 100%;
  margin: 0 auto;
  transition: all 0.18s ease-in-out;
  cursor: pointer;
  border: 1px solid white;
  :hover {
    transform: scale(1.028);
    box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 631px) {
    width: 220px;
  }
  @media (min-width: 768px) {
    width: 275px;
  }
`

export const VinylInfoContainer = styled.div`
  width: 100%;
  margin: 1rem auto 0;
  @media (min-width: 1024px) and (max-width: 1290px) {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    ;
  }
`

export const VinylData = styled.div`
  width: 100%;
  margin: auto;
`
export const VinylDataTitle = styled.h1`
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const VinylDescription = styled.p`
  width: 100%;
  margin: 5px auto;
  text-align: justify;
  fontsize: 0.7rem;
`

export const VinylPurchase = styled.div`
  width: 100%;
  margin: 1.5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VinylPurchaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${(props) => (props.voir ? 'black' : 'transparent')};
  border: 1px solid black;
  font-size: 0.7rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: ${(props) => (props.voir ? 'white' : 'black')};
  opacity: 1;
  transition: all 0.18s linear;
  &: hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) => (props.voir ? 'black' : 'rgb(129, 8, 8)')};
  }
`
