// React Template

// ================================================ JSX ==========================================================

let myTitle = <div className="WE_ARE_SOCIAL">WE ARE SOCIAL</div>;
let line = (
  <div>
    <img src="/images/Separator.png" alt=""></img>
  </div>
);
let socialBox = (
  <div className="socialBox">
    <i class="fab fa-facebook-f"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-google-plus-g"></i>
    <i class="far fa-envelope"></i>
  </div>
);
let text = (
  <div className="text">
    &#169; 2014 - <span>Kasper</span> All Right Reserved
  </div>
);

let main = (
  <div className="main">
    <img className="logo" src="/images/Logo.png" alt="1"></img>
    {myTitle}
    {line}
    {socialBox}
    {text}
  </div>
);

// Маємо скласти все в купу і можна виводити в HTML
let page = <div>{main}</div>;

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
