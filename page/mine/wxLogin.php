<?php
text();
function text() {
    $code = $_GET['code']; //小程序传来的code值
    $nick = $_GET['nick']; //小程序传来的用户昵称
    $imgUrl = $_GET['avaurl']; //小程序传来的用户头像地址
    $sex = $_GET['sex']; //小程序传来的用户性别
    $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx2939a1a57ef503dc&secret=eaf95d89508942e106b54073d37efe2e&js_code=' . $code . '&grant_type=authorization_code'; //Appid为开发者appid.appSecret为开发者的appsecret,都可以从微信公众平台获取；
    $info = file_get_contents($url); //发送HTTPs请求并获取返回的数据，推荐使用curl
    $json = json_decode($info); //对json数据解码
    $arr = get_object_vars($json);
    $openid = $arr['openid'];
    $session_key = $arr['session_key'];
    $con = mysqli_connect('localhost', 'root', '987245101'); //连接数据库
    if ($con) {
        if (mysqli_select_db($con, 'xcx')) {
            $sql1 = "select * from user where openid = '$openid'";
            $result = mysqli_query($con, $sql1);
            $result = mysqli_fetch_assoc($result);
            if ($result != null) { //如果数据库中存在此用户的信息，则不需要重新获取
                $result = json_encode($result);
                echo $result;
            } else { //没有则将数据存入数据库
                if ($sex == '0') {
                    $sex = 'none';
                } else {
                    $sex = '1' ? 'man' : 'women';
                }
                $sql = "insert into user(nick, openid, session_key, imgUrl, sex) values ('$nick','$openid','$session_key','$imgUrl','$sex')";
                if (mysqli_query($con, $sql)) {
                    $arr['nick'] = $nick;
                    $arr['imgUrl'] = $imgUrl;
                    $arr['sex'] = $sex;
                    $arr = json_encode($arr);
                    echo $arr;
                } else {
                    die('failed' . mysqli_error($con));
                }
            }
        }
    } else {
        die(mysqli_error());
    }
}
?>
