const span = document.querySelector("#copy");

function copyTextl() {
    Swal.fire(
        'Copied!',
        'Discord Username Copied To Clickboard!',
        'success'
      )
      navigator.clipboard.writeText("FURY#6717").then(function() {
   
      }, function() {
       
      })
    
}


