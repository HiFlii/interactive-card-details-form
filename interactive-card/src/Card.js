import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className = "card-container">
                <img className = "card-image" src={props.img}>
                </img>
                {(props.logo) ? (<img className = "card-logo" src={props.logo}></img>) : (<></>) }
            </div>
        </>
    )
}

export default Card;