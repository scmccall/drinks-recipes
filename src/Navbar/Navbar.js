import { Link } from "@reach/router"

function NavSearchBar() {
  return (
    <div class="uk-navbar-right">
      <div>
        <a class="uk-navbar-toggle" data-uk-search-icon href=""></a>
        <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
          <form class="uk-search uk-search-navbar uk-width-1-1">
            <input class="uk-search-input" type="search" placeholder="search" autofocus />
          </form>
        </div>
      </div>
      {/* <form class="uk-search uk-search-navbar">
        <span data-uk-search-icon></span>
        <input class="uk-search-input" type="search" placeholder="Search..."></input>
      </form> */}
    </div>
  );
}

function Navbar() {
  return (
    <nav class="uk-navbar uk-navbar-container">
      <div class="uk-navbar-left">
        <Link to="/" class="uk-navbar-item uk-logo">Drinks and Such</Link>
        <ul class="uk-navbar-nav uk-dropdown-nav">
          <li class=""><Link to="recipes">Recipes</Link></li>
          {/*<li class="">
            <a href="#">Liquors</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
              </ul>
            </div>
          </li> */}
          <li class=""><Link to="about">About</Link></li>
        </ul>
      </div>
      <NavSearchBar />
    </nav>
  );
};

export default Navbar;