var cards_table = [];
var x_first_card_table = canvas_width / 1.7;
var y_first_card_table = canvas_height / 3.0;

for (var i = 0; i < 3; i++)
{
    cards_table.push(new Card());
    cards_table[i].SetScale(0.225);
    cards_table[i].SetPosition(x_first_card_table + (i * canvas_width / 8), 
                               y_first_card_table);
}

// ======================================================================

var card_black = new Card();
card_black.SetScale(0.4);
card_black.SetPosition(canvas_width / 2.5, 
                       canvas_height / 3.0);

card_black.SetTemplate("../images/black_card.png");
card_black.SetColorText(0xffffff);
