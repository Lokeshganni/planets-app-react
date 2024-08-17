import './index.css'

const PlanetItem = ({obj}) => {
  const {name, imageUrl, description} = obj
  return (
    <div className="slider-item-container">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
