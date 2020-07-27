function ShowNotificationMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    $('#messageModal').modal()
}

function ShowRemoveConfirmationModal(){
    $('#removeConfirmationModal').modal();
}

function closeModal(modalId){
    $('#' + modalId).modal('hide');
}

//alert(`Hola 3`);