class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    
    // showUserRepos(repos){
    //     let repoOutput = document.getElementById('repos');
    //      for(var r=0; r<repoOutput.length; r++){
    //         repoOutput.innerHTML = `
    //          <div class="card card-body mb-3">
    //             <div class="row">
    //              <div class="col-md-6">
    //                  <a class="mb-6" href="${repoOutput.html_url}" target="_blank">${repoOutput.name}</a>
    //              </div>
    //              <div class="col-md-6">
    //                  <span class="badge badge-primary p-2">Stars: ${repoOutput.stargazers_count}</span>
    //                  <span class="badge badge-secondary p-2">Watchers: ${repoOutput.watchers_count}</span>
    //                  <span class="badge badge-success p-2">Forks: ${repoOutput.forks_count}</span>
    //              </div>
    //             </div>
    //         </div>    
    //         `;
    
    //      }
    // }

    showUserRepos(repos){
        const repoOutput = document.getElementById('repos');
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a class="mb-6" href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        repoOutput.innerHTML = output;
    }

    clearProfile(){
        this.profile.innerHTML = "";
    }

    showAlert(message, className){
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert(){
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}