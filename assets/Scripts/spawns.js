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
        enemysPre: { //创建敌人预制体
            type: cc.Prefab,
            default: [],
        },

        spwanTime: 0, //生成时间

       
    },



    // onLoad () {},

    start() {
        this.currentTime = 0; //当前时间
        this.prelenth = this.enemysPre.length; //数组长度
        // console.log(this.prelenth);
        // console.log(this.node.x);
        this.currentrnd = 0;
    },

    update(dt) {
        this.currentTime += dt; //获取当前时间
        if (this.currentTime > this.spwanTime) {
            this.SpwanEnemys(); //生成敌人
        }
    },
    SpwanEnemys() {
        //tudo:生成敌人
        var rnd = cc.random0To1() * this.prelenth; //随机选取一个敌人
        rnd = Math.floor(rnd);
        this.currentrnd = rnd;
        console.log(rnd);
        var enemy = cc.instantiate(this.enemysPre[rnd]); //生成
        //enemy.x = -400;//设置起始坐标
        this.node.addChild(enemy); //添加父节点
        // console.log("enemy的坐标是"+enemy.x);
        // console.log("enemy的父节点是"+ enemy.parent.name);
        this.currentTime = 0; //重新归零
    }
});