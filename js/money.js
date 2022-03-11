function Money(obj)
{
    this.money = obj.config;
    this.messages = obj.messages;
    this.wins = obj.wins;
    this.Bet = 10;
    this.coef =  [2,2,3,7,16];

    this.init = function(){}


    this.actionLose = function()
    {
        this.messages.userMessage('lose', 'red');

        if(this.money.Total - this.Bet >= 0)
        {
            this.money.Total -= this.Bet;
        }
        else
        {
            if(this.money.Total)
            {
                this.Bet = this.money.Total;
                this.actionLose();
            }
            else
                this.Bet = 0 ;

        }
    }

    this.actionWin = function(index)
    {
        this.messages.userMessage('win', 'gold', 'blink');
        var priseWin = this.Bet * this.coef[index]
        this.money.Total += priseWin;
    }

}

