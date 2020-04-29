const abi = require('./UserBookABI.js')
if (typeof web3 !== "undefined") {
  web3js = new Web3(web3.currentProvider);
} else {
  alert("MetaMaskをインストールして下さい。");
}

// メタマスクのアドレスを取得する
web3js.eth.getAccounts(function (err, accounts) {
  coinbase = accounts[0];
  console.log("coinbase is " + coinbase);
  if (typeof coinbase === "undefined") {
    alert("MetaMaskを起動してください。")
  }
});

const address = "0xbfe66462ba59f6a13999197d9cec8c5ed3564f51";

// スマートコントラクトのインスタンスを生成する
contract = new web3js.eth.Contract(fs.abi, address);
