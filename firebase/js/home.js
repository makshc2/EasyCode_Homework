// Auth init
const auth = new Auth();

// Projects service init
const projects = new Projects();

// Init User
const user = User.getInstance();

// Init HomeUI
const ui = new HomeUI();


// Init elements
const signOut = document.querySelector('.sign-out');
const projectsContainer = document.querySelector('.projects-list-wrapper');

// Check Auth
firebase.auth().onAuthStateChanged(function(authUser) {
    if (!authUser) {
        // Redirect on login page if user not auth
        window.location = 'login.html';
    }
    else {
        // Set user
        user.setUser({ email: authUser.email });
        ui.setUserName(authUser.email);
    }
});


signOut.addEventListener('click',  (e) => {
    auth.signout()
        .then(status => {
            if (status) {
                window.location = 'login.html';
            }
        })
        .catch(error => {
            console.log(error);
        })
});

// Get projects
projects.getAllProjects()
    .then(projectsArray => ui.generateProjectCards(projectsArray))
    .catch(error => console.log(error));


// Delete project
projectsContainer.addEventListener('click', (e) => {

    // Check e.target === 'delete-btn'
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.closest('.card').dataset.id;
        // Delete project
        projects.deleteProject(id)
            .then(projects.getAllProjects)
            .then(projectsArray => ui.generateProjectCards(projectsArray))
            .catch(error => console.log(error));
    }

});













