// Init Firebase
const db = Firebase.getInstance().getDb();

class Projects {
    async getAllProjects() {
        const projects = await db.collection("projects").get().then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
                console.log(doc.data());
                return doc.data();
            });
        });

        return projects;
    }
}