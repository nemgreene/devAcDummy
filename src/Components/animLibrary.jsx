// MENU
export let menuRailStart = {
  width: "0%",
  opacity: 0,
  left: "0vw",
};
export let menuRailFinish = (left) => ({
  width: "400%",
  opacity: 1,
  left: `${left}vw`,
});
export let menuItemDropStart = {
  transform: "translate(0%, 0%)",
};
export let menuItemDropEnd = {
  transform: "translate(0%, 100%)",
};
