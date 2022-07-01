let AccentColor = ColorTranslator.FromHtml("#60CDFF");
let AccentColor_Secondary = multiplyRGB(AccentColor,1,1,1,0.9);
let AccentColor_Tertiary = multiplyRGB(AccentColor,1,1,1,0.8);
let Contrasted_AccentColor = multiplyHSL(multiplyRGB(multiplyRGB(AccentColor,0.004,0.004,0.004,1),255,255,255,1),1,1,1.1,1);
let BackgroundColor = ColorTranslator.FromHtml("#2C2C2C");
let IntVar = 0;
let ArrayVar = ["yo","bien","ou","bien?"];
let MenuLenght = 6;

// Colors (Picked from the Figma project)

let Dark_Background_FillColor_SolidBackground_Base = ColorTranslator.FromHtml("#202020");
let Dark_Background_FillColor_SolidBackground_Tertiary = ColorTranslator.FromHtml("#282828");

let Dark_Background_FillColor_CardBackground_Default = ColorTranslator.FromHtml("#0DFFFFFF");
let Dark_Background_FillColor_CardBackground_Secondary = ColorTranslator.FromHtml("#08FFFFFF");

let Dark_Background_FillColor_Acrylic_Default = ColorTranslator.FromHtml("#2C2C2C");

let Dark_FillColor_Accent_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

let Dark_FillColor_Control_Default = ColorTranslator.FromHtml("#0FFFFFFF");
let Dark_FillColor_Control_Secondary = ColorTranslator.FromHtml("#15FFFFFF");
let Dark_FillColor_Control_Tertiary = ColorTranslator.FromHtml("#08FFFFFF");
let Dark_FillColor_Control_Disabled = ColorTranslator.FromHtml("#11FFFFFF");
let Dark_FillColor_Control_InputActive = ColorTranslator.FromHtml("#B21E1E1E");

let Dark_FillColor_ControlAlt_Secondary = ColorTranslator.FromHtml("#19000000");
let Dark_FillColor_ControlAlt_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");
let Dark_FillColor_ControlAlt_Quarternary = ColorTranslator.FromHtml("#12FFFFFF");

let Dark_FillColor_Subtle_Secondary = ColorTranslator.FromHtml("#0FFFFFFF");
let Dark_FillColor_Subtle_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");

let Dark_FillColor_Text_Primary = ColorTranslator.FromHtml("#FFFFFF");
let Dark_FillColor_Text_Secondary = ColorTranslator.FromHtml("#CBFFFFFF");
let Dark_FillColor_Text_Tertiary = ColorTranslator.FromHtml("#8BFFFFFF");
let Dark_FillColor_Text_Disabled = ColorTranslator.FromHtml("#5DFFFFFF");

let Dark_FillColor_TextOnAccent_Primary = ColorTranslator.FromHtml("#000000");
let Dark_FillColor_TextOnAccent_Disabled = ColorTranslator.FromHtml("#87FFFFFF");

let Dark_FillColor_AccentText_Primary = multiplyHSL(AccentColor,0.96,1,1.15,1);
let Dark_FillColor_AccentText_Secondary = multiplyHSL(AccentColor,0.96,1,1.15,1);
let Dark_FillColor_AccentText_Tertiary = multiplyRGB(AccentColor,1,1,1,1);

let Dark_Elevation_Control_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
let Dark_Elevation_Control_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");
let Dark_Elevation_AccentControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
let Dark_Elevation_AccentControl_Border_2 = ColorTranslator.FromHtml("#24000000");
let Dark_Elevation_TextControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
let Dark_Elevation_TextControl_Border_2 = ColorTranslator.FromHtml("#8BFFFFFF");
let Dark_Elevation_Circle_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
let Dark_Elevation_Circle_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");

let Dark_StrokeColor_ControlStroke_Default = ColorTranslator.FromHtml("#12FFFFFF");

let Dark_StrokeColor_ControlStrongStroke_Default = ColorTranslator.FromHtml("#8BFFFFFF");
let Dark_StrokeColor_ControlStrongStroke_Secondary = ColorTranslator.FromHtml("#9EFFFFFF");
let Dark_StrokeColor_ControlStrongStroke_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

let Dark_StrokeColor_SurfaceStroke_Flyout = ColorTranslator.FromHtml("#33000000");

let Dark_StrokeColor_CardStroke_Default = ColorTranslator.FromHtml("#19000000");

let Dark_StrokeColor_DividerStroke_Default = ColorTranslator.FromHtml("#15FFFFFF");