const numberMap:any = {
    //Unidade
    0 : [
         ''		//0
        ,'I' 	//1
        ,'II'	//2
        ,'III'	//3
        ,'IV'	//4
        ,'V'	//5
        ,'VI'	//6
        ,'VII'	//7
        ,'VIII'	//8
        ,'IX'	//9				
    ]
    //Dezena
    ,1 : [
         ''		//10
        ,'X'	//10
        ,'XX'   //20
        ,'XXX'  //30
        ,'XL'   //40
        ,'L'    //50
        ,'LX'   //60
        ,'LXX'  //70
        ,'LXXX' //80
        ,'XC'   //90
    ]
    ,2 : [
        ''
        ,'C'	//100
        ,'CC'   //200
        ,'CCC'  //300				
        ,'CD'   //400
        ,'D'    //500
        ,'DC'   //600
        ,'DCC'  //700
        ,'DCCC' //800
        ,'CM' 	//900
    ]
    ,3 : [
         ''
        ,'M' //1000
    ]
};

function romanJs(input:any){		

    if(input == '') return'';
    
    var number = parseInt(input);
    
    if(number > 1999){
        return "número maximo '1999'";
    }
    

    var orderNumber = Number(input).toString();
    var orderLength = orderNumber.length;
    
    
    var unidadeDezenaCentena = orderLength - 1;
    
    
    var newOrder = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        newOrder = newOrder + orderNumber.charAt(i);
    }
    
    var finalCast = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        var auxVar = parseInt(newOrder.charAt(i));
        finalCast = finalCast + numberMap[i][auxVar];
    }
    console.log(finalCast)
    return finalCast;
    
}

romanJs(8)