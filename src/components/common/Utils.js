// Set classes namespace, e.g. `am-`


const kvSize = (key, x) => {

    if(x ===undefined) return;
    var r, re; // 声明变量。
    re =  /^\d+$/;
    r = re.exec(x);
    if (r) {
        return {[key]: x+"px"}
    } else {
        return {[key]: x}
    }
};


// 坐标补齐
const sizeUnit = ( x) => {
    if(x ===undefined) return;
    var r, re; // 声明变量。
    re =  /^\d+$/;
    r = re.exec(x);
    if (r) {
        return  x+"px"
    } else {
        return x
    }
};



// 将color变暗,  darken 百分比, 越小越暗
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

const log = ( ...l) => {
    console.log("aui:",...l)
};


const Utils = {
    kvSize,
    sizeUnit,
    colorDarken,
    log
};



export default Utils


