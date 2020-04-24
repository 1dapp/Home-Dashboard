
    var myContractInstance;
var abi = [{ "constant": false, "inputs": [], "name": "buyPool1", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool5currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool5users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool3userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool1userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool8userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool1activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool1users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool4", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool5activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool9currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool4userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool2activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool7", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool9userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool1currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool4activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool9users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool2", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool7currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool10currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool6users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool8", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "getEthBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool3users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "LEVEL_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "unlimited_level_price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool2userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool8activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool4users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool6userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "requests", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "referrerID", "type": "uint256" }, { "internalType": "uint256", "name": "referredUsers", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool2users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool8currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool7users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool9activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_referrerID", "type": "uint256" }], "name": "regUser", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "ownerWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool7activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool10activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool4currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool8users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool9", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "referrerID", "type": "uint256" }, { "internalType": "uint256", "name": "referredUsers", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool6", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool2currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool3", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool3currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool5userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool7userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool10userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool3activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool10", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool6currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool10users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool5", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool6activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_referrer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "regLevelEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_referral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "getMoneyForLevelEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "regPoolEntry", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "getPoolPayment", "type": "event" }];
var address = "0x7a78E3D47C9E20836aca681956D8A972c0C79389";
var account = "";

   


function SigninPage(){
  
    if (typeof web3 !== 'undefined') {
     
        $('#lgambtn').show();
       
        web3 = new Web3(web3.currentProvider);

        web3.eth.getAccounts().then(function (result) {
            account = result[0];
          
        });
        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;



    } else {
       
        const infura = 'https://mainnet.infura.io/v3/bb53409129cd49ef8809f668af522aac';
          const web3 = new Web3(new Web3.providers.HttpProvider(infura));

        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;
    }


    //var events = myContractInstance.allEvents({ fromBlock: "latest", toBlock: 'latest' });
    //// watch for changes
    //events.watch(function (error, event) {
    //    if (!error) {

    //        if (event.event == "getMoneyForLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "User " + event.args._referral,
    //                    message: "Received " + event.args._level.c[1] == 1 ? level1 : event.args._level.c[1] == 2 ? level2 : event.args._level.c[1] == 3 ? level3 : level4 + " referral income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //        if (event.event == "regLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "Congragulations! New User " + event.args._user + " Registered ",
    //                    message: "Welcome to BullRun"
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }


    //        if (event.event == "getPoolPayment") {
    //            // Notification 1
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "User " + event.args._receiver,
    //                    message: "Received " + event.args._level.c[1] == 1 ? pool1_price : event.args._level.c[1] == 2 ? pool2_price : event.args._level.c[1] == 3 ? pool3_price : event.args._level.c[1] == 4 ? pool4_price : event.args._level.c[1] == 5 ? pool5_price : event.args._level.c[1] == 6 ? pool6_price : event.args._level.c[1] == 7 ? pool7_price : event.args._level.c[1] == 8 ? pool8_price : event.args._level.c[1] == 9 ? pool9_price : pool10_price + " Pool income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //    }
    //});
   

}

$(document).ready(function () { 

    $('#lgambtn').click(function () {
       

        try {
            myContractInstance.methods.users(account).call().then(function (result) {
                if (result[0]) {
                    localStorage.setItem("address", account);
                    location.href = "/Home/Dashboard";
                }
                else {
                    $('.error').html('You need to register first');
                    $('.error').show();
                }


            });
        }
        catch (e) {
            console.log(e)
        }
    })

    function trackTransaction(result) {

        console.log(result);
        web3.eth.getTransactionReceipt(result, function (error, result1) {
            if (result1 == null) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

                trackTransaction(result)
            }
            else {
                if (result1.status == "0x1") {
                    alert("success")
                    localStorage.setItem("address", account);
                    location.href = "/Home/Dashboard";
                }
                else {
                    $('.error').html('Transaction Failed');
                    $('.error').show();
                }
            }
        })
    }

    $('#lgmbtnsup').click(async () => {
      
        var add = $('[name="referral"]').val();
        if (add.length == 0) {
            $('.error').html('Enter referral code');
            $('.error').show();

            return false;
        }
      
        if (typeof web3 !== 'undefined') {
           
           
            await ethereum.enable();
            
            
            web3 = new Web3(web3.currentProvider);
  MyContract = new web3.eth.Contract(abi, address);
            // initiate contract for an address

            myContractInstance = MyContract;

        //   checkbuyLevel();
            web3.eth.getAccounts().then(function(result){
                account = result[0];
                SignUpPay(account);
            });
             
          

          

           

        }
        else {
            console.log("Metamask not found")
        }

    })


    function SignUpPay(account) {
        var add = $('[name="referral"]').val();
        myContractInstance.methods.regUser(add).send({ from: account, value: 50000000000000000, gas: 3000000 })
            .on('transactionHash', function (hash) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

              //  trackTransaction(result);
            })

            .on('receipt', function (receipt) {
                // receipt example
                console.log(receipt);
               
               
                    if (receipt.status) {
                        alert("success")
                        localStorage.setItem("address", account);
                        location.href = "/Home/Dashboard";
                    }
                    else {
                        $('.error').html('Transaction Failed');
                        $('.error').show();
                    }
                
            })
            .on('error', console.error);

    }



    $('#lgmbtn').click(function () {
        var add = $('[name="ethaddress"]').val();
        if (add.length > 0) {
            try {
                myContractInstance.methods.users(add).call().then(function (result) {
                    
                    if (result[0]) {

                       

                            localStorage.setItem("address", add);
                            location.href = "/Home/Dashboard";
                        }
                        else {
                            $('.error').html('You need to register first');
                            $('.error').show();
                        }
                    

                });

            }
            catch (err) {
                console.log(err);
            }

        }
        else {
            $('.error').html('Enter Valid ETH address');
            $('.error').show();
        }
    });
