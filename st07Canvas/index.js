/**
 * Created by zhouweitao on 16/7/28.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

//x,y,宽度,高度(x,y相对于convas左上角;宽度,高度受限于x,y坐标到convas标签右下角之间的大小以内,超过不显示)
context.fillStyle = "green";
context.fillRect(110, 110, 300, 200);