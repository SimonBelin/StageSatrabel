// $(function() {
//     $('#special').tooltip();
// })
    // $('#collapsible').collapse('show'); //Expand item
    // $('#collapsible').collapse('hide'); //Hide item
    // $('#collapsible').collapse('toggle'); //Change element visibility to opposite


    // $(document).ready(function() {
    //     $('a.btn').on('click', function(){
    //       $(this).toggleClass('btn-danger');
    //     });
    // });
// Carousel
$('.carousel').carousel({interval: 6000})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

// Collapse

var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})

//Tabs
$('#myTab a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
  })
//Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  //Validation du formulaire
  // Example starter JavaScript for disabling form submissions if there are invalid fields
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