const version = "alpha0.1";

// --- General

// Colors
let theme = "dark";
let AccentColor = ColorTranslator.FromHtml("#60CDFF");
let enableAcrylic = true;


// --- Main Interface

// Title bar
let titleBarHeight = 48;
let navButtonsLenght = 1;
let showBack = true;
let showRefresh = false;
let showForward = false;
let showUsername = false;

// Navigation tabs
let navLocation = "left";
let navSubmenuLocation = 13;
let navStyle = 1;

// Show icons
let showIconDownload = true;
let showIconBigPicture = true;
let showIconVR = true;
let showIconInbox = true;
let showIconAnnouncement = true;
let showIconParentalLock = true;
let showIconAddGame = false;
let showIconFriends = true;

// Steam Menu
let steamMenuPreset = "default";
let steamMenu = [
    'Fluent',
    'Divider',
    'ChangeUser',
    'GoOnline',
    'GoOffline',
    'Divider',
    'BigPictureMode',
    'Divider',
    'Library',
    'Hidden',
    'Downloads',
    'Divider',
    'StartVR',
    'ExitVR',
    'Divider',
    'MusicPlayer',
    'Divider',
    'Friends',
    'ViewPlayerList',
    'Servers',
    'Screenshots',
    'Inventory',
    'NewForYou',
    'Divider',
    'CheckForUpdates',
    'Divider',
    'BackupGames',
    'Divider',
    'Settings',
    'Divider',
    'SystemInfo',
    'About',
    'Divider',
    'Restart',
    'Exit',
];



// Colors
let AccentColor_Secondary = multiplyRGB(AccentColor,1,1,1,0.9);
let AccentColor_Tertiary = multiplyRGB(AccentColor,1,1,1,0.8);
let Contrasted_AccentColor = multiplyHSL(multiplyRGB(multiplyRGB(AccentColor,0.004,0.004,0.004,1),255,255,255,1),1,1,1.1,1);

let Background_FillColor_SolidBackground_Base = ColorTranslator.FromHtml("#202020");
let Background_FillColor_SolidBackground_Tertiary = ColorTranslator.FromHtml("#282828");

let Background_FillColor_CardBackground_Default = ColorTranslator.FromHtml("#0DFFFFFF");
let Background_FillColor_CardBackground_Secondary = ColorTranslator.FromHtml("#08FFFFFF");

let Background_FillColor_Acrylic_Default = ColorTranslator.FromHtml("#2C2C2C");

let FillColor_Accent_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

let FillColor_Control_Default = ColorTranslator.FromHtml("#0FFFFFFF");
let FillColor_Control_Secondary = ColorTranslator.FromHtml("#15FFFFFF");
let FillColor_Control_Tertiary = ColorTranslator.FromHtml("#08FFFFFF");
let FillColor_Control_Disabled = ColorTranslator.FromHtml("#11FFFFFF");
let FillColor_Control_InputActive = ColorTranslator.FromHtml("#B21E1E1E");

let FillColor_ControlAlt_Secondary = ColorTranslator.FromHtml("#19000000");
let FillColor_ControlAlt_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");
let FillColor_ControlAlt_Quarternary = ColorTranslator.FromHtml("#12FFFFFF");

let FillColor_Subtle_Secondary = ColorTranslator.FromHtml("#0FFFFFFF");
let FillColor_Subtle_Tertiary = ColorTranslator.FromHtml("#0BFFFFFF");

let FillColor_Text_Primary = ColorTranslator.FromHtml("#FFFFFF");
let FillColor_Text_Secondary = ColorTranslator.FromHtml("#CBFFFFFF");
let FillColor_Text_Tertiary = ColorTranslator.FromHtml("#8BFFFFFF");
let FillColor_Text_Disabled = ColorTranslator.FromHtml("#5DFFFFFF");

let FillColor_TextOnAccent_Primary = ColorTranslator.FromHtml("#000000");
let FillColor_TextOnAccent_Disabled = ColorTranslator.FromHtml("#87FFFFFF");

let FillColor_AccentText_Primary = multiplyHSL(AccentColor,0.96,1,1.15,1);
let FillColor_AccentText_Secondary = multiplyHSL(AccentColor,0.96,1,1.15,1);
let FillColor_AccentText_Tertiary = multiplyRGB(AccentColor,1,1,1,1);

let Elevation_Control_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
let Elevation_Control_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");
let Elevation_AccentControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
let Elevation_AccentControl_Border_2 = ColorTranslator.FromHtml("#24000000");
let Elevation_TextControl_Border_1 = ColorTranslator.FromHtml("#14FFFFFF");
let Elevation_TextControl_Border_2 = ColorTranslator.FromHtml("#8BFFFFFF");
let Elevation_Circle_Border_1 = ColorTranslator.FromHtml("#17FFFFFF");
let Elevation_Circle_Border_2 = ColorTranslator.FromHtml("#12FFFFFF");

let StrokeColor_ControlStroke_Default = ColorTranslator.FromHtml("#12FFFFFF");

let StrokeColor_ControlStrongStroke_Default = ColorTranslator.FromHtml("#8BFFFFFF");
let StrokeColor_ControlStrongStroke_Secondary = ColorTranslator.FromHtml("#9EFFFFFF");
let StrokeColor_ControlStrongStroke_Disabled = ColorTranslator.FromHtml("#28FFFFFF");

let StrokeColor_SurfaceStroke_Flyout = ColorTranslator.FromHtml("#33000000");

let StrokeColor_CardStroke_Default = ColorTranslator.FromHtml("#19000000");

let StrokeColor_DividerStroke_Default = ColorTranslator.FromHtml("#15FFFFFF");



function getIconPosition(icon) {
    if (navLocation=="left") {
        let iconsLeft = [];
        let iconsTop = [];
        
        if(showIconDownload)iconsLeft.push("download");
        if(showIconFriends)iconsLeft.push("friends");
        if(showIconBigPicture)iconsLeft.push("bigpicture");
        if(showIconVR)iconsLeft.push("vr");
        if(showIconInbox)iconsTop.push("inbox");
        if(showIconAnnouncement)iconsTop.push("announcement");
        if(showIconParentalLock)iconsTop.push("parentallock");

        if(iconsTop.includes(icon)) {
            return iconsTop.indexOf(icon);
        }else{
            return iconsLeft.indexOf(icon);
        }
    }else{
        let iconsTop = []
        
        if(showIconInbox)iconsTop.push("inbox");
        if(showIconAnnouncement)iconsTop.push("announcement");
        if(showIconFriends)iconsTop.push("friends");
        if(showIconDownload)iconsTop.push("download");
        if(showIconBigPicture)iconsTop.push("bigpicture");
        if(showIconVR)iconsTop.push("vr");
        if(showIconParentalLock)iconsTop.push("parentallock");

        return iconsTop.indexOf(icon);
    }
}

function getMenu(menu) {
    let menuCode = [];

    let menuTranslation = {
        'Fluent'                :`Fluent { text="Fluent for Steam ${version}" shellcmd="steam://openurl/https://github.com/Piripe/FluentForSteam" }`,
        'Divider'               :"Divider {}",
        'ChangeUser'            :'ChangeUser { text="#steam_menu_changeuser" command="ChangeUser" }',
        'GoOnline'              :'GoOnline { text="#SteamUI_OfflineMode_GoOnline" command="goonline" }',
        'GoOffline'             :'GoOffline { text="#SteamUI_OfflineMode_GoOffline" command="gooffline" }',
        'MiniMode'              :'MiniMode [!$OSX] { text="#steam_menu_minimode" shellcmd="steam://open/minigameslist" }',
        'LargeMode'             :'LargeMode [!$OSX] { text="#steam_menu_largemode" shellcmd="steam://open/largegameslist" }',
        'BigPictureMode'        :'BigPictureMode { text="#steam_menu_bigpicturemode" shellcmd="steam://open/bigpicture" } ',
        'Library'               :'Library { text="#steam_menu_library" shellcmd="steam://open/library/view/home" }',
        'Hidden'                :'Hidden { text="#steam_menu_hidden_games" shellcmd="steam://nav/library/collection/hidden" }',
        'Downloads'             :'Downloads { text="#steam_menu_downloads" shellcmd="steam://open/downloads" }',
        'ActivateRetail'        :'ActivateRetail { text="#Steam_RegisterProductCode" command="ActivateRetail" }',
        'RedeemWalletVoucher'   :'RedeemWalletVoucher { text="#Steam_RedeemWalletVoucher" shellcmd="steam://url/RedeemWalletVoucher" }',
        'ManageGuestPasses'     :'ManageGuestPasses { text="#Steam_ManageGuestPasses" command="ManageGuestPasses" }',
        'AddShortcut'           :'AddShortcut { text="#Steam_menu_AddShortcut" shellcmd="steam://AddNonSteamGame" }',
        'StartVR'               :'StartVR { text="#steam_menu_startvr" shellcmd="steam://run/250820" }',
        'ExitVR'                :'ExitVR { text="#steam_menu_exitvr" command="exitvr" }',
        'MusicPlayer'           :'MusicPlayer { text="#steam_menu_view_musicplayer" shellcmd="steam://open/musicplayer" }',
        'Friends'               :'Friends { text="#steam_menu_friends" shellcmd="steam://open/friends" }',
        'AddFriend'             :'AddFriend { text="#steam_menu_add_friend" shellcmd="steam://friends/add" }',
        'EditProfileNameAvatar' :'EditProfileNameAvatar { text="#steam_menu_edit_profile_name_avatar" shellcmd="steam://url/SteamIDEditPage" }',
        'Online'                :'Online { text="#friends_online" shellcmd="steam://friends/status/online" checkable=1 autocheck=0 }',
        'Away'                  :'Away { text="#friends_away" shellcmd="steam://friends/status/away" checkable=1 autocheck=0 }',
        'Play'                  :'Play { text="#friends_lookingtoplay" shellcmd="steam://friends/status/play" checkable=1 autocheck=0 }',
        'Trade'                 :'Trade { text="#friends_lookingtotrade" shellcmd="steam://friends/status/trade" checkable=1 autocheck=0 }',
        'Busy'                  :'Busy { text="#friends_busy" shellcmd="steam://friends/status/busy" checkable=1 autocheck=0 }',
        'Invisible'             :'Invisible { text="#friends_invisible" shellcmd="steam://friends/status/invisible" checkable=1 autocheck=0 }',
        'Offline'               :'Offline { text="#friends_offline" shellcmd="steam://friends/status/offline" checkable=1 autocheck=0 }',
        'SortByName'            :'SortByName { text="#steam_menu_friends_sortbyname" shellcmd="steam://friends/settings/sortbyname" checkable=1 }',
        'ShowAvatars'           :'ShowAvatars { text="#steam_menu_friends_showavatars" shellcmd="steam://friends/settings/showavatars" checkable=1 }',
        'OnlineUsersOnly'       :'OnlineUsersOnly { text="#steam_menu_friends_hideoffline" shellcmd="steam://friends/settings/hideoffline" checkable=1 }',
        'ShowTagged'            :'ShowTagged { text="#steam_menu_friends_showtagged" shellcmd="steam://friends/settings/showtagged" checkable=1 }',
        'SetProfileName'        :'SetProfileName { text="#steam_menu_set_profile" shellcmd="steam://settings/friends" }',
        'ChangeAvatar'          :'ChangeAvatar { text="#steam_menu_set_avatar" shellcmd="steam://url/SteamIDEditPage" }',
        'ViewPlayerList'        :'ViewPlayerList { text="#steam_menu_view_players" shellcmd="steam://friends/players" }',
        'Servers'               :'Servers { text="#steam_menu_servers" shellcmd="steam://open/servers" }',
        'Screenshots'           :'Screenshots { text="#steam_screenshots" command="Screenshots" }',
        'Inventory'             :'Inventory { text="#steam_inventory" shellcmd="steam://open/inventory" }',
        'NewForYou'             :'NewForYou { text="#SteamUI_GameProperties_UpdateNews" shellcmd="steam://open/newforyou" }',
        'CheckForUpdates'       :'CheckForUpdates [!$OSX] { text="#steam_menu_checkforupdates" command="CheckForUpdates" }',
        'BackupGames'           :'BackupGames { text="#steam_menu_backupgames" command="backupgames" }',
        'Settings'              :'Settings [!$OSX] { text="#steam_menu_settings" command="Settings" }',
        'Support'               :'Support { text="#steam_menu_support" command="Support" }',
        'Privacy'               :'Privacy { text="#steam_menu_PrivacyPolicy" shellcmd="steam://url/PrivacyPolicy" }',
        'Legal'                 :'Legal { text="#steam_menu_LegalInformation" shellcmd="steam://url/LegalInformation" }',
        'SSA'                   :'SSA { text="#steam_menu_SteamSubscriberAgreement" shellcmd="steam://url/SSA" }',
        'SystemInfo'            :'SystemInfo { text="#steam_menu_systeminfo" command="SystemInfo" }',
        'About'                 :'About { text="#steam_about" command="About" }',
        'Restart'               :'Restart { text="#Steam_MustRestart_Button" command="RestartSteam" }',
        'Exit'                  :'Exit [!$OSX] { text="#Steam_ExitSteam" command="Exit" }',
    };      

    menu.forEach(item => {
        if (item in menuTranslation) {
            menuCode.push(menuTranslation[item]);
        }else{
            menuCode.push(item);
        }
    });

    return menuCode.join('\n\t\t');
}