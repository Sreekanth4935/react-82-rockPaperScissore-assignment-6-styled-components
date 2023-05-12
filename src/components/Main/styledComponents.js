import Styled from 'styled-components'

export const MainContainer = Styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  color: #ffffff;
  font-family: 'Bree Serif';
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ScoreCard = Styled.div`
  border: solid 1px #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;

`
export const Score = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 5px;
  width: 100px;
`
export const ImageTopContainer = Styled.div`
 width: 330px;
  padding-top: 70px;
`
export const ImagesContainer = Styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  flex-wrap: wrap;
  width: 100%;
  
`
export const ScoreName = Styled.p`
margin-bottom: 0;
`
export const ScoreValue = Styled.p`
  margin-top: 0px;
  padding-top: 5px;
  font-size: 35px;
  font-weight: 600;
`
export const ButtonContainer = Styled.div`
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 3px;
  font-family: 'Roboto';
  width: 100%;
  background-color: transparent;
  text-align:end;
`
export const ButtonRules = Styled.button`
  border: 0;
  color: #223a5f;
  font-weight: 600;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  align-self:flex-end;
`
