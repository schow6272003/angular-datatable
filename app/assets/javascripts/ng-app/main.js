var app = angular.module("myApp", [])

app.controller("myCtrl", function($scope) {


 $scope.table_data = [
   {
      "id": 1,
      "date": "2016-3-31",
      "apn": 812473246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  "21.99%",
      "interest_rate": "7.99%",
      "loan_amount": 310000,
      "loan_term":  "1 year",
      "appraisal_value": 455.00
    },
   {
      "id": 2,
      "date": "2016-2-31",
      "apn": 5173246,
      "address": "1909 Charlemount Ave",
      "city": "Rowland Height",
      "max_rate":  "21.99%",
      "interest_rate": "7.99%",
      "loan_amount": 310000,
      "loan_term":  "1 year",
      "appraisal_value": 455.00
    },
   {
      "id": 3,
      "date": "2014-1-31",
      "apn": 4173246,
      "address": "1901 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  "21.99%",
      "interest_rate": "7.99%",
      "loan_amount": 310000,
      "loan_term":  "1 year",
      "appraisal_value": 445.00
    },
   {
      "id": 4,
      "date": "2016-6-31",
      "apn": 2173246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height 1",
      "max_rate":  "21.99%",
      "interest_rate": "7.99%",
      "loan_amount": 31023000,
      "loan_term":  "1 year",
      "appraisal_value": 455.00
    },
   {
      "id": 5,
      "date": "2010-3-31",
      "apn": 7173246,
      "address": "1129 Seaman Ave",
      "city": "Hacienda Height 2",
      "max_rate":  "22.99%",
      "interest_rate": "7.99%",
      "loan_amount": 3210000,
      "loan_term":  "2 year",
      "appraisal_value": 465.00
    }

  ];

}); // End of controller