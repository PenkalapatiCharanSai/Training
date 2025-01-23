for(let i = 0; i<=5; i++){
    for(let j = 0; j<=5; j++){
        document.writeln("*")
    }
    document.writeln("<br>")
}

document.writeln("<br>")

for(let i = 0; i<=5; i++){
    for(let j = 0; j<=i; j++){
        document.writeln("*")
    }
    document.writeln("<br>")
}

document.writeln("<br>")    

for(let i = 1; i<=5; i++){
    for(let j = 1; j<=5; j++){
        if(i==j || i+j==6){
            document.writeln("*")
    }else{
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
    }
    
}document.writeln("<br>")}




