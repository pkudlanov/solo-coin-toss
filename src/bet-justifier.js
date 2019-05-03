function betJustifier(betAmount, selfWorth, gameResult){
    if (gameResult){
        var money = selfWorth + parseInt(betAmount);
        return money;
    } else {
        money = selfWorth - betAmount;
        return money;
    }
}

export default betJustifier;