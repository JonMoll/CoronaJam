var players = [];
var x_first_player = canvas_width / 16.0;
var y_first_player = canvas_height / 10.0;

for (var i = 0; i < 4; i++)
{
    players.push(new Player());
    players[i].SetScale(0.1);
    players[i].SetPosition(x_first_player, 
                           y_first_player + (i * canvas_width / 9.5));
}
