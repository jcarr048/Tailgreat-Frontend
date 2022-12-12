const Home = (props) => {
  return (
    <div className="home-page">
      <h2>Select a Tailgate</h2>
      <div className="tailgate-grid">
        {props.tailgates.map((tailgate) => (
          <div className="tailgate-card" key={tailgate.id}>
            <div onClick={() => props.chooseTailgate(tailgate)}>
              <img src={tailgate.image} alt="tailgate-img" />
              <div className="tailgate-name">
                Tailgate Name: {tailgate.tailgateName}
              </div>
              <div className="tailgate-lot">Tailgate Lot: {tailgate.lot}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
