import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavbarUser() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Inicio</CustomLink>
        <CustomLink to="/listreserve">Reservas de Hotel</CustomLink>
        <CustomLink to="/managerestaurant">Gestionar Restaurante</CustomLink>
        <CustomLink to="/about">Gestionar Alquiler de Lanchas</CustomLink>
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