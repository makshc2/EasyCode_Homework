class HomeUI {
    constructor() {
        this.userName = document.querySelector('.user-name');
        this.projectsContainer = document.querySelector('.projects-list-wrapper .container .row');
    }

    setUserName(email) {
        this.userName.textContent = email;
    }

    // Generate project card template
    generateProjectCards(projects) {
        console.log(projects);
        this.projectsContainer.innerHTML = '';
        // Show alert
        if (!projects.length) return this.projectsContainer.insertAdjacentHTML("afterbegin", HomeUI.projectListEmpty());
        projects.forEach(project => this.projectsContainer.insertAdjacentHTML("afterbegin", HomeUI.projectCardTemplate(project)));
    }

    // Show alert if projects array empty
    static projectListEmpty() {
        const template = `
            <div class="col-12 alert alert-warning">Empty projects list</div>
        `;

        return template;
    }

    // HTML Template for project card
    static projectCardTemplate(project) {
        const template = `
            <div class="col-4">
                <div class="card" data-id="${project.id}">
                  ${project.img ? `<img class="card-img-top" src="${project.img}" alt="Card image cap">` : ''}
                  <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="#" class="btn btn-primary">Edit</a>
                    <a href="#" class="btn btn-danger delete-btn">Delete</a>
                  </div>
                </div>
            </div>
        `;

        return template;
    }
}