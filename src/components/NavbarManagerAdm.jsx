import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavbarManagerAdm() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Inicio</CustomLink>
        <CustomLink to="/managehoteladm">Gestionar Hotel</CustomLink>
        <CustomLink to="/managerestaurantadm">Gestionar Restaurante</CustomLink>
        <CustomLink to="/manageboatadm">Gestionar Alquiler de Lanchas</CustomLink>
        <CustomLink to="/manageuser">Gestionar Usuarios</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
