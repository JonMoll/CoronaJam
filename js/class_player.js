class Player
{
    constructor()
    {
        this.name = "Name";
        this.number = "0";
        this.path_icon = "../images/player_icon.png";
        this.path_red = "../images/red.png";
        this.path_zar = "../images/zar.png";
        
        this.CreateContainer();
        this.DrawIcon();
        this.DrawName();
        this.DrawNumber();
        this.DrawRed();
        this.DrawZar();
    }

    CreateContainer()
    {
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
    }

    DrawIcon()
    {
        this.icon_texture = PIXI.Texture.from(this.path_icon);
        this.icon_obj = new PIXI.Sprite(this.icon_texture);
        this.icon_obj.anchor.set(0.5);
        this.container.addChild(this.icon_obj);
    }

    DrawName()
    {
        this.name_style = new PIXI.TextStyle({
            align: "center",
            fontWeight: "bold",
            fontSize: canvas_height / 5.0,
        });
        
        this.name_obj = new PIXI.Text(this.name, this.name_style);
        this.name_obj.anchor.set(0.5);
        this.name_obj.y = canvas_height / 1.45;
        this.container.addChild(this.name_obj);
    }

    DrawNumber()
    {
        this.number_style = new PIXI.TextStyle({
            align: "center",
            fontWeight: "bold",
            fontSize: canvas_height / 2.5,
        });
        
        this.number_obj = new PIXI.Text(this.number, this.number_style);
        this.number_obj.anchor.set(0.5);
        this.number_obj.y = canvas_height / 1.0;
        this.container.addChild(this.number_obj);
    }

    DrawRed()
    {
        this.red_texture = PIXI.Texture.from(this.path_red);
        this.red_obj = new PIXI.Sprite(this.red_texture);
        this.red_obj.anchor.set(0.5);
        this.red_obj.x = canvas_width / 1.9;
        this.container.addChild(this.red_obj);
    }

    DrawZar()
    {
        this.zar_texture = PIXI.Texture.from(this.path_zar);
        this.zar_obj = new PIXI.Sprite(this.zar_texture);
        this.zar_obj.anchor.set(0.5);
        this.zar_obj.x = canvas_width / 1.0;
        this.container.addChild(this.zar_obj);
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
}