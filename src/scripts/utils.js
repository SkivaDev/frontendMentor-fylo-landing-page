const validateFormEmail = (form: HTMLFormElement) => {

  form?.addEventListener('submit', (e)=> {
      e.preventDefault()
      const input =  (e.target as HTMLInputElement)?.querySelector('input')!.value.trim();
      if(input === "") {
          showError(`Can't be blank`, e.currentTarget as HTMLFormElement)
      }else if(!validateEmail(input)){
          showError(`Please check your email`, e.currentTarget as HTMLFormElement)
      }else {
          showSuccess('Thanks for surscribe!!!', e.currentTarget as HTMLFormElement)
      }
  })
} 

export default validateFormEmail