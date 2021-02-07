//Defining variables
var fnbCtn = $("#fnb-ctn");
var fnbBtn = $("#fnb-btn");
var toiletCtn = $("#toilet-ctn");
var toiletBtn = $("#toilet-btn");

//Start of Inventory Page
//Document hides FNB content on document ready
$(document).ready(function(){
    fnbCtn.hide();
});

//Showing FNB content - Inventory page
document.getElementById('fnb-btn').onclick = function() {
  if(fnbCtn.is(':hidden')){
    fnbCtn.show();
    toiletCtn.hide();
  }
};

//Showing Toilet content - Inventory page
document.getElementById('toilet-btn').onclick = function() {
  if(toiletCtn.is(':hidden')){
    toiletCtn.show();
    fnbCtn.hide();
  }
};

function itemLowAlert() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'alert-card';
  alert.header = 'Item Count Low';
  alert.subHeader = 'Following items are running low';
  alert.message = 'items running low';
  alert.buttons = ['Got It!'];

  document.body.appendChild(alert);
  return alert.present();
};

function logOutAlert() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'alert-card';
  alert.header = 'Log Out Alert';
  alert.subHeader = 'Do you want to log out?';
  alert.message = 'items running low';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel')
      }
    }, {
      text: 'Log Out',
      handler: () => {
        console.log('Confirm Ok')
        location.href = "index.html"
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();
}
/*
function itemLowAlert(){
  const alert = document.createElement('item-low-alert');
  
}*/
//End Of Inventory Page
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//Chart JS Settings
// Start of expenses chart settings
var xtx = document.getElementById("expenseChart").getContext("2d");
var echart = new Chart(xtx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    //Expenses graph labels
    labels: ["Occupied", "Vacant", "Cleaning"],

    datasets: [
      {
        //Data of room statuses
        data: [10, 20, 30],
        label: "Expenses",
        //Colour of each room status
        backgroundColor: ["#0000A5", "#EB445A", "#FFC409"],
        fill: false,
      },
    ],
  },

  // Configuration options go here
  options: {
    //customise legend details
    legend: {
      position: "bottom",

      labels: {
        fontSize: 20,
        fontFamily: "'Poppins'",
        //fontStyle: 'Medium 500',
        fontColor: "#171C27",
        padding: 25,
      },
    },
  },
});
//End of expenses chart settings
//-------------------------------
// Start of doughnut chart settings
var ctx = document.getElementById("doughChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    //Room status labels
    labels: ["Occupied", "Vacant", "Cleaning"],
    datasets: [
      {
        //Data of room statuses
        data: [10, 20, 30],

        //Colour of each room status
        backgroundColor: ["#0000A5", "#EB445A", "#FFC409"],
      },
    ],
  },

  // Configuration options go here
  options: {
    //customise legend details
    legend: {
      position: "right",

      labels: {
        fontSize: 20,
        fontFamily: "'Poppins'",
        //fontStyle: 'Medium 500',
        fontColor: "#171C27",
        padding: 25,
      },
    },
  },
  //End of doughnut chart settings
});
