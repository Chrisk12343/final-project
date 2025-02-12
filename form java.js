
    function validateLogin() {
       
        const username = document.getElementById("FullName").value;
        const password = document.getElementById("LoginPassword").value;

       
        const correctUsername = "Chris";
        const correctPassword = "Puppy";


        

       
        if (username === correctUsername && password === correctPassword) {
          
            window.location.replace("recipes.html");

        } else {
            
            document.getElementById("errorMessage").innerHTML = "Invalid username or password!";
        }
    }




