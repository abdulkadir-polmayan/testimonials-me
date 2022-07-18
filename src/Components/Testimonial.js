export default function Testimonial(props){
    return(
        <div className="testimonials">
            <div className="testimonial">
            <div className="photo"></div>
            <div className="text">
                <h2>{props.name}</h2>
                <h4>{props.job}</h4>
                <p>{props.comment}</p>
                <button onClick={props.showComment}>click for comment</button>
                
            </div>
            </div>
        </div>
        
    )
}