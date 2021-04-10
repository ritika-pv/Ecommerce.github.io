 $(document).ready(function(){
  /*form validation*/
  $('#zip').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
$('#cc-number').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});
$('#cc-expiration').keyup(function () { 
    this.value = this.value.replace(/[^\d{1,2}\/\d{1,2}\/\d{4}$]/,'');
});
$('#cc-cvv').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

});








 (function() {
        'use strict';

        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');

          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
      