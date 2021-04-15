import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-projects" role="menuitem">
                <Link to={`/projects`}>Projects</Link>
              </li>
              <li className="nav-travel" role="menuitem">
                <Link to={`/travel`}>Travels</Link>
              </li>
            </ul>
          </nav>

          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>

          <nav id="swup" className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-photos" role="menuitem">
                <Link to={`/photos`}>Photography</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
                {/* <Link to={`/grad-photos`}>Graduation</Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <a href="https://github.com/geomin76" target="_blank">
          <img
            style={{ height: 55, paddingRight: 5, paddingLeft: 5 }}
            src="https://cdn4.iconfinder.com/data/icons/miu-social/60/github-social-media-512.png"
          />
        </a>

        <a href="https://www.instagram.com/geomin76/" target="_blank">
          <img
            style={{ height: 45, paddingRight: 5, paddingLeft: 5 }}
            src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png"
          />
        </a>

        <a href="https://twitter.com/geomin76" target="_blank">
          <img
            style={{ height: 55, paddingRight: 5, paddingLeft: 5 }}
            src="https://cdn4.iconfinder.com/data/icons/miu-social/60/twitter-social-media-512.png"
          />
        </a>

        <a href="https://www.linkedin.com/in/geomin76/" target="_blank">
          <img
            style={{ height: 34, paddingRight: 5, paddingLeft: 5 }}
            src="https://cdn0.iconfinder.com/data/icons/global-top-brands/430/linkedin-logo-1-512.png"
          />
        </a>
      </footer>
    </div>
  )
}

export default Layout
