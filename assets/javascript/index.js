define("index", function (require) {
  var btnForm; 
  function init() {
    bindElements();    
  }

  function bindElements() {
    btnForm = $("form input[type='submit']")

    bindActions()
  }


  function bindActions() {
    if(btnForm) {
      btnForm.on('click',function(e) {
        e.preventDefault();
        formAction();
      })
    }
  }


  function formAction() {
    
  }
  
  return  {
    init: init()
  }
});
 