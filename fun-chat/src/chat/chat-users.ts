export function showUserPanel(parent: HTMLElement) {
  const userPanelWrapper = document.createElement('div');
  userPanelWrapper.setAttribute('id', 'user-panel-wrapper');
  parent.append(userPanelWrapper);

  const userSearch = document.createElement('input');
  userSearch.setAttribute('id', 'user-search');
  userSearch.setAttribute('placeholder', 'Search...');
  userPanelWrapper.append(userSearch);

  const userList = document.createElement('ul');
  userList.setAttribute('id', 'user-list');
  userPanelWrapper.append(userList);
}

// export function addUserItem(userList: []) {};
