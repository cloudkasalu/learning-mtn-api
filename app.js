const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { Readable } = require('stream');
const { promisify } = require('util');
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', function(req, res){

    res.render('form',{})

})

app.post('/', function(req, res){
  
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const amount = req.body.account;
  const email = req.body.email;
  const phone = req.body.phone;


  // Constant Variables

  const callbackURL = "";
  const units = "KWZ";

  const data = {
    "correlatorId": "c5f80cb8-dc8b-11ea-87d0-0242ac130003",
    "paymentDate": "2020-08-12T11:04:53.668Z",
    "name": "Manual Boost for RWC",
    "callingSystem": "ECW",
    "transactionType": "Debit",
    "targetSystem": "ECW",
    "callbackURL": "https://learning-m/url",
    "quoteId": "9223372036854775807",
    "channel": "AYO",
    "description": "Manual Boost for RW",
    "authorizationCode": null,
    "feeBearer": "Payer",
    "amount": {
      "amount": 50,
      "units": "XOF"
    },
    "taxAmount": {
      "amount": 50,
      "units": "XOF"
    },
    "totalAmount": {
      "amount": 50,
      "units": "XOF"
    },
    "payer": {
      "payerIdType": "MSISDN",
      "payerId": "233364654737",
      "payerNote": "Manual Boost for RWC",
      "payerName": "string",
      "payerEmail": "string",
      "payerRef": "233364654737",
      "payerSurname": "Orimoloye",
      "includePayerCharges": false
    },
    "payee": [
      {
        "amount": {
          "amount": 50,
          "units": "XOF"
        },
        "taxAmount": {
          "amount": 50,
          "units": "XOF"
        },
        "totalAmount": {
          "amount": 50,
          "units": "XOF"
        },
        "payeeIdType": "USER",
        "payeeId": "AYO.DEPOSIT",
        "payeeNote": "Manual Boost for RWC",
        "payeeName": "string"
      }
    ],
    "paymentMethod": {
      "name": "Manual Boost for RWC",
      "description": "Manual Boost for RWC",
      "validFrom": "2021-07-21T17:32:28Z",
      "validTo": "2021-07-21T17:32:28Z",
      "type": "BankCard",
      "details": {
        "bankCard": {
          "brand": "Visa",
          "type": "Credit",
          "cardNumber": "xxxx xxxx xxx xxx",
          "expirationDate": "2021-07-21T17:32:28Z",
          "cvv": "123",
          "lastFourDigits": "1234",
          "nameOnCard": "Bruce Wayne",
          "bank": "Bank of Gotham",
          "pin": "123"
        },
        "tokenizedCard": {
          "brand": "string",
          "type": "string",
          "lastFourDigits": "string",
          "tokenType": "string",
          "token": "string",
          "issuer": "string"
        },
        "bankAccountDebit": {
          "accountNumber": "string",
          "accountNumberType": "string",
          "BIC": "string",
          "owner": "string",
          "bank": "string"
        },
        "bankAccountTransfer": {
          "accountNumber": "string",
          "accountNumberType": "string",
          "BIC": "string",
          "owner": "string",
          "bank": "string"
        },
        "account": {
          "id": "string",
          "name": "string",
          "description": "string"
        },
        "loyaltyAccount": {
          "id": "string",
          "name": "string",
          "description": "string"
        },
        "bucket": {
          "id": "string",
          "name": "string",
          "description": "string"
        },
        "voucher": {
          "code": "string",
          "description": "string",
          "value": "string",
          "expirationDate": "2019-08-24T14:15:22Z",
          "campaign": "string"
        },
        "digitalWallet": {
          "service": "MoMo",
          "walletId": "233364654737",
          "walletUri": "https://paypal.me/johndoe"
        },
        "invoice": {
          "id": "86rer4478878t991",
          "type": "trigger",
          "frequency": "on_call",
          "startDate": "2021-03-20",
          "endDate": "2021-09-20",
          "retryOnFail": true,
          "deactivateOnFail": true,
          "callbackUrl": "https://merchant-application-url/webhook-endpoint",
          "retryRun": "1-5",
          "retryFrequency": "once"
        }
      }
    },
    "status": "Pending",
    "statusDate": "2020-08-12T11:04:53.668Z",
    "additionalInformation": [
      {
        "name": "BundleName",
        "description": "Voice_1111"
      }
    ],
    "segment": "subscriber"
  }

//   .then(
//     fetch("https://api.mtn.com/v1/payments", {
//   "method": "POST",
//   "headers": {
//     "Content-Type": "application/json",
//     "X-Authorization": "",
//     "Authorization": ""
//   },
//   "body": data
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// }))


const secret_key = "3wLhzduAr43F6Y8o";
const client_id = "T8yUrJ9AZC7eDq9NB4UBpIWLKKVxVhgG";


const tokenUrl = "https://api.mtn.com/v1/oauth/access_token?consumer_key=T8yUrJ9AZC7eDq9NB4UBpIWLKKVxVhgG&secret_key=3wLhzduAr43F6Y8o";
  
fetch("https://api.mtn.com/v1/oauth/access_token?grant_type=client_credentials", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "body": {
    "client_id": client_id,
    "client_secret": secret_key
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});



})


app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on Port 30000')
})
