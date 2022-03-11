function Buttons(obj)
{
    this.game = obj.game;
    this.messages = obj.messages;
    this.money = obj.money;
    this.slots = obj.slots;
    this.buttonSpin = {x: 350, y: 400};

    this.loadSprite = function()
    {
        this.game.load.image('button', 'public/spinActive.png');
    }
    this.init = function()
    {
        spinActive = this.game.add.button(this.buttonSpin.x, this.buttonSpin.y, 'button', this.actionSpin, this, 2, 1, 0);
        spinActive.scale.setTo(.5, .5);
        spinActive.name = 'active';
    }

    this.actionSpin = function()
    {
        if (buttonsEnable) {
            this.slots.spin()
        }
    }
}
