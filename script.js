var github = [
    {
        title:"COVID-19 Tracker",
        img:"imgs/Covid-19.PNG",
        link:"https://github.com/iamkryptonite/COVID_Tracker",
        details:"This app uses an external API to track the daily statewise increase in Covid-19 patients in India and uses Graphs.js library for data visualization."
    },
    {
        title:"Secure Chat App",
        img:"imgs/secure-chat-app.PNG",
        link:"https://github.com/iamkryptonite/Secure-Chat_App",
        details:"Secure Chat app uses Socket.io framework .Only the users that are tagged can see the message. It also requires authentication to use the app."
    },
    {
        title:"HR Dashboard",
        img:"",
        link:"https://github.com/iamkryptonite/HR--Portal",
        details:"This is a HR management dashboard where the admin can add new employees ,and assign tasks to them. They can also track the tasks completed."
    },
    {
        title:"Yelpcamp",
        img:"",
        link:"https://github.com/iamkryptonite/YelpCamp",
        details:"Yelpcamp is a clone of  yelp.com but for campsites.Users can add, comment and edit campsites."
    },
    {
        title:"TODO App",
        img:"",
        link:"https://github.com/iamkryptonite/TODO_APP",
        details:"This is a simple todo app using React and Redux. Users can add, edit and delete tasks ."
    }

];
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instance1 = M.Sidenav.init(elems, {
        edge: 'right',
        draggable: false,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: false
    });
    var modal = document.getElementById('modal1');
    var instance2 = M.Modal.init(modal,{
        inDuration:500,
        outDuration:100,
        preventScrolling:false,
        draggable:false
    }); 
    setTimeout(function(){
        instance2.open();
    },3000)
  });