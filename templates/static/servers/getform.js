let uname;
let qu;

function query_data() {
    uname = document.getElementById("uname").value;
    qu = document.getElementById("qu").value;
    if (uname.trim() === "" || qu.trim() === "") 
    {
        alert("form data is mandatory")
    }
    //document.write("Thanks for contacting us! We will try to respond as soon as possible." + "<br>")
    //document.write("Name: " + uname + "<br>")
    //document.write("question/commment: " + "<br>")
    //document.write(qu)
}

function append_data() {
    document.getElementById("editable-p1").innerHTML = "Thanks for contacting us! We will try to respond as soon as possible." + "<br>";
    document.getElementById("editable-p2").innerHTML = "Name: " + uname + "<br>";
    document.getElementById("editable-p3").innerHTML = "Question/comment: " + "<br>";
    document.getElementById("editable-p4").innerHTML = qu;
}