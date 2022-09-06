import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
  return (
    <>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href=""> caio.cesarads@gmail.com</a>
        </p>
      </div>
    </>
  )
}
export default Header
