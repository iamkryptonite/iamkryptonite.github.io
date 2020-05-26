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
        preventScrolling:true,
        draggable:false
    }); 
    setTimeout(function(){
        instance2.open();
    },3000)
  });