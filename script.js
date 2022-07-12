const codes = document.querySelectorAll('.code');

codes[0].focus(); // does what it looks like. Depending on array, selector value within square brackets will be focused on. In this page, it means the cursor will flash indicating to the user that they may begin putting in their account authentication.

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = '' //This allows for new input to replace the previous. Without this, the box will accept more than one number.
            setTimeout(() => codes[idx + 1].focus(), 10)
        }//Timeout needed to ensure that value gets logged into focused box.
            else if(e.key === 'Backspace') {
                setTimeout(() => codes[idx - 1].focus(), 10)
            } //Allows you to 
    })
}) 
