
var myContractInstance, myContractInstance1;
var account = localStorage.getItem("address");

var abi = [{"constant":false,"inputs":[],"name":"buyPool1","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool5currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool5users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool3userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool8userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool4","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool5activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool9currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool4userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool2activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool7","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool9userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool4activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool9users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool2","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool7currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool10currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool6users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool8","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool3users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unlimited_level_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool2userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool8activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool4users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool6userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool2users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool8currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool7users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool9activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool7activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool10activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool4currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool8users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool9","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool6","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool2currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool3","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool3currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool5userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool7userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool10userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pool3activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool10","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool6currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool10users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyPool5","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"pool6activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getPoolPayment","type":"event"}];

var address = "0x924a99087196F4B23e312aE6110218e54E0DBb51";
var MyContract;
window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);

        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;
        myContractInstance1 = MyContract;
        //web3.eth.getAccounts().then(function (result) {
        //    account = result[0];
           
        //});
        
        if (web3.currentProvider.isTrust) {

            const infura = 'https://mainnet.infura.io/v3/dcb07049b32047279c8c0773bcf0e2d7';
            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            myContractInstance = MyContract;
          
        }
        checkbuyLevel();
  getVariableData();

           

    } else {
        //  const Web3 = require('web3');

        const infura = 'https://mainnet.infura.io/v3/dcb07049b32047279c8c0773bcf0e2d7';
        const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

           getVariableData();

            checkbuyLevel();
        // document.getElementById('output').innerHtml = 'Please download and install Metamask: <a href="https://metamask.io/">https://metamask.io/</a>'
    }


})


function checkbuyLevel() {

    myContractInstance.methods.users(account).call().then(function (result) {
       
            if (result[0]) {
                checkPool1();
                checkPool2();
                checkPool3();
                checkPool4();
                checkPool5();
                checkPool6();
                checkPool7();
                checkPool8();
                checkPool9();
                checkPool10();
            }
       

    });

}

function checkPool1() {

    myContractInstance.methods.pool1users(account).call().then(function (result) {
       
            if (!result[0]) {
                $('.pool1pay').show();
                $('.pool1transaction').hide();
            }
            else if (result[2] == 2) {
                $('.pool1status').show();
                $('.pool1status .card-status').addClass('bg-success');
                $('.pool1status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool1transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2]< 2) {
                $('.pool1status').show();
                $('.pool1status .card-status').addClass('bg-warning');
                $('.pool1status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool1transaction').html('Received No. of Payments ' + result[2]);
                $('.currentautopoolno').html(1);
            }


       

    });

}

function checkPool2() {
    myContractInstance.methods.pool2users(account).call().then(function (result) {
      
            if (!result[0]) {
                $('.pool2pay').show();
                $('.pool2transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool2status').show();
                $('.pool2status .card-status').addClass('bg-success');
                $('.pool2status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool2transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool2status').show();
                $('.pool2status .card-status').addClass('bg-warning');
                $('.pool2status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool2transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(2);
            }



     
    });

}

function checkPool3() {
    myContractInstance.methods.pool3users(account).call().then(function (result) {
       

            if (!result[0]) {
                $('.pool3pay').show();
                $('.pool3transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool3status').show();
                $('.pool3status .card-status').addClass('bg-success');
                $('.pool3status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool3transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool3status').show();
                $('.pool3status .card-status').addClass('bg-warning');
                $('.pool3status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool3transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(3);
            }



        
    });

}


function checkPool4() {
    myContractInstance.methods.pool4users(account).call().then(function (result) {
       
            if (!result[0]) {
                $('.pool4pay').show();
                $('.pool4transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool4status').show();
                $('.pool4status .card-status').addClass('bg-success');
                $('.pool4status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool4transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool4status').show();
                $('.pool4status .card-status').addClass('bg-warning');
                $('.pool4status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool4transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(4);
            }

       

    });

}

function checkPool5() {
    myContractInstance.methods.pool5users(account).call().then(function (result) {
       
            if (!result[0]) {
                $('.pool5pay').show();
                $('.pool5transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool5status').show();
                $('.pool5status .card-status').addClass('bg-success');
                $('.pool5status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool5transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool5status').show();
                $('.pool5status .card-status').addClass('bg-warning');
                $('.pool5status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool5transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(5);
            }


       

    });

}

function checkPool6() {
    myContractInstance.methods.pool6users(account).call().then(function (result) {
        
            if (!result[0]) {
                $('.pool6pay').show();
                $('.pool6transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool6status').show();
                $('.pool6status .card-status').addClass('bg-success');
                $('.pool6status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool6transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool6status').show();
                $('.pool6status .card-status').addClass('bg-warning');
                $('.pool6status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool6transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(6);
            }

       
    });

}

function checkPool7() {
    myContractInstance.methods.pool7users(account).call().then(function ( result) {
        
            if (!result[0]) {
                $('.pool7pay').show();
                $('.pool7transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool7status').show();
                $('.pool7status .card-status').addClass('bg-success');
                $('.pool7status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool7transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool7status').show();
                $('.pool7status .card-status').addClass('bg-warning');
                $('.pool7status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool7transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(7);
            }



        

    });

}

function checkPool8() {
    myContractInstance.methods.pool8users(account).call().then(function ( result) {
       
            if (!result[0]) {
                $('.pool8pay').show();
                $('.pool8transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool8status').show();
                $('.pool8status .card-status').addClass('bg-success');
                $('.pool8status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool8transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool8status').show();
                $('.pool8status .card-status').addClass('bg-warning');
                $('.pool8status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool8transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(8);
            }


       

    });

}

function checkPool9() {
    myContractInstance.methods.pool9users(account).call().then(function ( result) {
       
            if (!result[0]) {
                $('.pool9pay').show();
                $('.pool9transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool9status').show();
                $('.pool9status .card-status').addClass('bg-success');
                $('.pool9status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool9transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 3) {
                $('.pool9status').show();
                $('.pool9status .card-status').addClass('bg-warning');
                $('.pool9status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool9transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(9);
            }


        

    });

}

function checkPool10() {
    myContractInstance.methods.pool10users(account).call().then(function (result) {
       
            if (!result[0]) {
                $('.pool10pay').show();
                $('.pool10transaction').hide();
            }
            else if (result[2] == 3) {
                $('.pool10status').show();
                $('.pool10status .card-status').addClass('bg-success');
                $('.pool10status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool10transaction').html('Received No. of Payments ' + result[2]);
                $('.currentautopoolno').html(10);
            }
            else if (result[2] < 3) {
                $('.pool10status').show();
                $('.pool10status .card-status').addClass('bg-warning');
                $('.pool10status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool10transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(10);
            }


       

    });

}
$(document).ready(function () {
    $('.pool1pay').click(function () {
        try {

            ethereum.enable();
            myContractInstance1.methods.buyPool1().send({ from: account, value: 100000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {
                
                    $('.pool1pay').hide();
                    $('.pool1transaction').show();
                    $('.pool1transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');
              
            });
        }
        catch (err) {
            console.log(err)
        }
    });


    $('.pool2pay').click(function () {
        try {
            ethereum.enable();
          

            myContractInstance1.methods.buyPool2().send({ from: account, value: 200000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool2pay').hide();
                    $('.pool2transaction').show();
                    $('.pool2transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            console.log(err)
        }
    });

    $('.pool3pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool3().send({ from: account, value: 500000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool3pay').hide();
                    $('.pool3transaction').show();
                    $('.pool3transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });

    $('.pool4pay').click(function () {
        try {
            ethereum.enable();
            
            myContractInstance1.methods.buyPool4().send({ from: account, value: 1000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool4pay').hide();
                    $('.pool4transaction').show();
                    $('.pool4transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });

    $('.pool5pay').click(function () {
        try {
            ethereum.enable();           

            myContractInstance1.methods.buyPool5().send({ from: account, value: 2000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool5pay').hide();
                    $('.pool5transaction').show();
                    $('.pool5transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool6pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool6().send({ from: account, value: 5000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool6pay').hide();
                    $('.pool6transaction').show();
                    $('.pool6transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool7pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool7().send({ from: account, value: 10000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool7pay').hide();
                    $('.pool7transaction').show();
                    $('.pool7transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });


        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool8pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool8().send({ from: account, value: 20000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool8pay').hide();
                    $('.pool8transaction').show();
                    $('.pool8transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });

        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool9pay').click(function () {
        try {
            ethereum.enable();
            
            myContractInstance1.methods.buyPool9().send({ from: account, value: 50000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool9pay').hide();
                    $('.pool9transaction').show();
                    $('.pool9transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool10pay').click(function () {
        try {
            ethereum.enable();
           
            myContractInstance1.methods.buyPool10().send({ from: account, value: 100000000000000000000, gas: 210000 })
                .on('transactionHash', function (hash) {

                    $('.pool10pay').hide();
                    $('.pool10transaction').show();
                    $('.pool10transaction').html('<a href="https://etherscan.io/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


});
