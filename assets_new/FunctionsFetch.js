
var totalearned = 0;
function getVariableData() {
    // get variable values
    myContractInstance.methods.pool1currUserID().call().then(function (result) {
        $('.Pool1count').html(result);
        $('.pool1_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool2currUserID().call().then(function (result) {
        
            $('.Pool2count').html(result);
        $('.pool2_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool3currUserID().call().then(function (result) {
       
            $('.Pool3count').html(result);
        $('.pool3_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool4currUserID().call().then(function (result) {
       
            $('.Pool4count').html(result);
        $('.pool4_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result+ "</a>");
    });



    myContractInstance.methods.pool5currUserID().call().then(function (result) {
       
            $('.Pool5count').html(result);
        $('.pool5_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.boostercurrUserID().call().then(function (result) {
        
            $('.Pool6count').html(result);
        $('.pool6_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.superboostercurrUserID().call().then(function (result) {

        $('.Pool7count').html(result);
        $('.pool7_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

   
    myContractInstance5eth.methods.pool1currUserID().call().then(function (result) {
        $('.Pool8count').html(result);
   });

    myContractInstance5eth.methods.pool2currUserID().call().then(function (result) {

        $('.Pool9count').html(result);
    });

    myContractInstance5eth.methods.pool3currUserID().call().then(function (result) {

        $('.Pool10count').html(result);
    });

    myContractInstance.methods.currUserID().call().then(function (result) {
    
       
            $('.TotalUsers').html(result);

    });

    myContractInstance.methods.users(account).call().then(function (result1) {
        
        $('.currentuseridlink').html("https://bullrun.live/bullrun2/User/signup?referralid=" + result1.id);

            $('.currentuseridlinknew').html("https://link.trustwallet.com/open_url?coin_id=60&url=https://bullrun.live/bullrun2/User/signup?referralid=" + result1.id);



        $('.currentuseridlink').val("https://bullrun.live/bullrun2/User/signup?referralid=" + result1.id);

        $('.currentuseridlinknew').val("https://link.trustwallet.com/open_url?coin_id=60&url=https://bullrun.live/bullrun2/User/signup?referralid=" + result1.id);



        $('.sharebutton').attr('data-url', "https://bullrun.live/bullrun2/User/signup?referralid=" + result1.id);
            $('.currentuserid').html(result1.id);
            $('.currentaddress').html(account);
            $('.ethaddress').attr('href', 'https://etherscan.io/address/' + account);
        
    });

    myContractInstance.methods.pool1activeUserID().call().then(function (result) {
        $('.pool1activeUserID').html("Current Paying Sequence number : "+(parseInt(result)+5));
    });

    myContractInstance.methods.pool2activeUserID().call().then(function (result) {
        $('.pool2activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 5));
    });

 
    myContractInstance.methods.pool3activeUserID().call().then(function (result) {
        $('.pool3activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 5));
    });

    myContractInstance.methods.pool4activeUserID().call().then(function (result) {
        $('.pool4activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 5));
    });

    myContractInstance.methods.pool5activeUserID().call().then(function (result) {
        $('.pool5activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 5));
    });

    myContractInstance.methods.boosteractiveUserID().call().then(function (result) {
        $('.pool6activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 2));
    });

    myContractInstance.methods.superboosteractiveUserID().call().then(function (result) {
        $('.pool7activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 2));
    });
   
    myContractInstance5eth.methods.pool1activeUserID().call().then(function (result) {
        $('.pool8activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 4));
    });

    myContractInstance5eth.methods.pool2activeUserID().call().then(function (result) {
        $('.pool9activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 10));
    });

    myContractInstance5eth.methods.pool3activeUserID().call().then(function (result) {
        $('.pool10activeUserID').html("Current Paying Sequence number : " + (parseInt(result) + 10));
    });

    if (account !== 'undefined') {
        getReferralCommission();
        getPoolPaymentReceived();



   
    }
    


    

    
    
    DirectreferralCount();
}




function getReferralCommission() {
    

    var level1 = parseFloat(0.01); var level2 = parseFloat(0.01); var level3 = parseFloat(0.01); var level4 = parseFloat(0.001);
    var counter = 1;
    var referraltotal = parseFloat(0);
    var referraltotalpool = parseFloat(0);


    var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
        
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;

                if (level == 1) {
                    if (counter == 1) {
                        referraltotal = parseFloat(referraltotal) + parseFloat("0.01");
                    }
                    else if (counter == 2) {
                        referraltotal = parseFloat(referraltotal) + parseFloat("0.02");
                    }
                    else if (counter == 3) {
                        referraltotal = parseFloat(referraltotal) + parseFloat("0.03");
                    }
                    else if (counter == 4) {
                        referraltotal = parseFloat(referraltotal) + parseFloat("0.04");
                    }
                    else{
                        referraltotal = parseFloat(referraltotal) + parseFloat("0.05");
                    }
                    
                    counter++;
                }
                else if (level == 2) {

                    referraltotal = parseFloat(referraltotal) + parseFloat("0.01");
                }
                else if (level == 3) {
                    referraltotal = parseFloat(referraltotal) + parseFloat("0.01");

                }
                else {

                    referraltotal = parseFloat(referraltotal) + parseFloat("0.001");

                }

                $('.totalreferral').html(Math.round(1000000 * (referraltotal)) / 1000000);
            });
           
        }
    });

    

    myContractInstance.getPastEvents('getMoneyForPoolLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;

                if (level == 1) {
                   
                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.02");
                    
                    
                }
                else if (level == 2) {

                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.02");
                }
                else if (level == 3) {
                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.02");

                }
                else if (level == 4) {
                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.02");

                }
                else if (level == 5) {
                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.02");

                }
                else if (level == 6) {
                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.25");

                }
                else {

                    referraltotalpool = parseFloat(referraltotalpool) + parseFloat("2.5");

                }

                $('.totalreferralpool').html(Math.round(1000000 * (referraltotalpool)) / 1000000);
            });
           
        }
    });



    myContractInstance5eth.getPastEvents('getMoneyForPoolLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        if (!error) {
            if (!error) {
                $.each(log, function (key, value) {
                    var level = value.returnValues._level;

                    if (level == 1) {
                        referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.5");
                    }
                    else if (level == 2) {

                        referraltotalpool = parseFloat(referraltotalpool) + parseFloat("2.5");
                    }
                    else if (level == 3) {
                        referraltotalpool = parseFloat(referraltotalpool) + parseFloat("0.2");

                    }
                    $('.totalreferralpool').html(Math.round(1000000 * (referraltotalpool)) / 1000000);
                });

            }
        }
    });

}



function getPoolPaymentReceived() {
    var pool1_price = 0.02;
    var pool2_price = 0.02;
    var pool3_price = 0.02;
    var pool4_price = 0.02;
    var pool5_price = 0.02;
    var pool6_price = 0.25;
    var pool7_price = 2.5;
   
    var referraltotalpool2eth = parseFloat(0);
    var referraltotalpool5eth = parseFloat(0);
    var referraltotalpool25eth = parseFloat(0);
    var referraltotal = parseFloat(0);

    var events = myContractInstance.getPastEvents('getPoolPayment', {filter : { _receiver: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {

        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;

                if (level == 1) {
                    referraltotal = parseFloat(referraltotal) + pool1_price;
                }
                else if (level == 2) {
                    referraltotal = parseFloat(referraltotal) + pool2_price;
                }
                else if (level == 3) {
                    referraltotal = parseFloat(referraltotal) + pool3_price;
                }
                else if (level == 4) {
                    referraltotal = parseFloat(referraltotal) + pool4_price;
                }
                else if (level == 5) {
                    referraltotal = parseFloat(referraltotal) + pool5_price;
                }
                else if (level == 6) {
                    referraltotal = parseFloat(referraltotal) + pool6_price;
                }
                else if (level == 7) {
                    referraltotal = parseFloat(referraltotal) + pool7_price;
                }
               

                $('.totalpoolpayment').html(Math.round(1000000 * (referraltotal)) / 1000000);
            });
        }
    });
   

    myContractInstance5eth.getPastEvents('getPoolPayment', { filter: { _receiver: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        console.log(account);
        if (!error) {
            $.each(log, function (key, value) {
               
                var level = value.returnValues._level;

                if (level == 1) {

                    referraltotalpool5eth = parseFloat(referraltotalpool5eth) + parseFloat("1");


                }
                else if (level == 2) {

                    referraltotalpool25eth = parseFloat(referraltotalpool25eth) + parseFloat("2");
                }
                else if (level == 3) {
                    referraltotalpool2eth = parseFloat(referraltotalpool2eth) + parseFloat("0.2");

                }


                $('.pool2ethautopoolearning').html(Math.round(1000000 * (referraltotalpool2eth)) / 1000000);
                $('.pool5autopoolearning').html(Math.round(1000000 * (referraltotalpool5eth)) / 1000000);
                $('.pool25autopoolearning').html(Math.round(1000000 * (referraltotalpool25eth)) / 1000000);
            });

        }
    });

    
}

var templevel = 1, t = 1;
var employees = {
    accounting: []
};
var str = "";
//'0x78c3F84046C0a0f1D0044e25ab4898A7F9165034'
function Directreferral() {
    
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {

        if (!error) {

            $.each(log, function (key, value) {
                if (t == 1) {
                    t = 2;
                    $('#accordion11').html("");
                    $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                        '<h4 class= "panel-title1">' +
                        '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseFour11" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level 1</a>' +
                        '</h4 >' +
                        '</div >' +
                        '<div id="collapseFour11" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                        '<div class= "panel-body border" ></div></div></div>')
                        ;

                }
                $('#collapseFour11 .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');

                employees.accounting.push({

                    'address': value.returnValues._user,
                    "level": 1

                });

                InDirectreferral(value.returnValues._user, 2)
            });
        }
        else {

            $('#accordion11').append('No data');
                ;
        }
    });
}


function InDirectreferral(address, level) {
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {

        if (!error) {
            $.each(log, function (key, value) {
                if (templevel != level) {
                    str += '';
                }
                if (templevel != level) {
                    templevel = level;
                    $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                        '<h4 class= "panel-title1">' +
                        '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1' + level + '" href="#collapseFour1' + level + '" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level ' + level + '</a>' +
                        '</h4 >' +
                        '</div >' +
                        '<div id="collapseFour1' + level + '" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                        '<div class= "panel-body border" ></div></div></div>')
                        ;
                }
                $('#collapseFour1' + level + ' .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');

                employees.accounting.push({

                    'address': value.returnValues._user,
                    "level": level

                });
                if (_level < 10) {
                    InDirectreferral(value.returnValues._user, level + 1);
                }
            });
        }
    });
}

function DirectreferralCount() {
    if (ismetamask) {
        $('.indirect_team_dash').show();
    }
    else {
        $('.indirect_team_dash').hide();
    }
    var i = 1;
    $('.referralcount').html(0);
    $('.indirect_referralcount').html(0);
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
       
        if (!error) {
            $.each(log, function (key, value) {
                $('.referralcount').html(i++);
                if (ismetamask) {
                    InDirectreferralCount(value.returnValues._user, 1);
                }
                else {
                    $('.indirect_team_dash').hide();
                }
            });
        }
        else {
            $('.referralcount').html(0);
            $('.indirect_referralcount').html(0);
        }
    });
     
}
var count = 1;

function InDirectreferralCount(address, level) {
    
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
      
        if (!error) {
            $.each(log, function (key, value) {
                $('.indirect_referralcount').html(count++);
                InDirectreferralCount(value.returnValues._user, level + 1);
            });
        }
        else {
            $('.indirect_referralcount').html(0);
        }
    });

}


function Transaction_Register() {
    
    var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', {filter:{ _user: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
        var level1 = parseFloat(0.01); var level2 = parseFloat(0.01); var level3 = parseFloat(0.01); var level4 = parseFloat(0.001);
        var counter = 1;
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;
                var levelprice = (value.returnValues._level == 1 ? level1 : value.returnValues._level == 2 ? level2 : value.returnValues._level == 3 ? level3 : level4);
                if (level == 1) {
                    if (counter == 1) {
                        levelprice = 0.01;
                    }
                    else if (counter == 2) {
                        levelprice = 0.02;
                    }
                    else if (counter == 3) {
                        levelprice = 0.03;
                    }
                    else if (counter == 4) {
                        levelprice = 0.04;
                    }
                    else {
                        levelprice = 0.05;
                    }
                    counter++;
                }
                $('.autopool_table').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._referral + '</td><td>' + value.returnValues._level + '</td><td>' + levelprice + ' ETH</td></tr>');
            });
        }
    });
}


function Referral_Pool() {

    var events = myContractInstance.getPastEvents('getMoneyForPoolLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        var level1 = parseFloat(0.02); var level2 = parseFloat(0.25); var level3 = parseFloat(2.5); var level4 = parseFloat(0.001);
        var counter = 1;
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;
                var levelprice = (value.returnValues._level >= 1 && value.returnValues._level <=5 ? level1 : value.returnValues._level == 6 ? level2 : value.returnValues._level == 7 ? level3 : level3);
              
                $('.autopoolreferral_table').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._referral + '</td><td>' + value.returnValues._level + '</td><td>' + levelprice + ' ETH</td></tr>');
            });
        }
    });
}


function Transaction_Pool() {
    var events = myContractInstance.getPastEvents('getPoolPayment', {filter:{ _receiver: account },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        var pool1_price = 0.02;
        var pool2_price = 0.02;
        var pool3_price = 0.02;
        var pool4_price = 0.02;
        var pool5_price = 0.02;
        var pool6_price = 0.25;
        var pool7_price = 2.5;
        var pool8_price = 20;
        var pool9_price = 50;
        var pool10_price = 100;

        if (!error) {
            $.each(log, function (key, value) {
                $('.transaction_autopool').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._user + '</td><td>' + value.returnValues._level + '</td><td>' + (value.returnValues._level == 1 ? pool1_price : value.returnValues._level == 2 ? pool2_price : value.returnValues._level == 3 ? pool3_price : value.returnValues._level == 4 ? pool4_price : value.returnValues._level == 5 ? pool5_price : value.returnValues._level == 6 ? pool6_price : value.returnValues._level == 7 ? pool7_price : value.returnValues._level == 8 ? pool8_price : value.returnValues._level == 9 ? pool9_price : pool10_price) + ' ETH</td></tr>');
            });
        }
    });
}




function Referral_Pool5eth() {

    var events = myContractInstance5eth.getPastEvents('getMoneyForPoolLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        var level1 = parseFloat(0.5);
        var level2 = parseFloat(2.5);
        var level3 = parseFloat(0.2);
        var counter = 1;
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;
                var levelprice = value.returnValues._level == 1 ? level1 : value.returnValues._level == 2 ? level2 : level3;

                $('.autopoolreferral_table5eth').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._referral + '</td><td>' + (value.returnValues._level == 3 ? 8 : value.returnValues._level == 1 ? 9 : 10)  + '</td><td>' + levelprice + ' ETH</td></tr>');
            });
        }
    });
}


function Transaction_Pool5eth() {
    var events = myContractInstance5eth.getPastEvents('getPoolPayment', { filter: { _receiver: account }, 'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        var pool1_price = 1;
        var pool2_price = 2;
        var pool3_price = 0.2;
        console.log(account)

        if (!error) {
            $.each(log, function (key, value) {
                $('.transaction_autopool5eth').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._user + '</td><td>' + (value.returnValues._level == 3 ? 8 : value.returnValues._level == 1 ? 9 : 10) + '</td><td>' + (value.returnValues._level == 1 ? pool1_price : value.returnValues._level == 2 ? pool2_price : value.returnValues._level == 3 ? pool3_price : 0) + ' ETH</td></tr>');
            });
        }
    });
}
