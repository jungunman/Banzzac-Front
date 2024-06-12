class LogUtil {
  static colors = [
    "green",
    "blue",
    "purple",
    "teal",
    "#6C4AB6",
    "#EB6440",
    "#497174",
    "#472D2D",
    "#54BAB9",
    "#C060A1",
  ];
  static log = (randIdx?: number, ...props: any) => {
    const randomIdx = randIdx ?? Math.floor(Math.random() * this.colors.length);
    console.log(`%c %s`, `color:${this.colors[randomIdx]}`, ...props);
  };
  static error = (...props: any) => {
    console.log(`%c %s`, "color:red", ...props);
  };
}

export default LogUtil;
