const github = new Github();
const ui = new UI();
const searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', (e) => {
   const userText = e.target.value;
   ui.showPreloader();

   if(userText !==''){
       // github.getUser(userText)
       //     .then(user => {
       //         if(user.message === 'Not Found'){
       //             ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
       //             ui.clearProfile();
       //         }else{
       //             ui.showProfile(user);
       //             ui.clearAlert();
       //         }
       //         return user;
       //     })
       //     .then(user => github.getRepos(user))
       //     .then(repos => ui.showRepos(repos))
       //     .catch(err => console.log(err));

       github.getUserAsync(userText)
           .then(info => {
               if(info.userData.message === 'Not found'){
                   ui.showAlert(`User: ${userText} not found`, 'alert alert-danger');
                   ui.clearProfile();
               }else {
                   ui.showProfile(info.userData);
                   ui.showRepos(info.reposData);
               }
           });
   }else{
       ui.clearProfile();
   }
});

