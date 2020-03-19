var cards_hand = [];
var x_first_card_hand = canvas_width / 3.5;
var y_first_card_hand = canvas_height / 1.2;

for (var i = 0; i < 6; i++)
{
    cards_hand.push(new Card());
    cards_hand[i].SetScale(0.225);
    cards_hand[i].SetPosition(x_first_card_hand + (i * canvas_width / 8), 
                              y_first_card_hand);
}

cards_hand[0].SetTemplate("../images/red_card.png");
cards_hand[0].SetColorText(0xffffff);
