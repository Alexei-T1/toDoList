

// lastBlock = {nameBlock: null, date: null, src: null}

export const loadWindow = ( lastBlock ) => {

  const elLoadWindow = document.createElement('div');

  const elTitle = document.createElement('div');
  elTitle.innerText = "Загрузите требуемый блок проектов, используйте последний или создайте";

  const elLastBlock = document.createElement('div');
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
      // кнопка загрузить последний блок
    }

  })()

  elLoadWindow.append(elTitle, elListProps);
  return elLoadWindow;
}