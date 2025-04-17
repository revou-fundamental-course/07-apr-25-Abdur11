let viewer = prompt("Halo, silahkan masukkan nama anda.");
    console.log(viewer);
    document.getElementById("viewer-name").innerHTML = viewer;

    let indexBanner = 0;

    function nextBanner() {
        indexBanner += 1;
        showBanner();
    }
    
    function showBanner() {
        const bannerList = document.getElementsByClassName('banner-img');
    
        // Check if indexBanner is greater than the length of the bannerList
        if (indexBanner > bannerList.length - 1) {
            indexBanner = 0;
        }
    
        // Hide banner with looping
        for (let i = 0; i < bannerList.length; i++) {
            bannerList[i].style = 'display: none';
        }
    
        // Show the banner
        bannerList[indexBanner].style = 'display: block';
    }
    
    showBanner();
    
    // Set interval to change the banner every 3 seconds
    setInterval(() => {
        nextBanner();
    }, 3000);

function validateForm() {
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["dob"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["pesan"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tolong isi semua form.");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    document.forms["message-form"].reset();

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-bday").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
    const now = new Date();
    const formatted = now.toString(); //Customizeable
    document.getElementById('current-time').textContent = formatted;
}