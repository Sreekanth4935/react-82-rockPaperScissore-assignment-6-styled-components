import {
  ImageElements,
  TextAndImageAlign,
  ResultContainer,
  ResultTextDetails,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const ResultView = props => {
  const {
    choicesList,
    choiceId,
    opponentId,
    resultText,
    renderPlayAgainButton,
  } = props

  const choiceImageUrl = choicesList.filter(
    eachChoice => eachChoice.id === choiceId,
  )[0].imageUrl

  const opponentImageUrl = choicesList.filter(
    eachChoice => eachChoice.id === opponentId,
  )[0].imageUrl

  return (
    <>
      <ResultContainer>
        <TextAndImageAlign>
          <ResultTextDetails>YOU</ResultTextDetails>
          <ImageElements src={choiceImageUrl} alt="your choice" />
        </TextAndImageAlign>

        <TextAndImageAlign>
          <ResultTextDetails>OPPONENT</ResultTextDetails>
          <ImageElements src={opponentImageUrl} alt="opponent choice" />
        </TextAndImageAlign>
      </ResultContainer>

      <ResultButtonContainer>
        <p>{resultText}</p>
        <PlayAgainButton onClick={renderPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </>
  )
}

export default ResultView
