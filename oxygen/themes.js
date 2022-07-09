function setAccentColorAlts() {
    switch (theme) {
        case "dark":
            AccentColor_Secondary = multiplyRGB(AccentColor, 1, 1, 1, 0.9);
            AccentColor_Tertiary = multiplyRGB(AccentColor, 1, 1, 1, 0.8);
            Contrasted_AccentColor = multiplyHSL(
                multiplyRGB(multiplyRGB(AccentColor, 0.004, 0.004, 0.004, 1), 255, 255, 255, 1),
                1,
                1,
                1.1,
                1
            );
            FillColor_AccentText_Primary = multiplyHSL(AccentColor, 0.96, 1, 1.15, 1);
            FillColor_AccentText_Secondary = multiplyHSL(AccentColor, 0.96, 1, 1.15, 1);
            FillColor_AccentText_Tertiary = multiplyRGB(AccentColor, 1, 1, 1, 1);
            break;
        case "light":
            AccentColor_Secondary = multiplyRGB(AccentColor, 1, 1, 1, 0.9);
            AccentColor_Tertiary = multiplyRGB(AccentColor, 1, 1, 1, 0.8);
            Contrasted_AccentColor = multiplyHSL(
                multiplyRGB(multiplyRGB(AccentColor, 0.004, 0.004, 0.004, 1), 255, 255, 255, 1),
                1,
                1,
                1.1,
                1
            );
            FillColor_AccentText_Primary = multiplyHSL(AccentColor, 1.03, 1, 0.75, 1);
            FillColor_AccentText_Secondary = multiplyHSL(AccentColor, 1.1, 1, 0.55, 1);
            FillColor_AccentText_Tertiary = AccentColor;
            break;
    }
}

function setThemeColors() {
    let defaultAccentColors = ["#60CDFF", "#005FB8"];

    switch (theme) {
        case "dark":
            if (defaultAccentColors.includes(ColorTranslator.ToHtml(AccentColor))) {
                AccentColor = ColorTranslator.FromHtml("#60CDFF");
                document.getElementById("accentColor").value = AccentColor;
            }

            Background_FillColor_SolidBackground_Base = ColorTranslator.FromHtml("#202020");
            Background_FillColor_SolidBackground_Tertiary = ColorTranslator.FromHtml("#282828");

            Background_FillColor_CardBackground_Default = ColorTranslator.FromHtml("#0DFFFFFF");
            Background_FillColor_CardBackground_Secondary = ColorTranslator.FromHtml("#08FFFFFF");

            Background_FillColor_Acrylic_Default = ColorTranslator.FromHtml("#2C2C2C");

            FillColor_Accent_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

            FillColor_Control_Default = ColorTranslator.FromHtml("#0FFFFFFF");
            FillColor_Control_Secondary = ColorTranslator.FromHtml("#15FFFFFF");
            FillColor_Control_Tertiary = ColorTranslator.FromHtml("#08FFFFFF");
            FillColor_Control_Disabled = ColorTranslator.FromHtml("#11FFFFFF");
            FillColor_Control_InputActive = ColorTranslator.FromHtml("#B21E1E1E");

            FillColor_ControlAlt_Secondary = ColorTranslator.FromHtml("#19000000");
            FillColor_ControlAlt_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");
            FillColor_ControlAlt_Quarternary = ColorTranslator.FromHtml("#12FFFFFF");

            FillColor_Subtle_Secondary = ColorTranslator.FromHtml("#0FFFFFFF");
            FillColor_Subtle_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");

            FillColor_Text_Primary = ColorTranslator.FromHtml("#FFFFFF");
            FillColor_Text_Secondary = ColorTranslator.FromHtml("#CBFFFFFF");
            FillColor_Text_Tertiary = ColorTranslator.FromHtml("#8BFFFFFF");
            FillColor_Text_Disabled = ColorTranslator.FromHtml("#5DFFFFFF");

            FillColor_TextOnAccent_Primary = ColorTranslator.FromHtml("#000000");
            FillColor_TextOnAccent_Disabled = ColorTranslator.FromHtml("#87FFFFFF");

            FillColor_AccentText_Primary = multiplyHSL(AccentColor, 0.96, 1, 1.15, 1);
            FillColor_AccentText_Secondary = multiplyHSL(AccentColor, 0.96, 1, 1.15, 1);
            FillColor_AccentText_Tertiary = multiplyRGB(AccentColor, 1, 1, 1, 1);

            Elevation_Control_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
            Elevation_Control_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");
            Elevation_AccentControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
            Elevation_AccentControl_Border_2 = ColorTranslator.FromHtml("#24000000");
            Elevation_TextControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
            Elevation_TextControl_Border_2 = ColorTranslator.FromHtml("#8BFFFFFF");
            Elevation_Circle_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
            Elevation_Circle_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");

            StrokeColor_ControlStroke_Default = ColorTranslator.FromHtml("#12FFFFFF");

            StrokeColor_ControlStrongStroke_Default = ColorTranslator.FromHtml("#8BFFFFFF");
            StrokeColor_ControlStrongStroke_Secondary = ColorTranslator.FromHtml("#9EFFFFFF");
            StrokeColor_ControlStrongStroke_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

            StrokeColor_SurfaceStroke_Flyout = ColorTranslator.FromHtml("#33000000");

            StrokeColor_CardStroke_Default = ColorTranslator.FromHtml("#19000000");

            StrokeColor_DividerStroke_Default = ColorTranslator.FromHtml("#15FFFFFF");
            break;
        case "light":
            if (defaultAccentColors.includes(ColorTranslator.ToHtml(AccentColor))) {
                AccentColor = ColorTranslator.FromHtml("#005FB8");
                document.getElementById("accentColor").value = AccentColor;
            }

            Background_FillColor_SolidBackground_Base = ColorTranslator.FromHtml("#F3F3F3");
            Background_FillColor_SolidBackground_Tertiary = ColorTranslator.FromHtml("#F9F9F9");

            Background_FillColor_CardBackground_Default = ColorTranslator.FromHtml("#B2FFFFFF");
            Background_FillColor_CardBackground_Secondary = ColorTranslator.FromHtml("#7FFFFFFF");

            Background_FillColor_Acrylic_Default = ColorTranslator.FromHtml("#FCFCFC");

            FillColor_Accent_Disabled = ColorTranslator.FromHtml("#37000000");

            FillColor_Control_Default = ColorTranslator.FromHtml("#B2FFFFFF");
            FillColor_Control_Secondary = ColorTranslator.FromHtml("#7FF9F9F9");
            FillColor_Control_Tertiary = ColorTranslator.FromHtml("#4CF9F9F9");
            FillColor_Control_Disabled = ColorTranslator.FromHtml("#4CF9F9F9");
            FillColor_Control_InputActive = ColorTranslator.FromHtml("#FFFFFF");

            FillColor_ControlAlt_Secondary = ColorTranslator.FromHtml("#06000000");
            FillColor_ControlAlt_Tertiary = ColorTranslator.FromHtml("#0F000000");
            FillColor_ControlAlt_Quarternary = ColorTranslator.FromHtml("#24000000");

            FillColor_Subtle_Secondary = ColorTranslator.FromHtml("#0A000000");
            FillColor_Subtle_Tertiary = ColorTranslator.FromHtml("#06000000");

            FillColor_Text_Primary = ColorTranslator.FromHtml("#E4000000");
            FillColor_Text_Secondary = ColorTranslator.FromHtml("#9B000000");
            FillColor_Text_Tertiary = ColorTranslator.FromHtml("#71000000");
            FillColor_Text_Disabled = ColorTranslator.FromHtml("#5C000000");

            FillColor_TextOnAccent_Primary = ColorTranslator.FromHtml("#FFFFFF");
            FillColor_TextOnAccent_Disabled = ColorTranslator.FromHtml("#FFFFFF");

            Elevation_Control_Border_1 = ColorTranslator.FromHtml("#0F000000");
            Elevation_Control_Border_2 = ColorTranslator.FromHtml("#29000000");
            Elevation_AccentControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
            Elevation_AccentControl_Border_2 = ColorTranslator.FromHtml("#66000000");
            Elevation_TextControl_Border_1 = ColorTranslator.FromHtml("#0F000000");
            Elevation_TextControl_Border_2 = ColorTranslator.FromHtml("#72000000");
            Elevation_Circle_Border_1 = ColorTranslator.FromHtml("#0F000000");
            Elevation_Circle_Border_2 = ColorTranslator.FromHtml("#29000000");

            StrokeColor_ControlStroke_Default = ColorTranslator.FromHtml("#0F000000");

            StrokeColor_ControlStrongStroke_Default = ColorTranslator.FromHtml("#72000000");
            StrokeColor_ControlStrongStroke_Secondary = ColorTranslator.FromHtml("#72000000");
            StrokeColor_ControlStrongStroke_Disabled = ColorTranslator.FromHtml("#37000000");

            StrokeColor_SurfaceStroke_Flyout = ColorTranslator.FromHtml("#0F000000");

            StrokeColor_CardStroke_Default = ColorTranslator.FromHtml("#0F000000");

            StrokeColor_DividerStroke_Default = ColorTranslator.FromHtml("#14000000");
            break;
    }
    setAccentColorAlts();
}
function setMenuPreset() {
    switch (steamMenuPreset) {
        case "default":
            steamMenu = [
                "Fluent",
                "Divider",

                "ChangeUser",
                "GoOnline",
                "GoOffline",
                "Divider",

                "MiniMode",
                "LargeMode",
                "BigPictureMode",
                "Divider",

                "Library",
                "Hidden",
                "Downloads",
                "Divider",

                "StartVR",
                "ExitVR",
                "Divider",

                "MusicPlayer",
                "Divider",

                "Friends",
                "ViewPlayerList",
                "Servers",
                "Screenshots",
                "Inventory",
                "NewForYou",
                "Divider",

                "CheckForUpdates",
                "Divider",

                "BackupGames",
                "Divider",

                "Settings",
                "Divider",

                "SystemInfo",
                "About",
                "Divider",

                "Restart",
                "Exit",
            ];
            break;
        case "everything":
            steamMenu = [
                "Fluent",
                "Divider",

                "ChangeUser",
                "GoOnline",
                "GoOffline",
                "Divider",

                "MiniMode",
                "LargeMode",
                "BigPictureMode",
                "Divider",

                "Library",
                "Hidden",
                "Downloads",
                "Divider",

                "ActivateRetail",
                "RedeemWalletVoucher",
                "ManageGuestPasses",
                "AddShortcut",
                "Divider",

                "StartVR",
                "ExitVR",
                "Divider",

                "MusicPlayer",
                "Divider",

                "Friends",
                "Divider",

                "AddFriend",
                "EditProfileNameAvatar",
                "Divider",

                "Online",
                "Away",
                "Play",
                "Trade",
                "Busy",
                "Invisible",
                "Offline",
                "Divider",

                "SortByName",
                "ShowAvatars",
                "OnlineUsersOnly",
                "ShowTagged",
                "Divider",

                "SetProfileName",
                "ChangeAvatar",
                "Divider",

                "ViewPlayerList",
                "Servers",
                "Screenshots",
                "Inventory",
                "NewForYou",
                "Divider",

                "CheckForUpdates",
                "Divider",

                "BackupGames",
                "Divider",

                "Settings",
                "Divider",

                "Support",
                "Divider",

                "Privacy",
                "Legal",
                "SSA",
                "Divider",

                "SystemInfo",
                "About",
                "Divider",

                "Restart",
                "Exit",
            ];
            break;
    }
}
