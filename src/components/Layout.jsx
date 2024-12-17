/* eslint-disable react/prop-types */
function Layout({ children }) {
  const header = (
    <header>
      <div>
        <h1 className={"text-gradient"}>CAFFIEND</h1>

        <p>For Coffee Insatiates</p>
      </div>

      <button>
        <i className="fa-solid fa-mug-hot"></i>
        Sign up for Free
      </button>
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className={"text-gradient"}>Caffiend</span> was made by{" "}
        <a
          href="https://www.linkedin.com/in/kaya-atasoy-906786257/"
          target={"_blank"}
        >
          Kaya ATASOY
        </a>{" "}
        using{" "}
        <a href="https://fantacss.smoljames.com/" target={"_blank"}>
          FantaCSS
        </a>
        .
      </p>

      <br />

      <p>
        Check out this project on{" "}
        <a href="https://github.com/ZTNimbus/coffee-tracker" target={"_blank"}>
          Github
        </a>
        .
      </p>
    </footer>
  );

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}

export default Layout;
