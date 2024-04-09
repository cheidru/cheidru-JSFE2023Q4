export function createFooter() {
    // Footer includes the school's logo and name, 
    // the author's name, a link to the author's GitHub, 
    // and the year of the app creation
    const footer = document.createElement('div');
    footer.setAttribute('id', 'chat-footer');
    document.body.append(footer);

    const schoolLogo = document.createElement('a');
    schoolLogo.setAttribute('href', 'https://app.rs.school/');
    // ToDo attach logo SVG
    footer.append(schoolLogo);
   
    const authorGHub = document.createElement('a');
    authorGHub.setAttribute('href', 'https://github.com/cheidru');
    authorGHub.textContent = 'Igor Checheurov';
    footer.append(authorGHub);
   
    const appYear = document.createElement('p');
    appYear.setAttribute('id', 'app-year');
    appYear.textContent = '2024';
    footer.append(appYear);
}

export function modal(message) {

}

function powerLayer() {
    
}

