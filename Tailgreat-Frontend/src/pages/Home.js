const Home = (props) => {
  return (
    <div className="home-page">
      <h2>Select a Tailgate</h2>
      <div className="tailgate-grid">
        {props.tailgates.map((tailgate) => (
          <div className="tailgate-card" key={tailgate.id}>
            <div onClick={() => props.chooseTailgate(tailgate)}>
              {tailgate.name}
              {tailgate.lot}
              {tailgate.image}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
