import { withRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
  return (
    <nav className="navtab">
      <Link to="/#about-project" className="navtab__button">
        О проекте
      </Link>
      <Link to="/#techs" className="navtab__button">
        Технологии
      </Link>
      <Link to="/#about-me" className="navtab__button">
        Студент
      </Link>
    </nav>
  );
}

export default withRouter(NavTab);
