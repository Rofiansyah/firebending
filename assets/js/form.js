// ==================== FORM JS ====================
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeHxcGNZXiRf0LZv7OUTbPQOfdpEPFy0Cvs7-stGECo9AQuc-_rteUkFV9AM3lG4mt7w/exec'
const form = document.forms['Firebending']
const send = document.querySelector('.button-send')
const loading = document.querySelector('.button-loading')
const alert = document.querySelector('.section__title_3')


  form.addEventListener('submit', e => {
    e.preventDefault()

    // sending
    loading.classList.toggle('d-none')
    send.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // loading
        loading.classList.toggle('d-none')
        send.classList.toggle('d-none')
        alert.classList.toggle('d-none')

        // reset form
        form.reset()

        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })

  if(alert){
    alert.addEventListener('click', () =>{
      alert.classList.toggle('d-none')
    })
  }