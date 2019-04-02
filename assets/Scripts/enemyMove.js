// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        timer : 0,//预设时间
        movetime : 0,//动画时间
        
      
        
    },

    // // LIFE-CYCLE CALLBACKS:

    //  onLoad () {
        
    //  },

    start () {
        this.currentTime = 0 ;//当前时间
        this.movePos = 0;//每次移动的距离
        this.postemp = Math.abs(this.node.x);//获得距离
        // console.log(this.node.name);
        // console.log(this.postemp);
    },

     update (dt) {
         this.currentTime +=dt;//获取当前时间
         if(this.currentTime > this.timer)//如果当前时间大于预设事件
         {
            this.Move();//执行移动动画
         }
     },
     Move(){
         this.movePos += this.postemp;//获取当前位置
         var act1 = cc.moveBy(this.movetime,cc.p(this.movePos,0));//移动动画
         this.node.runAction(act1);//执行动画
         this.currentTime = 0;//初始化当前时间
     }
});
