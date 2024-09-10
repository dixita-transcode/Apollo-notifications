"use strict";
//prod
//var connection = new signalR.HubConnectionBuilder().withUrl("https://signalrprod.apollo.business/chatHub").configureLogging(signalR.LogLevel.Information).build();
////dev
var connection = new signalR.HubConnectionBuilder().withUrl("https://signalrdev.apollo.business/chatHub").configureLogging(signalR.LogLevel.Information).build();

////Disable send button until connection is established
////document.getElementById("sendButton").disabled = true;

connection.on("ReceiveNotificationMessage", function (user, message) {
    var item = user.data.filter(function (item) {
        return item.CustomerId == localStorage.getItem('cMUserID');
    });
    console.log("Invoice User = notification" + user.siteId + " and Selected user message = " + JSON.stringify(item));
    var msg = '<div class="notification-item">' + getNotificationMessage(item[0]) + ' </div>';
    $("#notificationCount").text(parseInt($("#notificationCount").text()) + 1);
    var html = $("#notification_menu").html();
    $("#notification_menu").html(msg + html);
});

connection.on("ReceiveConversationsMessage", function (user, message) {
    //var item = user.data.filter(function (item) {
    //    return item.CustomerId == localStorage.getItem('cMUserID');
    //});
    console.log("Invoice User = " + user.siteId + " and Selected user message = " + JSON.stringify(user));
    var msg = '<div > <h4>' + JSON.stringify(user) + '</h4></div>';

    var html = $("#conversionContent").html();
    $("#conversionContent").html(html + msg);
});

function getNotificationMessage(event) {
    var msg = '';
    switch (event.DetailedEventType) {
        case 1:
            //'<p>Er is een <a href="#baseURL#/#invoiceURL#">factuur</a> gegenereerd voor XXXX vanuit een <a href="#baseURL#/#periodicinvoiceURL#">periodieke factuur</a></p>'
            var metadata = JSON.parse(event.MetaData);
            msg = sessionStorage.getItem('data-load-text-2792').replace(new RegExp('#baseURL#', 'g'), window.location.origin);
            msg = msg.replace('#invoiceURL#', 'cm/apolloinvoices.aspx');
            msg = msg.replace('#COUNT#', metadata.InvoiceCount ?? '');
            break;
        case 2:
            break;
        case 3:
            var metadata = JSON.parse(event.MetaData);
            msg = sessionStorage.getItem('data-load-text-2936').replace(new RegExp('#baseURL#', 'g'), window.location.origin);
            msg = msg.replace('#proposalURL#', 'cm/apolloproposals.aspx#');
            console.log("Proposal metadata");
            console.log(metadata);
            //msg = msg.replace('XXXX', event.CustomerName);
            break;
        default:
            break; ReceiveInvoiceMessage
    }
    return msg;
}

function SetStatiticsDataWithtype(type, data) {
    var localStorageData = JSON.parse(localStorage.getItem('statiticsData'));
    switch (type) {
        case 'Invoice':
            $("#in_concept").text(data["in_concept"].toString());
            $("#in_overdue").text(data["in_overdue"].toString());
            localStorageData.in_concept = data["in_concept"];
            localStorageData.in_overdue = data["in_overdue"];
            if (data["in_concept"].toString() == "0") {
                $("#in_concept").hide();
            }
            else {
                $("#in_concept").show();
            }
            if (data["in_overdue"].toString() == "0") {
                $("#in_overdue").hide();
            }
            else {
                $("#in_overdue").show();
            }
            break;
        case 'Proposal':
            $("#pr_concept").text(data["pr_concept"].toString());
            $("#pr_open").text(data["pr_open"].toString());
            localStorageData.pr_concept = data["pr_concept"];
            localStorageData.pr_open = data["pr_open"];
            if (data["pr_concept"].toString() == "0") {
                $("#pr_concept").hide();
            }
            else {
                $("#pr_concept").show();
            }
            if (data["pr_open"].toString() == "0") {
                $("#pr_open").hide();
            }
            else {
                $("#pr_open").show();
            }
            break;
        case 'MailImport':
            $("#mailimport").text(data["mailimport"].toString());
            localStorageData.mailimport = data["mailimport"];
            if (data["mailimport"].toString() == "0") {
                $("#mailimport").hide();
            }
            else {
                $("#mailimport").show();
            }
            break;
        case 'Conversation':
            $("#conversations").text(data["conversations"].toString());
            console.log("Covnersations: " + data["conversations"].toString());

            if (data["conversations"].toString() == "0") {
                $("#conversations").hide();
            }
            else {
                $("#conversations").show();
            }
            localStorageData.conversations = data["conversations"];
            break;
        case 'Appointment':
            $("#appointments").text(data["appointments"].toString());
            localStorageData.appointments = data["appointments"];
            break;
            if (data["appointments"].toString() == "0") {
                $("#appointments").hide();
            }
            else {
                $("#appointments").show();
            }
        default:
            $("#in_concept").text(data["in_concept"].toString());
            $("#in_overdue").text(data["in_overdue"].toString());
            $("#mailimport").text(data["mailimport"].toString());
            $("#conversations").text(data["conversations"].toString());
            $("#appointments").text(data["appointments"].toString());
            $("#pr_concept").text(data["pr_concept"].toString());
            $("#pr_open").text(data["pr_open"].toString());
            localStorageData = data;
            break;
    }
    localStorage.setItem('statiticsData', JSON.stringify(localStorageData));
}

connection.on("ReceiveProposalMessage", function (user, message) {
    console.log("Proposal User = " + user + " and Proposal message = " + message);
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    //document.getElementById("messagesList").appendChild(li);
});

connection.on("ReceiveOrderMessage", function (user, message) {
    console.log("Order User = " + user + " and Order message = " + message);
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    //document.getElementById("messagesList").appendChild(li);
});

//connection.start().then(function () {
//    console.log("Connection Started successfully...!!");
//    //document.getElementById("sendButton").disabled = false;
//}).catch(function (err) {
//    return console.error(err.toString());
//});

function AddConnectionToGroup() {
    connection.invoke("AddConnectionToGroup", window.SiteID.toString()).catch(function (err) {
        return console.error(err.toString());
    });
}

async function start() {
    try {
        console.log("Start connection Trying...!!");
        await connection.start();
        console.log("Connection Started successfully...!!");
        await AddConnectionToGroup();
        console.log("Connection Added to Group successfully...!!");
    } catch (err) {
        console.log(err.toString());
        setTimeout(() => start(), 5000);
    }
};

connection.onclose(async () => {
    await start();
});

// Start the connection.
start();