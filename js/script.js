window.onload = function () {
    let game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create });
    let slots;
    let buttons
    let money;
    let messages;
    buttonsEnable = true;

    function preload () {
        messages = new Messages({
            'game': game,
            'gameLang': gameLang
        });
        game.stage.backgroundColor = '#ffffff';

        money = new Money({
            'config': moneyConfig,
            'messages': messages,
            'wins': wins
        });

        slots = new Slot({
            'game': game,
            'wins': wins,
            'money': money,
            'messages': messages
        });
        slots.loadSprite();

        buttons = new Buttons({
            'game': game,
            'messages': messages,
            'money': money,
            'slots': slots
        });
        buttons.loadSprite();
    }

    function create () {
        money.init();
        buttons.init();
        slots.init();
    }
}
