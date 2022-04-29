const navbar = () => {
    return `<div id="lhs">
        <img
          src="https://img.icons8.com/pastel-glyph/344/bread-and-rye.png"
          alt=""
        />
        <p id="company-title">EatLit</p>
      </div>
      <div id="rhs">
        <form id="search">
          <input
            type="text"
            id="query"
            placeholder="Search"
            autocomplete="off"
          />
          <span class="material-symbols-outlined" id="search-icon">
            search
          </span>
        </form>

        <button id="login">Login</button>

        <button id="signup">Signup</button>
      </div>`
}

export default navbar;