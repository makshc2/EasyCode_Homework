// Init Firebase
const db = Firebase.getInstance().getDb();

class Projects {
    async getAllProjects() {
        const projects = [];
        await db.collection("projects").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
                 // let project = doc.data();
                 // project.id = doc.id;
                 let project = Object.assign({}, doc.data(), {id: doc.id});
                 projects.push(project);
            });
        });

        return projects;
    }

    async deleteProject(id) {
        await db.collection("projects").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            return Promise.resolve();
        }).catch(error => Promise.reject(error));
    }
}