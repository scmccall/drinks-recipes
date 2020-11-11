function NavSearchBar() {
  return (
    <div class="uk-navbar-right">
      <form class="uk-search uk-search-navbar">
        <span data-uk-search-icon></span>
        <input class="uk-search-input" type="search" placeholder="Search..."></input>
      </form>
    </div>
  );
}

function Navbar() {
  return (
    <nav class="uk-navbar uk-navbar-container">
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">Drinks and Such</a>
        <ul class="uk-navbar-nav uk-dropdown-nav">
          <li class=""><a href="#">Recipes</a></li>
          <li class="">
            <a href="#">Liquors</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
                <li><a href="#">Vodka</a></li>
              </ul>
            </div>
          </li>
          <li class=""><a href="#">About</a></li>
        </ul>
      </div>
      <NavSearchBar />
    </nav>
  );
};

export default Navbar;