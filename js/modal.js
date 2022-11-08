function openModal(){
    let open = document.querySelector(".confirm-alert")
    open.setAttribute("class","confirm-alert active")
}

function closeModal(){
    let close = document.querySelector(".confirm-alert.active")
    close.setAttribute("class", "confirm-alert")
}