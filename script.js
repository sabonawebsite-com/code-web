const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('dwnBadge');
const createAnother = document.getElementById('createAnother');


badgeForm.addEventListener('submit', function(event){

    event.preventDefault();

    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';


    const eventname = document.getElementById('eventname').value;
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const company = "@" + document.getElementById('company').value;
    const access = document.getElementById('access').value;

    const id = 'ID ' + Math.floor(Math.random() * 100).toString().padStart(4, '0');

    $('#badgeEvent').text(eventname);
    $('#badgeName').text(name);
    $('#badgeDesignation').text(designation);
    $('#badgecontainer').text(company);
    $('#badgeAccess').text(access);

    $('#qrcode').empty();

    $('#qrcode').qrcode({
        text: `ID : ${id} \nEvent: ${eventname}\nName: ${name}\nDesignation: ${designation}\nCompany:  ${company}\nAccess  ${access} `,
        width: 128,
        height: 128
    });

    $('#badge').css('display', 'block');
    $('#dwnBadge').css('display', 'block');
    $('#createAnother').css('display', 'block');


});


createAnother.addEventListener('click', function(){
    
    $('#badge').css('display', 'none');
    $('#dwnBadge').css('display', 'none');
    $('#createAnother').css('display', 'none');

    document.getElementById('formContainer').style.display='block';
    document.getElementById('badgeForm').reset();
})


downloadBadge.addEventListener('click', function(e){
    
  e.preventDefault();
  
  const badgeElement = document.getElementById('badge');
  htmlToImage.toPng(badgeElement)
  .then(function (dataUrl) {
    const link = document.createElement('a');
    link.download = document.getElementById('name').value+'.png';
    link.href =dataUrl;
    link.click();
  })
  .catch(function (error){
    console.error('Error converting HTML to image:'. error)
  })

})