/* セッション管理 */
// ログイン後の画面で、アクセストークンによりログインします。
$(document).ready(function() {

    // localStorageから、ログイン時に保存しておいたアクセストークンを取得します。
    var accessToken = localStorage.accessToken;
    console.log(accessToken);
    
    console.log("loginWithAccessToken");
    // アクセストークンによるログイン処理
    KiiUser.authenticateWithToken(accessToken, {
        // アクセストークンによるログインが成功した場合に実行されます。
        success: function(theUser) {
            console.log("User authenticated!");
            console.log(theUser);
            
            // アクセストークンによるログインが成功した場合に実行したい処理の呼び出し
            authenticateWithTokenSsuccess();
        },
        // アクセストークンによるログインが失敗した場合に実行されます。
        failure: function(theUser, errorString) {
            console.log("Error authenticating: " + errorString);
            
            // ログイン画面に遷移します。
            location.href = "login.html";
        }
    });

});

// ログインが成功した場合に実行したい処理
// 必要に応じて、各画面においてオーバーライドします。
function authenticateWithTokenSsuccess(){
    console.log("authenticateWithTokenSsuccess");
}

// ログアウト
// アクセストークンを破棄して、ログイン画面に繊維します。
function logout(){
    localStorage.accessToken = "";
    location.href = "login.html";
}