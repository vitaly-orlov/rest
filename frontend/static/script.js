$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
        url:'http://127.0.0.1:8000/users/?format=json',
        type:'GET',
        // data: {},
        success:function (res) {

            for (var item in res){

                var block = document.createElement('div');
                block.classList.add('users');

                var url = document.createElement('p');
                var urlText = document.createTextNode('URL = ' + res[item].url + '');
                url.appendChild(urlText);

                var username = document.createElement('p');
                var usernameText = document.createTextNode('User Name = ' + res[item].username + '');
                username.appendChild(usernameText);

                var email = document.createElement('p');
                var emailText = document.createTextNode('Email = ' + res[item].email + '');
                email.appendChild(emailText);



                block.appendChild(url);
                block.appendChild(username);
                block.appendChild(email);

                document.getElementsByTagName('body')[0].appendChild(block);

            }

        }

    });


});


