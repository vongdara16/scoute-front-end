const RestaurantCard = (props) => {
  return (  
    <>
      <div className="card" id="home-card">
        {/* <Link to="/restrooms"> */}
          <img 
            src="https://picsum.photos/id/75/640/480" 
            className="card-img-top"
            id="restaurant-picture"
            alt="..." 
          />
          <div className="card-body" title='restrooms'>
            <h5 id="link" className="card-title">{props.restaurant}</h5>
            <span>miles</span>
            <div>
              <span>unisex </span><span>changing table </span><span>accessible</span>
            </div>
          </div>
        {/* </Link> */}
      </div>
    </>
    // <div>
    //   <h4>This is a restaurant card</h4>
    //   {console.log(props.restaurant)}
    // </div>
  );
}
 
export default RestaurantCard;