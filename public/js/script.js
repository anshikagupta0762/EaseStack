// kbhi kbhi form m kuch required chize fill n krne pr wahan msg show hota h jese field required..or bhi missing like thiat..toh ye alg alg browser k hisab se alg alg msg show hota h us msg ko ek jesa standarized rhe, ek jese msg show ho koi bhi browser se toh uske liye bootstrap se ye logic chepa h....

// isse achha bootstrap m form validation pdh lo....
// sath m novalidation ka mtlb and needs-validation class k baare m bhi...ek sath bootstrap k form validation k document m mil jayega..!!

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()