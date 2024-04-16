export function showUserPanel(parent: HTMLElement) {
    const userPanelWrapper = document.createElement('div');
    userPanelWrapper.setAttribute('id', 'user-panel-wrapper');
    parent.append(userPanelWrapper);
  
    const userSearch = document.createElement('input');
    userSearch.setAttribute('id', 'user-search');
    userPanelWrapper.append(userSearch);
  
    const userList = document.createElement('div');
    userList.setAttribute('id', 'user-list');
    userPanelWrapper.append(userList);
  }