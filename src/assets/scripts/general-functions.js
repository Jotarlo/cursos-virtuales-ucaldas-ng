function ShowNotificationMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    $('#messageModal').modal()
}

function ShowRemoveConfirmationModal(){
    $('#removeConfirmationModal').modal();
}

//alert(`Hola 3`);