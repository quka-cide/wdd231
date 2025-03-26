const openDialogButtons = document.querySelectorAll('.open-dialog');
const dialogs = document.querySelectorAll('dialog');
const closeDialogButtons = document.querySelectorAll('.close-dialog');

openDialogButtons.forEach(button => {
  button.addEventListener('click', function () {
    const dialogId = this.getAttribute('data-dialog');
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  });
});

closeDialogButtons.forEach(button => {
  button.addEventListener('click', function () {
    const dialog = this.closest('dialog');
    dialog.close();
  });
});


const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

let time = document.getElementById('timestamp');
if (time) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });
    time.value = formattedDate;
}

let results = document.querySelector('#results');
if(results) {
    results.innerHTML = `
    <p>Thank you for your application ${myInfo.get('fname')} ${myInfo.get('lname')}!</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Your email is: ${myInfo.get('email')}</p>
    <p>Your Business Name: ${myInfo.get('organizationName')}</p>
    <p>Today's Date: ${myInfo.get('timestamp')}</p>
    `;
}
