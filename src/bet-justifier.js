function betJustifier(betAmount, selfWorth, gameResult){
    if(gameResult){
        var money = selfWorth + betAmount;
        return money;
    }else{
        var money = selfWorth - betAmount;
        return money;
    }
}

export default betJustifier;