import { createCommonUI, winnerList, contentWrapper } from '../common';

export function createWinners() {
  createCommonUI();
  const winnerTitle = document.createElement('div');
  winnerTitle.setAttribute('id', 'winner-title');
  winnerTitle.textContent = `Garage (${winnerList.length})`;
  contentWrapper.append(winnerTitle);
  const winnerPageNum = document.createElement('div');
  winnerPageNum.setAttribute('id', 'winner-page');
  winnerPageNum.textContent = '1';
  contentWrapper.append(winnerPageNum);
  const winnerListWrapper = document.createElement('div');
  winnerListWrapper.setAttribute('id', 'winner-list');
  contentWrapper.append(winnerListWrapper);
}
