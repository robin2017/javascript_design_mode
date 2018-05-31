//1、存储所有玩家，不是按照队伍来存储的(各个玩家根据teamColor属性来判断队伍)
var players = [];
//2、玩家和其他玩家关联的属性:partners,enemies
function Player(name, teamColor) {
    this.partners = []; // 队友列表
    this.enemies = []; // 敌人列表
    this.state = 'live'; // 玩家状态
    this.name = name; // 角色名字
    this.teamColor = teamColor; // 队伍颜色
}
//3、玩家胜利失败取决于所有玩家的死亡状态
Player.prototype.win = function () { // 玩家团队胜利
    console.log('winner: ' + this.name);
};
Player.prototype.lose = function () { // 玩家团队 失败
    console.log('loser: ' + this.name);
};
//4、玩家只需要计算自己队友是不是全部死亡，不用计算敌人全部死亡
Player.prototype.die = function () { // 玩家死亡
    var all_dead = true;
    this.state = 'dead'; // 设置玩家状态为死亡
    for (var i = 0, partner; partner = this.partners[i++];) { // 遍历队友列表
        if (partner.state !== 'dead') { // 如果还有一个队友没有死亡，则游戏还未失败
            all_dead = false;
            break;
        }
    }
    if (all_dead === true) { // 如果队友全 部死亡
        this.lose(); // 通知自己游戏失败
        for (var i = 0, partner; partner = this.partners[i++];) { // 通知所有队友玩家游戏失败
            partner.lose();
        }
        for (var i = 0, enemy; enemy = this.enemies[i++];) { // 通知所有敌人游戏胜利
            enemy.win();
        }
    }
};
//5、玩家加入:遍历每个玩家，添加队友或者敌人属性；所有玩家数组增加
var playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor); // 创建新玩家
    for (var i = 0, player; player = players[i++];) { // 通知所有的玩家，有新角色加入
        if (player.teamColor === newPlayer.teamColor) { // 如果是同一队的玩家
            player.partners.push(newPlayer); // 相互添加到队友列表
            newPlayer.partners.push(player);
        } else {
            player.enemies.push(newPlayer); // 相互添加到敌人列表
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
};
//红队：
var player1 = playerFactory('皮蛋', 'red'),
    player2 = playerFactory('小乖', 'red'),
    player3 = playerFactory('宝宝', 'red'),
    player4 = playerFactory('小强', 'red');
//蓝队：
var player5 = playerFactory('黑妞', 'blue'),
    player6 = playerFactory('葱头', 'blue'),
    player7 = playerFactory('胖墩', 'blue'),
    player8 = playerFactory('海盗', 'blue');
player1.die();
player5.die();
player2.die();
player6.die();
player4.die();
player7.die();
player3.die();
//只剩下蓝方一人，胜利





