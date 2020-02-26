let english = ["hello", "house", "water", "cake"];
let vietnamese = ["xin chao", "ngoi nha", "nuoc uong", "banh ngot"];
function show() {
    let keyword = document.getElementById('search').value;
    let count = 0;
    for (i = 0; i < english.length; i++) {
        if (keyword == english[i]) {
            document.getElementById('p1').innerHTML = vietnamese[i];
            count =1;
            break;
        }
    }
    if (count==0) {
        document.getElementById('p1').innerHTML = "khong tim thay";
    }
}

function reset() {
    document.getElementById('search').value = '';
    document.getElementById('p1').innerHTML = '';
}