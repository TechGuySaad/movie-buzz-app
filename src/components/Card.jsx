// import Jw from './jw.jpg'

export default function Card({name,image,description}){
    return <div className="card">
        <img src={image} alt="banner" />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
}