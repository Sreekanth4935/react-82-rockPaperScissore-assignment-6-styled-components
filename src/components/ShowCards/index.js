import {ImgButton, Image} from './styledComponents'

const ShowCards = props => {
  const {eachItem, checkResult} = props
  const {id, imageUrl} = eachItem
  const smallCase = id.toLowerCase()
  //   console.log(`${smallCase}Button`)

  const renderResult = () => {
    checkResult(eachItem)
  }

  return (
    <li>
      <ImgButton onClick={renderResult} data-testid={`${smallCase}Button`}>
        <Image src={imageUrl} alt="your choice" />
      </ImgButton>
    </li>
  )
}

export default ShowCards
