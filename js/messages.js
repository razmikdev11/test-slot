function Messages(obj)
{
    this.game = obj.game;
    this.Lang = obj.gameLang;
    this.counter = 0;

    this.userMessage = function(message, color, blink)
    {
        var k = this.Lang[message].length;
        this.game.world.remove(this.text);
        this.text = this.game.add.text(400 - k * 12 , 115, this.Lang[message], { font: '44px cursive', fill: color });
        if(typeof blink !== 'undefined')
        {
            this.game.timer = this.game.time.create(false);
            this.game.timer.loop(500, this.updateCounter, this);
            this.game.timer.start();
        }
    }

    this.updateCounter = function()
    {
        this.counter++;
        this.text.visible = !this.text.visible;
        if(this.counter === 4)
        {
            this.counter = 0;
            this.game.timer.stop();

        }

    }

}
