
export const load = (load = 'load... ') => {
  const elLoad = document.createElement('div');
  elLoad.innerText = load;
  elLoad.classList = "clLoad";
  return elLoad;
}