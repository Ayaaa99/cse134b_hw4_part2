class projectCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:'open'});

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class','wrapper');
        let projname = document.createElement('h2');
        let projimg = document.createElement('img');
        projimg.setAttribute("alt", "This is a image of the project.");
        let descript = document.createElement('p');
        let readmore = document.createElement('a');
        wrapper.append(projname,projimg,descript,readmore);

    }
}