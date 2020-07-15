function ShowNotificationMessage(message) {
    document.querySelector("#messageText").innerHTML = message;
    $('#messageModal').modal()
}

//alert(`Hola 3`);