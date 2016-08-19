/* 初期化処理 */
$(document).ready(function() {
    // 他のKii SDKが実行される前に、
    // AppID, AppKey, SiteID
    // で初期化します。
    Kii.initializeWithSite("4a70aa1b", "d23927c3a82366b57e960acbc9e52301", KiiSite.JP);
    console.log("Kii.initializeWithSite");

    // アクセストークンの有効期限の設定（単位：秒）
    Kii.setAccessTokenExpiration(3600);
});