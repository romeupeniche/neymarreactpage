import './Img.css'

export default props => 
    <div className='img-container'>
        <img className='image' src={props.link} alt={props.alt} />
        <p className='inner-text'>{`Cabelo do Neymar em ${props.alt}`}</p>
    </div>