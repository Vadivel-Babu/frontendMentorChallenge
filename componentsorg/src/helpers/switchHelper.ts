export function getSwitchSize(size: string) {
  switch (size) {
    case "sm":
      return {
        width: "40px",
        height: "20px",
        thumbSize: "16px",
        position: "2px",
        onPosition: "20px",
      };
    case "lg":
      return {
        width: "60px",
        height: "30px",
        thumbSize: "24px",
        position: "3px",
        onPosition: "31px",
      };
    case "md":
      return {
        width: "50px",
        height: "25px",
        thumbSize: "20px",
        position: "2px",
        onPosition: "26px",
      };
  }
}
