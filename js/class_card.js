class Card
{
    constructor()
    {
        this.text = "None";
        this.path_template = "../images/white_card.png";
        this.path_art = "../images/apple.png";
        
        this.CreateContainer();
        this.DrawTemplate();
        this.DrawText();
        this.DrawArt();
    }

    CreateContainer()
    {
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
    }

    DrawTemplate()
    {
        this.template_texture = PIXI.Texture.from(this.path_template);
        this.template_obj = new PIXI.Sprite(this.template_texture);
        this.template_obj.anchor.set(0.5);
        this.container.addChild(this.template_obj);
    }

    DrawText()
    {
        this.text_style = new PIXI.TextStyle({
            align: "center",
            fontWeight: "bold",
            fontSize: canvas_height / 11.0,
            
            wordWrap: true,
            wordWrapWidth: canvas_width / 2.2
        });
        
        this.text_obj = new PIXI.Text(this.text, this.text_style);
        this.text_obj.anchor.set(0.5);
        this.text_obj.y = - canvas_height / 3.5;
        this.container.addChild(this.text_obj);
    }

    DrawArt()
    {
        this.art_texture = PIXI.Texture.from(this.path_art);
        this.art_obj = new PIXI.Sprite(this.art_texture);
        this.art_obj.anchor.set(0.5);
        this.art_obj.y = canvas_height / 3.5;
        this.container.addChild(this.art_obj);
    }

    // ======================================================================

    SetScale(scale)
    {
        this.container.scale.x = scale;
        this.container.scale.y = scale;
    }
    
    SetPosition(x, y)
    {
        this.container.x = x;
        this.container.y = y;
    }

    SetText(text)
    {
        this.text = text;
        this.text_obj.text = this.text;
    }

    SetArt(path_art)
    {
        this.path_art = path_art;
        this.art_texture = PIXI.Texture.from(this.path_art);
        this.art_obj.texture = this.art_texture;
    }
}
