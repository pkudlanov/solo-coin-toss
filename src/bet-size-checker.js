function betSizeChecker(bet, moneyHas){
    if(bet >= moneyHas){
        return false;
    }else{
        return true;
    }
}

export default betSizeChecker;