var people = []
function add() {
    
    
    const n = document.getElementById('fullname');
    const a = document.getElementById('amount');

    
    fname = n.value;
    amt = a.value;

    if (fname != '' && amt != '') {
        var table = document.getElementById("usertable");
        var r = document.getElementById("usertable").rows.length - 1;
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = fname;
        cell1.colSpan = "2";
        people[r] = fname;
        cell1.type = "text";
        cell2.innerHTML = amt;
        n.value = '';
        a.value = '';
    }
    
    
}

function pick() {
    var row = document.getElementById("usertable").rows.length - 1;
    if (row != 0){
        let a = Math.floor(Math.random() * row) + 1;
        document.getElementById("congrats").innerHTML = "Congratulations!!"; 
        var lucky = document.getElementById("lucky");
        lucky.innerHTML = people[a-1];
    }
}