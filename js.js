let copied_text = false;

function timeRefresh(time) {
    setTimeout("location.reload(true);", time);
}

function copy_discord() {
    document.getElementById("button_id").innerHTML = 'kopiert!';
    navigator.clipboard.writeText('dem Hauke#5791')
}
