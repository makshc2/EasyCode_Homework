class Github {
    constructor(){
        this.client_id = 'fa137b13d6a0d922bf56';
        this.client_secret = 'e954c93e2cd9179b31bc5ecbaa643972d018eba6';
    }
    //
    // getUser(name){
    //     return new Promise((resolve, reject) =>{
    //         fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    //             .then(res => res.json())
    //             .then(user => resolve(user))
    //             .catch(err => reject(err));
    //     })
    // }
    //
    // getRepos(user){
    //     return new Promise((resolve, reject) =>{
    //         if(!user.login)  reject('User not found');
    //         fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    //             .then(res => res.json())
    //             .then(user => resolve(user))
    //             .catch(err => reject(err));
    //     })
    // }

    async getUserAsync(name){
        const user = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repos = await fetch(`https://api.github.com/users/${name}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const userData = await user.json();
        const reposData = await repos.json();

        return{userData, reposData};
    }
}
