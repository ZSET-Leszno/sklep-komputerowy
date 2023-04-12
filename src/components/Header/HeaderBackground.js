import classes from "./HeaderBackground.module.css";

import image from "../../asset/background.png";

const HeaderBackround = () => {
  return (
    <section className={classes.background}>
      <img src={image} alt="bacground img" />
      <div className={classes.info}>
        <h1>Sale -30%</h1>
      </div>
    </section>
  );
};

export default HeaderBackround;
