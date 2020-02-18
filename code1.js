gdjs.NewScene2Code = {};
gdjs.NewScene2Code.GDBackGroundObjects1= [];
gdjs.NewScene2Code.GDBackGroundObjects2= [];
gdjs.NewScene2Code.GDNewObjectObjects1= [];
gdjs.NewScene2Code.GDNewObjectObjects2= [];
gdjs.NewScene2Code.GDNewObject2Objects1= [];
gdjs.NewScene2Code.GDNewObject2Objects2= [];

gdjs.NewScene2Code.conditionTrue_0 = {val:false};
gdjs.NewScene2Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene2Code.condition1IsTrue_0 = {val:false};


gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.NewScene2Code.GDNewObjectObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.NewScene2Code.GDNewObject2Objects1});gdjs.NewScene2Code.eventsList0xb4be0 = function(runtimeScene) {

{

gdjs.NewScene2Code.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NewScene2Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.NewScene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDNewObjectObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.NewScene2Code.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
gdjs.NewScene2Code.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.NewScene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDNewObjectObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.NewScene2Code.eventsList0xb4be0


gdjs.NewScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewScene2Code.GDBackGroundObjects1.length = 0;
gdjs.NewScene2Code.GDBackGroundObjects2.length = 0;
gdjs.NewScene2Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene2Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene2Code.GDNewObject2Objects1.length = 0;
gdjs.NewScene2Code.GDNewObject2Objects2.length = 0;

gdjs.NewScene2Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['NewScene2Code'] = gdjs.NewScene2Code;
