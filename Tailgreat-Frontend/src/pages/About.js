const About = () => {
  return (
    <div className="about-page">
      <h1>
        <u> About TailGreat </u>
      </h1>
      <p className="about-paragraph">
        TailGreat was created to serve those who don't just go to a sporting
        event to watch the game. We want to provide users with a place to
        celebreate before and after a game with other fans. Many tailgates open
        themselves up to others, but many people have no way of ever finding
        those great tailgates. TailGreat provides a hub for people to register a
        tailgate and open it up to others, or offers a place for people to find
        that perfect tailgate. Don't sit on the sidelines anymore! TailGreat is
        a perfect way to make lifelong friends with fans from the team you love
        the most!
      </p>
      <div className="about-me-container">
        <div className="pfp-container">
          <img className="pfp" src="https://i.imgur.com/c5dGGsT.jpg" />
        </div>
        <div className="about-me">
          <h2> Jeff Carroll </h2>
          <a
            href="https://www.linkedin.com/in/jeff-carroll-dev/"
            target="_blank"
          >
            LinkedIn |
          </a>
          <a href="https://github.com/jcarr048" target="_blank">
            {' '}
            GitHub{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
