let schedule = document.getElementById("schedule");
let date = document.getElementById("currentDay")
date.textContent = moment().format('MMMM Do YYYY');
for (let i = 0; i < 25; i++) {
    let row = document.createElement("div")
    let time = document.createElement("p");
    let textArea = document.createElement("textarea");
    let textLabel = document.createElement ("label");
    let button = document.createElement("button");
    let timeStamp = moment().format('MMMM Do YYYY, hha')
    let hour = timeStamp.split(" ")
    
    if (i<13){
        time.textContent = i + "am";
        thing(i);
    }
    else{
        time.textContent = (i-12) + "pm";
        thing(i);
    }
    function thing(i){
        row.setAttribute("class", "row col-11");
        let floating = "floatingTextarea"+i;
        time.setAttribute("class", "col d-flex justify-content-end my-auto")
        textArea.setAttribute("id", floating);
        textArea.setAttribute("class", "form-control col-9")
        textLabel.setAttribute("for", floating)
        button.setAttribute("class", "btn btn-info")
        button.textContent= "save"
        let timeContent=time.innerText;
        let buttonNum = "button" + i;
        button.addEventListener("click", function(){
            localStorage.setItem(buttonNum, textArea.value )
        });
        textArea.textContent=localStorage.getItem(buttonNum) 
        setInterval (function(){
            if (timeContent !== hour[3]){
                textArea.setAttribute("class", "form-control col-9")

            }
            else if (timeContent === hour[3]){
                textArea.setAttribute("class", "form-control col-9 bg-danger")
                
            }
            else{
                textArea.setAttribute("class", "form-control col-9 bg-success")
                }
        },1000)
        
        
    }
    schedule.append(row);
    row.append(time);
    row.append(textArea);
    row.append(button);
}


