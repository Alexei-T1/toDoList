export const board = (color = "brown", width = "0.4em") => {
  const board = document.createElement('div');
  Object.assign(board.style, {borderWidth: width,  borderColor: color});
  board.classList.add("clBoardBack", "clBoardFonAdd");
  return board;
}