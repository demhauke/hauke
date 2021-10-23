function change_discord() {
    document.getElementById("button_id").innerHTML = 'Discord';
}

function copy_discord() {
    document.getElementById("button_id").innerHTML = 'kopiert!';
    navigator.clipboard.writeText('dem Hauke#5791');
    setTimeout(change_discord, 800)  
}
