// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

//点击屏幕，脚往下踩，然后回来
cc.Class({
    extends: cc.Component,

    properties: {
        time: 0, //动画时间

        scoreText: {
            type: cc.Label,
            default: null,
        },
        gameOverText: {
            type: cc.Node,
            default: null,
        },
        hiscoreText: {
            type: cc.Label,
            default: null,
        }

    },



    onLoad() {
        this.isOver = false;
        this.node.on(cc.Node.EventType.TOUCH_START, function (e) { //监听触摸点击

            this.Touch(); //点击移动
        }, this);
        this.score = 0;
        this.isTouch = false; //是否动画在移动中
        this.scoreText.string = this.score.toString();
    },

    Touch() {
        if (this.isTouch || this.isOver == true) {
            return; //如果动画在移动中，返回
        }
        // console.log("我踩死你");
        this.isTouch = true; //动画在执行中
        var atc1 = cc.moveBy(this.time, cc.p(0, -333)); //动画1
        var atc2 = cc.moveBy(this.time, cc.p(0, 333)); //动画2
        var end_func = cc.callFunc(function () { //动画事件，移动结束后动画判定为false;
            this.isTouch = false;
        }, this)

        var mid_func = cc.callFunc(function () {
            this.IsTouch();
        }, this);
        var sqa = cc.sequence(atc1, mid_func, atc2, end_func); //动画容器

        this.node.runAction(sqa); //按顺序执行动画


    },

    IsTouch() {
        console.log('我碰到了什么');
    },

    //todo: 发生了碰撞如果碰到的food，加分，如果是die，失败
    onCollisionEnter(other, self) {
        console.log('other:' + other.node.name);
        console.log('self:' + self.node.groupIndex);
        if (other.node.groupIndex == 1) {
            console.log('加分');
            this.score++;
            console.log(this.score);
            this.scoreText.string = this.score.toString();
            other.node.destroy(other.node);
        } else {
            other.node.parent.destroy();
            this.gameover();

        }

    },

    GameOver() {
        console.log("我重新开始了");
        cc.director.loadScene('01');
    },

    gameover() {
        console.log('游戏结束');
            this.gameOverText.active = true;
            this.hiscoreText.string = this.score.toString();
            this.isOver = true;
            // self.node.destroy(this);
           
            //jsb.reflection.callStaticMethod("AppController", "game2NativeShow");
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity","showInter","()V");
    },
    start() {

    },

    // update (dt) {},
});