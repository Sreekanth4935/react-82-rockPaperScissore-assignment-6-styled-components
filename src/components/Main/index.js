import {Component} from 'react'
import ShowCards from '../ShowCards'
import {
  MainContainer,
  ScoreCard,
  Score,
  ImageTopContainer,
  ImagesContainer,
  ScoreName,
  ScoreValue,
  ButtonContainer,
  ButtonRules,
} from './styledComponents'

class Main extends Component {
  state = {
    score: 0,
    isPlaying: true,
    resultCard: false,
  }

  renderGameView = () => {
    const {score} = this.state
    const {choicesList} = this.props

    return (
      <>
        <MainContainer>
          <ScoreCard>
            <p>
              ROCK <br /> PAPER <br />
              SCISSORS
            </p>
            <Score>
              <ScoreName>Score</ScoreName>
              <ScoreValue>{score} </ScoreValue>
            </Score>
          </ScoreCard>
          <ImageTopContainer>
            <ImagesContainer>
              {choicesList.map(eachItem => (
                <ShowCards key={eachItem.id} eachItem={eachItem} />
              ))}
            </ImagesContainer>
          </ImageTopContainer>
          <ButtonContainer>
            <ButtonRules>RULES</ButtonRules>
          </ButtonContainer>
        </MainContainer>
      </>
    )
  }

  render() {
    const {isPlaying} = this.state

    return <>{isPlaying ? this.renderGameView() : null}</>
  }
}

export default Main
