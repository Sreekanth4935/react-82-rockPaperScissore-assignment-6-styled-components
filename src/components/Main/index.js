import {Component} from 'react'
import ShowCards from '../ShowCards'
import ResultView from '../ResultView'

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
    resultText: '',
    choiceId: '',
    opponentId: '',
  }

  renderPlayAgainButton = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
      resultCard: !prevState.resultCard,
    }))
  }

  checkResult = clickedObjectDetails => {
    const {choicesList} = this.props
    const {id} = clickedObjectDetails

    const randomNumber = Math.floor(Math.random() * 3)
    const randomObjectDetails = choicesList[randomNumber]
    const opponentId = randomObjectDetails.id

    let resultText = ''
    if (id === 'PAPER' && opponentId === 'ROCK') {
      resultText = 'YOU WON'
    } else if (id === 'SCISSORS' && opponentId === 'ROCK') {
      resultText = 'YOU LOSE'
    } else if (id === 'ROCK' && opponentId === 'PAPER') {
      resultText = 'YOU LOSE'
    } else if (id === 'SCISSORS' && opponentId === 'PAPER') {
      resultText = 'YOU WON'
    } else if (id === 'ROCK' && opponentId === 'SCISSORS') {
      resultText = 'YOU WON'
    } else if (id === 'PAPER' && opponentId === 'SCISSORS') {
      resultText = 'YOU LOSE'
    } else if (id === opponentId) {
      resultText = 'IT IS DRAW'
    }

    let scoreToAdd = 0
    if (resultText === 'IT IS DRAW') {
      scoreToAdd = 0
    } else if (resultText === 'YOU WON') {
      scoreToAdd = 1
    } else if (resultText === 'YOU LOSE') {
      scoreToAdd = -1
    }

    this.setState(prevState => ({
      resultCard: !prevState.resultCard,
      isPlaying: !prevState.isPlaying,
      choiceId: id,
      opponentId,
      resultText,
      score: prevState.score + scoreToAdd,
    }))
  }

  renderGameView = () => {
    const {
      score,
      isPlaying,
      resultCard,
      choiceId,
      opponentId,
      resultText,
    } = this.state
    const {choicesList} = this.props
    // console.log(isPlaying)

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
              {isPlaying &&
                choicesList.map(eachItem => (
                  <ShowCards
                    key={eachItem.id}
                    eachItem={eachItem}
                    checkResult={this.checkResult}
                  />
                ))}
            </ImagesContainer>
            {resultCard && (
              <ResultView
                choicesList={choicesList}
                choiceId={choiceId}
                opponentId={opponentId}
                resultText={resultText}
                renderPlayAgainButton={this.renderPlayAgainButton}
              />
            )}
          </ImageTopContainer>
          <ButtonContainer>
            <ButtonRules>RULES</ButtonRules>
          </ButtonContainer>
        </MainContainer>
      </>
    )
  }

  render() {
    return <>{this.renderGameView()}</>
  }
}

export default Main
