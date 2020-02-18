gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene2", false);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4be0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
