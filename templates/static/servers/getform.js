console.stdlog = console.log.bind(console)
console.logs = []
console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
data = []

function query_input() {
    let uname = document.getElementById("uname");
    let qu = document.getElementById("qu");
    data.push(uname)
    data.push(qu)
    }


function query_data() {
    if (data[0].trim() === "" || data[1].trim() === "") 
    {
        alert("form data is mandatory");
        return false;
    }
    //document.write("Thanks for contacting us! We will try to respond as soon as possible." + "<br>")
    //document.write("Name: " + uname + "<br>")
    //document.write("question/commment: " + "<br>")
    //document.write(qu)
    return true;
}

function append_data(quElement, unameElement) {
    document.getElementById("editable-p1").innerHTML = "Thanks for contacting us! We will try to respond as soon as possible." + "<br>";
    document.getElementById("editable-p2").innerHTML = "Name: " + data[0] + "<br>";
    document.getElementById("editable-p3").innerHTML = "Question/comment: " + "<br>";
    document.getElementById("editable-p4").innerHTML = data[1];
}

