import {ImgButton, Image} from './styledComponents'

const ShowCards = props => {
  const {eachItem} = props
  const {id, imageUrl} = eachItem
  const smallCase = id.toLowerCase()
  //   console.log(`${smallCase}Button`)

  return (
    <li>
      <ImgButton data-testid={`${smallCase}Button`}>
        <Image src={imageUrl} alt="your choice" />
      </ImgButton>
    </li>
  )
}

export default ShowCards
