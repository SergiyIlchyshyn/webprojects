function changeTab(tab) {
    // let x = document.getElementsByClassName('single-tab');
    let x = document.querySelectorAll('.single-tab');

    x.forEach(item => {
        item.style.display = "none";
    });
    document.getElementById(tab).style.display = "block";
    // x.forEach(function(item) {
    //     console.log(item);
    // });
}