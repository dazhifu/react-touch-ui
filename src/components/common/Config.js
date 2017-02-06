// Set classes namespace, e.g. `am-`


const colorDarken = ( color, darken) => {
    if(color ===undefined) return;
    var len = color.length;
    var c = color.substring(1,len);

    var newc = "#";
    for(var i = 0; i<c.length; i++) {
        var cc;
        cc=   Math.round(parseInt('0x'+c.substring(i,i+1)) *darken);
        newc =newc + cc.toString(16)
    }
    return newc;

};

const namespace = "au"; // 'am'

//基准 宽度320
var baseFont =  '16';
var sizeUnit = "rem";         // view 不传左边默认值
// 主题颜色
var themeColor = "#f00";


// Button 配置
// 字体
var ButtonFontSize = "16";
// 字体颜色
var ButtonFontColor = "#fff";
// 背景颜色
var ButtonBgColor = themeColor;
// 激活颜色
var ButtonActiveColor = colorDarken(themeColor, 0.8);
// 默认高度
var ButtonHeight = '40';

// Checkbox 配置
// 字体
var CheckboxFontSize = "16";
// 字体颜色
var CheckboxFontColor = "#fff";
// 背景颜色
var CheckboxIconColor = themeColor;
// 默认高度
var CheckboxHeight = '30';

// Radio 配置

import IORadio from 'react-icons/lib/io/ios-circle-outline';
import IORadioed from 'react-icons/lib/io/ios-circle-filled';

// 字体
var RadioFontSize = "16";
// 字体颜色
var RadioFontColor = "#333";
// 背景颜色
var RadioIconColor = "#888";
// 选中背景颜色
var RadioIconedColor = themeColor;

// 默认高度
var RadioHeight = '30';
// 默认icon
var RadioIcon = IORadio;
// 选中icon
var RadioIconed = IORadioed;


//navBar  配置
import IOBack from 'react-icons/lib/io/ios-arrow-back';


var NavBarBgColor = themeColor;
var NavBarFontColor = "#fff";
var NavBarLeftIcon = IOBack;
var NavBarTitleFontSize = "18";
var NavBarItemFontSize = "16";
var NavBarIconSize = 30;
var NavBarH = 44;


//Badge  配置
var BadgeBgColor = themeColor;
var BadgeFontColor = "#fff";
var BadgeFontSize = "16";
var BadgeH = 30;


//Input  配置

var InputFontColor = "#333";
var InputFontSize = "16";
var InputH = 40;


//Input  配置

var TextareaFontColor = "#333";
var TextareaFontSize = "16";
var TextareaH = 100;


// TabBarItem 配置
import TabBarItemDefult from 'react-icons/lib/io/home';

var TabBarItemBgColor = themeColor;           //背景颜色
var TabBarItemIcon = TabBarItemDefult;        // 默认icon
var TabBarItemIconSize = 25;                  // icon 大小
var TabBarItemFontColor = "#FFF";             // 字颜色
var TabBarItemIconColor = "#FFF";             // icon颜色

var TabBarItemSelFontColor = "#aaa";          // 字选中颜色
var TabBarItemSelIconColor = "#aaa";          // icon选中颜色

var TabBarItemFontSize = "16";                // 字体大小

// buttonGroup  配置
var ButtonGroupFontSize = '16';           //字体大小
var ButtonGroupFontColor = '#000';    // 字体颜色
var ButtonGroupSelFontColor = '#fff';               // 选中字体颜色
var ButtonGroupBgColor = "#FFF";                // 背景颜色
var ButtonGroupSelBgColor = themeColor;             // 选中背景颜色
var ButtonGroupBorderColor = themeColor;            // 点击后颜色
var ButtonGroupP = "3";                      // padding


// switch  配置
var SwitchW = '52';           //字体大小
var SwitchH = '31';    // 字体颜色
var SwitchBgColor = '#dfdfdf';               // 选中字体颜色
var SwitchSelBgColor = themeColor;                // 背景颜色
var SwitchBorderRadius = '20px';             // 选中背景颜色
var SwitchCircleBgColor = '#FFF';            // 点击后颜色


const Config = {

    namespace,
    baseFont,
    sizeUnit,
    ButtonFontSize,
    ButtonFontColor,
    ButtonBgColor,
    ButtonActiveColor,
    ButtonHeight,

    CheckboxFontSize,
    CheckboxFontColor,
    CheckboxIconColor,
    CheckboxHeight,

    RadioFontSize,
    RadioFontColor,
    RadioIconColor,
    RadioIconedColor,
    RadioHeight,
    RadioIcon,
    RadioIconed,


    NavBarBgColor,
    NavBarFontColor,
    NavBarLeftIcon,
    NavBarTitleFontSize,
    NavBarItemFontSize,
    NavBarIconSize,
    NavBarH,

    BadgeBgColor,
    BadgeFontColor,
    BadgeFontSize,
    BadgeH,

    InputFontColor,
    InputFontSize,
    InputH,

    TextareaFontColor,
    TextareaFontSize,
    TextareaH,

    TabBarItemBgColor,
    TabBarItemIcon,
    TabBarItemIconSize,
    TabBarItemFontColor,
    TabBarItemIconColor,
    TabBarItemSelFontColor,
    TabBarItemSelIconColor,
    TabBarItemFontSize,


    ButtonGroupFontSize,
    ButtonGroupFontColor,
    ButtonGroupSelFontColor,
    ButtonGroupBgColor,
    ButtonGroupSelBgColor,
    ButtonGroupBorderColor,
    ButtonGroupP,

    SwitchW,
    SwitchH,
    SwitchBgColor,
    SwitchSelBgColor,
    SwitchBorderRadius,
    SwitchCircleBgColor
};


export default Config
