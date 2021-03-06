/**
 * Created by Ian on 2016/2/27.
 */
ns.ui.initTheme = function (style) {
    ns.ui.themes.hina = {};
    (function (hina) {
        hina.mainstageStyle = {
            width: style.width,
            height: style.height,
            "background-color": "#f3f3f3",
            "background-size": style.width+"px "+style.height+"px",
            position: "relative",
            "font-family": "YouYuan, Microsoft YaHei UI, Microsoft Yahei, 黑体"
        };
        // hina.mainstageStyle["background-image"] = "url('tmp/e/koharu.jpg')";
        hina.figureStyle = {
            width: style.width,
            position: "absolute",
            bottom: 0,
            "text-align": "center"
        };
        hina.figureImageStyle = {
            height: 0.8 * style.height
        };
        hina.contentStyle = {
            width: style.width * 0.7,
            height: style.height / 4,
            position: "absolute",
            bottom: 0,
            "background-image": "url('tmp/e/sf.png')"
        };
        hina.dialogueStyle = {
            width: "inherit",
            height: "inherit",
            "background-color": "#87CEEB",
            "opacity": 0.4
        };
        var widthContent = hina.contentStyle.width;
        var heightContent = hina.contentStyle.height;
        hina.contentStyle.left = (style.width - widthContent) / 2;
        hina.dialogueStyle["border-radius"] = (widthContent/2) + "px/" + (heightContent/2) + "px";
        hina.speakerStyle = {
            "background-color": "#87CEEB",
            position: "absolute",
            left: 0,
            top: 0
        };
        hina.dialStyle = {
            "font-size": "150%",
            position: "absolute",
            left: widthContent / 8,
            top: heightContent / 5
        };
        hina.mergeStyle = {
            width: 0.3 * style.width,
            position: "absolute",
            top: 0.25 * style.height
        };
        var mergeWidth = hina.mergeStyle.width;
        hina.mergeStyle.left = (style.width - mergeWidth) / 2;
        hina.choiceStyle = {
            width: "inherit",
            height: "45px",
            "background-color": "rgba(135, 206, 235, 0.5)",
            "font-size": "150%",
            "padding": "5px",
            "margin-bottom": "10px",
            "text-align": "center"
        };
        hina.choiceStyle["line-height"] = hina.choiceStyle.height;

    })(ns.ui.themes.hina);
};

ns.ui.themes = {};


// change theme in ns.control.theme