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
       Player: {
           type: cc.Node,
           default: null,
       }
    },

    
    onCollisionEnter(other, self) {
        if (other.node.groupIndex == 1){
            //gameisover
            console.log('碰到了');
            other.node.parent.destroy();
            this.play.gameover();
        }
    },
     onLoad () {
         this.play = this.Player.getComponent('Player');
         console.log(this.play.name);
     },

    start () {

    },

    // update (dt) {},
});
