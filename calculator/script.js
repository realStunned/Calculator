{var stash =[];}
{var result = "";}

function addNumber(number){
    if (result == "*" || result == "/" || result == "+" || result == "-"){
        addToStash(result);
        result = "";
    }
    if (result.length >= 15){
        window.alert("Number is too high");
        return;
    }
    result += number;
    document.getElementById("result").innerHTML = formatResult(result);
}

function addOperator(operator){
    if (result == "" && stash.length == 0){
        window.alert("Cant operate with nothing");
        return;
    }
    if (result == "*" || result == "/" || result == "+" || result == "-"){
        result = operator;
        document.getElementById("result").innerHTML = formatResult(result);
        return;
    }
    addToStash(result);
    result = operator;
    document.getElementById("result").innerHTML = formatResult(result);
}

function addToStash(input){
    stash.push(input);
    output = [];
    for (key in stash){
        output.push(formatResult(stash[key]));
    }
    document.getElementById("stash").innerHTML = output.join("");
}

function deleteCalculation(){
    result ="";
    stash =[];
    document.getElementById("result").innerHTML = result;
    document.getElementById("stash").innerHTML = "";
}

function deleteLastInput(){
    result = result.slice(0, -1);
    document.getElementById("result").innerHTML = formatResult(result);
}

function calculateResult(){
    if (result == "*" || result == "/" || result == "+" || result == "-"){
        result = eval(stash.join(""));
        document.getElementById("result").innerHTML = formatResult(result.toString());
        return;
    }
    addToStash(result);
    result = eval(stash.join(""));
    document.getElementById("result").innerHTML = formatResult(result.toString());
}

function formatResult(input){
    var container2 = "";
    if (input.includes(".")){
        container2 = "," + input.split(".")[1];
        input = input.split(".")[0];
    }
    if (input == "*"){
        return " x "
    }else if (input == "/"){
        return " : "
    }else if (input == "+"){
        return " + "
    }else if (input == "-"){
        return " - "
    }else if (input.length > 3){
        var container = input.split("").reverse();
        var i = 0;
        var formattedResult = [];
        for (key in container){
            if (i >= 3){
                i = 0;
                formattedResult.push(".");
            }
            formattedResult.push(container[key]);
            i++;
        }
        return formattedResult.reverse().join("") + container2;
    }else{
        return input + container2;
    }
}


