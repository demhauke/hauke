
//    function timeRefresh(time) {
//    setTimeout("location.reload(true);", time);
//    }

function reload() {
    setTimeout("location.reload")
}


function change_discord() {
    document.getElementById("d_button_id").innerHTML = 'Discord';
}
function change_nintendo() {
    document.getElementById("n_button_id").innerHTML = 'Nintendo';
}


function copy_discord() {
    document.getElementById("d_button_id").innerHTML = 'kopiert!';
    navigator.clipboard.writeText('dem Hauke#5791');
    setTimeout(change_discord, 800)  
}

function copy_nintendo() {
    document.getElementById("n_button_id").innerHTML = 'kopiert!';
    navigator.clipboard.writeText('SW-8087-1043-0728');
    setTimeout(change_nintendo, 800)  
}
