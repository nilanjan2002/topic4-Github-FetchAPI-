$('#sbtn2').on('click', () => {
    const username = $('#username').val();
    
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching repository data');
            }
            return response.json();
        })
        .then(profiles => {
           $('#profile tbody').append(`
               <tr>
                   <td>${profiles.name}</td>
                   <td>${profiles.bio}</td>
                   <td>${profiles.public_repos}</td>
                  </tr>
           `)
           $('#profile').css('display', 'table');
        })
        .catch(error => {
            console.log(error);
            alert(error.message);
        });
});
$('#back').on('click',()=>{
    window.location.href="/";
});
$('#sbtn1').on('click', () => {
    const owner = $('#owner').val();
    const repo = $('#repo').val();
    
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching repository data');
            }
            return response.json();
        })
        .then(data => {
           $('#datas tbody').append(`
               <tr>
                   <td>${data.name}</td>
                   <td>${data.full_name}</td>
                   <td>${data.description}</td>
                   <td>${data.language}</td>
                   <td>${data.forks}</td>
                   <td>${data.watchers}</td>
               </tr>
           `)
           $('#datas').css('display', 'table');
        })
        .catch(error => {
            console.log(error);
            alert(error.message);
        });
});
