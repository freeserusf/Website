function DemoArrays(){
    const myclass = ["AGRICULTURE", "COMMERCIAL", "TRANSPORTATION"]
    let classlength = myclass.length;

    let text = "<ul>";
    for (let i =0; i < classlength; i++)
    {
        text += "<li>" + myclass[i] + "</li>";
        document.getElementById("MyList").innerHTML = text;
    }
    text += "</ul>";

 }