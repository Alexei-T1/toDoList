

// lastBlock = {nameBlock: null, date: null, src: null}

export const loadWindow = ( lastBlock ) => {

  const elLoadWindow = document.createElement('div');
  elLoadWindow.classList.add("stWindow");

  const elTitle = document.createElement('div');
  elTitle.innerText = "Загрузите требуемый блок проектов, используйте последний или создайте новый";
  elTitle.classList.add("titleBase", "stWindowTitleIn");

  const elActions = document.createElement('div');
  elActions.classList.add("centerFx");
  const elListActions = document.createElement('ul');
  elListActions.classList.add("stWindowActions");

  const elCreateBlock = document.createElement('li');
  const elCreateButton = document.createElement('button');
  elCreateButton.classList.add("buttonBase");
  elCreateButton.textContent = "создать";
  elCreateBlock.append(elCreateButton);
  const elLoadBlock = document.createElement('li');
  const elLoadButton = document.createElement('button');
  elLoadButton.classList.add("buttonBase");
  elLoadButton.textContent = "загрузить";
  elLoadBlock.append(elLoadButton);

  elListActions.append(elCreateBlock, elLoadBlock);
  elActions.append(elListActions);

  const elLastBlock = document.createElement('div');
  elLastBlock.classList.add("stWindowLast");
  const elListLastBlockProp = document.createElement('ul');

  const elListProps = (( lastBlock ) => {

    const elPropName = document.createElement('li');
    const elTitleName = document.createElement('div');
    const elDataName = document.createElement('div');
    elPropName.append(elTitleName, elDataName);

    if(!lastBlock) {
      const noLast = document.createElement('div');
      noLast.innerText = "данных о последнем загруженом блоке нет";
      return noLast;
    }
    else {
      // elListActions.append(кнопка)
      // кнопка загрузить последний блок
    }
  })();
  elListLastBlockProp.append(elListProps);
  elLastBlock.append(elListLastBlockProp);

  elLoadWindow.append(elTitle, elLastBlock, elActions);
  return elLoadWindow;
}