const Home = (props) => {
  return (  
    <>
      <h1>Homies Page</h1>
      <div className="card">
        <img 
          src="https://picsum.photos/id/398/640/480" 
          className="card-img-top" 
          alt="..." 
          // style={{ width: '18rem' }}
        
        />
        <div className="card-body">
          <h5 className="card-title">Find a Restroom</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      <div className="card">
        <img 
          src="https://picsum.photos/id/676/640/480" 
          className="card-img-top" 
          alt="..." 
          // style={{ width: '18rem' }}
        
        />
        <div className="card-body">
          <h5 className="card-title">Find a Restaurant</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      <div className="card">
        <img 
          src="https://picsum.photos/id/648/640/480" 
          className="card-img-top" 
          alt="..." 
          // style={{ width: '18rem' }} 
        />
        <div className="card-body">
          <h5 className="card-title">Find Parking</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>

      {/* <div>
        <h2>Find a Restroom</h2>
      </div>
      <div>
        <h2>Find a Restaurant</h2>
      </div>
      <div>
        <h2>Find Parking</h2>
      </div> */}
    </>


  );
}
 
export default Home;