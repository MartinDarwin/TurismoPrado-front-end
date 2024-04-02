import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Inicio</CustomLink>
        <CustomLink to="/hotels">Hoteles</CustomLink>
        <CustomLink to="/restaurants">Restaurantes</CustomLink>
        <CustomLink to="/boats">Alquiler de Lanchas</CustomLink>
        <CustomLink to="/managereserve">Reservas realizadas</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
