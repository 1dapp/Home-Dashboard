
var myContractInstance, myContractInstance1;
var myContractInstance5eth, myContractInstance5eth1;
var account = localStorage.getItem("address");
var ismetamask = false;
var MyContract, MyContract5eth;
var referraladdress = '';
window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {

        ismetamask = true;
        web3 = new Web3(web3.currentProvider);

        MyContract = new web3.eth.Contract(abi, address);
        MyContract5eth = new web3.eth.Contract(abi2, address2);
        // initiate contract for an address

        myContractInstance = MyContract;
        myContractInstance1 = MyContract;

        myContractInstance5eth = MyContract5eth;
        myContractInstance5eth1 = MyContract5eth;
        //web3.eth.getAccounts().then(function (result) {
        //    account = result[0];
           
        //});
        
        if (web3.currentProvider.isTrust) {

            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            MyContract5eth = new web3.eth.Contract(abi2, address2);
            myContractInstance = MyContract;
            myContractInstance5eth = MyContract5eth;
            ismetamask = false;
        }
        checkbuyLevel();
  getVariableData();

           

    } else {

        alert('Please connect to metamask or trust wallet');
        //  const web3 = require('web3');

        //const infura = 'https://mainnet.infura.io/v3/bb53409129cd49ef8809f668af522aac';
        //const web3 = new web3(new web3.providers.httpprovider(infura));
        //mycontract = new web3.eth.contract(abi, address);
        //mycontractinstance = mycontract;

        //   getvariabledata();

        //    checkbuylevel();
        // document.getelementbyid('output').innerhtml = 'please download and install metamask: <a href="https://metamask.io/">https://metamask.io/</a>'
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
            myContractInstance.methods.userList(result[2]).call().then(function (result) {
                checkPool8(result);
                checkPool9(result);
                checkPool10(result);
            });

        }
       

    });

}

function checkPool1() {

    myContractInstance.methods.pool1users(account).call().then(function (result) {
        if (result[0]) {
            $('.pool1detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool1detailsforuser').html("Your Sequence number :  NA");
        }
            if (!result[0]) {
                $('.pool1pay').show();
                $('.pool1transaction').hide();
            }
            else if (result[2] == 12) {
                $('.pool1status').show();
                $('.pool1status .card-status').addClass('bg-success');
                $('.pool1status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool1transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2]< 12) {
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
        if (result[0]) {
            $('.pool2detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool2detailsforuser').html("Your Sequence number :  NA");
        }
            if (!result[0]) {
                $('.pool2pay').show();
                $('.pool2transaction').hide();
            }
            else if (result[2] == 14) {
                $('.pool2status').show();
                $('.pool2status .card-status').addClass('bg-success');
                $('.pool2status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool2transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 14) {
                $('.pool2status').show();
                $('.pool2status .card-status').addClass('bg-warning');
                $('.pool2status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool2transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(2);
            }



     
    });

}

function checkPool3() {
    myContractInstance.methods.pool3users(account).call().then(function (result) {
        if (result[0]) {
            $('.pool3detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool3detailsforuser').html("Your Sequence number :  NA");
        }
        if (!result[0]) {
                $('.pool3pay').show();
                $('.pool3transaction').hide();
            }
            else if (result[2] == 16) {
                $('.pool3status').show();
                $('.pool3status .card-status').addClass('bg-success');
                $('.pool3status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool3transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 16) {
                $('.pool3status').show();
                $('.pool3status .card-status').addClass('bg-warning');
                $('.pool3status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool3transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(3);
            }



        
    });

}


function checkPool4() {
    myContractInstance.methods.pool4users(account).call().then(function (result) {
        if (result[0]) {
            $('.pool4detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool4detailsforuser').html("Your Sequence number :  NA");
        }
            if (!result[0]) {
                $('.pool4pay').show();
                $('.pool4transaction').hide();
            }
            else if (result[2] == 18) {
                $('.pool4status').show();
                $('.pool4status .card-status').addClass('bg-success');
                $('.pool4status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool4transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 18) {
                $('.pool4status').show();
                $('.pool4status .card-status').addClass('bg-warning');
                $('.pool4status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool4transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(4);
            }

       

    });

}

function checkPool5() {
    myContractInstance.methods.pool5users(account).call().then(function (result) {
        if (result[0]) {
            $('.pool5detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool5detailsforuser').html("Your Sequence number :  NA");
        }
            if (!result[0]) {
                $('.pool5pay').show();
                $('.pool5transaction').hide();
               
            }
            else if (result[2] == 20) {
                $('.pool5status').show();
                $('.pool5status .card-status').addClass('bg-success');
                $('.pool5status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool5transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 20) {
                $('.pool5status').show();
                $('.pool5status .card-status').addClass('bg-warning');
                $('.pool5status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool5transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(5);
            }


       

    });

}

function checkPool6() {
    myContractInstance.methods.boosterusers(account).call().then(function (result) {
        if (result[0]) {
            $('.pool6detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool6detailsforuser').html("Your Sequence number :  NA");
        }            if (!result[0]) {
                $('.pool6pay').show();
                $('.pool6transaction').hide();
              
            }
            else if (result[2] == 8) {
                $('.pool6status').show();
                $('.pool6status .card-status').addClass('bg-success');
                $('.pool6status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool6transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 8) {
                $('.pool6status').show();
                $('.pool6status .card-status').addClass('bg-warning');
                $('.pool6status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool6transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(6);
            }

       
    });

}
function checkPool7() {
    myContractInstance.methods.superboosterusers(account).call().then(function (result) {
        if (result[0]) {
            $('.pool7detailsforuser').html("Your Sequence number : " + result[1]);
        }
        else {
            $('.pool7detailsforuser').html("Your Sequence number :  NA");
        }
            if (!result[0]) {
                $('.pool7pay').show();
                $('.pool7transaction').hide();
               
            }
            else if (result[2] == 10) {
                $('.pool7status').show();
                $('.pool7status .card-status').addClass('bg-success');
                $('.pool7status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
                $('.pool7transaction').html('Received No. of Payments ' + result[2]);


            }
            else if (result[2] < 10) {
                $('.pool7status').show();
                $('.pool7status .card-status').addClass('bg-warning');
                $('.pool7status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
                $('.pool7transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(6);
            }

       
    });

}



function checkPool8(referral) {
    referraladdress = referral;
    myContractInstance5eth.methods.pool1userList(account).call().then(function (result) {
        //if (result[0]) {
        //    $('.pool8detailsforuser').html("Your Sequence number : " + result[1]);
        //}
        //else {
        //    $('.pool8detailsforuser').html("Your Sequence number :  NA");
        //}
        if (!result[0]) {
            
            $('.pool8transaction').hide();
            $('.pool8transactionnooftime').html('No. of time Bought : 0');
        }
        else if (result[2] == (parseInt(result[1])*11)) {
            $('.pool8status').show();
            $('.pool8status .card-status').addClass('bg-success');
            $('.pool8status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool8transaction').html('Received No. of Payments ' + result[2] + ' / ' + (parseInt(result[1]) * 11));
            $('.pool8transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));


        }
        else if (result[2] < (parseInt(result[1]) * 11)) {
            $('.pool8status').show();
           
            $('.pool8status .ribbon').addClass('text-primary').html('<span class="bg-success">Active</span>');
            $('.pool8transaction').html('Received No. of Payments ' + result[2] + '/' + (parseInt(result[1]) * 11));
            $('.currentautopoolno').html(6);
            $('.pool8transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));
        }
$('.pool8pay').show();

    });

}



function checkPool9(referral) {
    referraladdress = referral;
    myContractInstance5eth.methods.pool2userList(account).call().then(function (result) {
        //if (result[0]) {
        //    $('.pool9detailsforuser').html("Your Sequence number : " + result[1]);
        //}
        //else {
        //    $('.pool9detailsforuser').html("Your Sequence number :  NA");
        //}
        if (!result[0]) {
            $('.pool9transactionnooftime').html('No. of time Bought : 0');
            $('.pool9transaction').hide();

        }
        else if (result[2] == (parseInt(result[1]) * 35)) {
            $('.pool9status').show();
            $('.pool9status .card-status').addClass('bg-success');
            $('.pool9status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool9transaction').html('Received No. of Payments ' + result[2] + ' / ' + (parseInt(result[1]) * 35));
            $('.pool9transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));

        }
        else if (result[2] < (parseInt(result[1]) * 35)) {
            $('.pool9status').show();
            $('.pool9status .card-status').addClass('bg-warning');
            $('.pool9status .ribbon').addClass('text-warning').html('<span class="bg-success">Active</span>');
            $('.pool9transaction').html('Received No. of Payments ' + result[2] + ' / ' + (parseInt(result[1]) * 35));
            $('.currentautopoolno').html(6);
            $('.pool9transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));
        }
 $('.pool9pay').show();

    });

}

function checkPool10(referral) {
    referraladdress = referral;
    myContractInstance5eth.methods.pool3userList(account).call().then(function (result) {
        //if (result[0]) {
        //    $('.pool9detailsforuser').html("Your Sequence number : " + result[1]);
        //}
        //else {
        //    $('.pool9detailsforuser').html("Your Sequence number :  NA");
        //}
        if (!result[0]) {
            $('.pool10transactionnooftime').html('No. of time Bought : 0');
            $('.pool10transaction').hide();

        }
        else if (result[2] == (parseInt(result[1]) * 20)) {
            $('.pool10status').show();
            $('.pool10status .card-status').addClass('bg-success');
            $('.pool10status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool10transaction').html('Received No. of Payments ' + result[2] + ' / ' + (parseInt(result[1]) * 20));
            $('.pool10transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));

        }
        else if (result[2] < (parseInt(result[1]) * 20)) {
            $('.pool10status').show();
            $('.pool10status .card-status').addClass('bg-warning');
            $('.pool10status .ribbon').addClass('text-warning').html('<span class="bg-success">Active</span>');
            $('.pool10transaction').html('Received No. of Payments ' + result[2] + ' / ' + (parseInt(result[1]) * 20));
            $('.currentautopoolno').html(6);
            $('.pool10transactionnooftime').html('No. of time Bought : ' + (parseInt(result[1])));
        }
        $('.pool10pay').show();

    });

}


$(document).ready(function () {
    $('.pool1pay').click(function () {
        try {

            ethereum.enable();
            myContractInstance1.methods.buyPool1().send({ from: account, value: 200000000000000000, gas: 2100000 })
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
          

            myContractInstance1.methods.buyPool2().send({ from: account, value: 200000000000000000, gas: 2100000 })
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

            myContractInstance1.methods.buyPool3().send({ from: account, value: 200000000000000000, gas: 2100000 })
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
            
            myContractInstance1.methods.buyPool4().send({ from: account, value: 200000000000000000, gas: 2100000 })
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

            myContractInstance1.methods.buyPool5().send({ from: account, value: 200000000000000000, gas: 2100000 })
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

            myContractInstance1.methods.buyBooster().send({ from: account, value: 1000000000000000000, gas: 2100000 })
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

            myContractInstance1.methods.buySuperBooster().send({ from: account, value: 10000000000000000000, gas: 2100000 })
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

            myContractInstance5eth1.methods.buyPool1(referraladdress).send({ from: account, value: 5000000000000000000, gas: 2100000 })
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

            myContractInstance5eth1.methods.buyPool2(referraladdress).send({ from: account, value: 25000000000000000000, gas: 2100000 })
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

            myContractInstance5eth1.methods.buyPool3(referraladdress).send({ from: account, value: 2000000000000000000, gas: 2100000 })
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
