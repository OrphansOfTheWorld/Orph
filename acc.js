jQuery(document).ready( function($){
    var testNetwork = "https://horizon-testnet.stellar.org";
    var liveNetwork = "https://horizon.stellar.org";
    var friendbot = "https://horizon-testnet.stellar.org/friendbot";
   
   
    var server = new StellarSdk.Server(testNetwork);
    var keys = false;
   
   
    // generate Key Pair
    $('#generateKey').on('click', function() {
      console.log("generateKey");
      keys = StellarSdk.Keypair.random();
        var output = "Account ID:"+keys.accountId()+"Secret Key: "+keys.seed()+""; 
      $('#generatedKeys').html(output); 
    }); 
   // Create Account 
   $('#createAccount').on('click', function() { 
    var resp = $('#createResponse'); 
    if (keys) { 
    resp.html('Creating account ...'); 
    $.get(friendbot, { addr: keys.accountId()}) 
       .done(function(data){ 
             console.log("Data: ",data); 
             resp.html('Account created successfully'); 
       }) 
      .fail(function(error) { 
            console.log("error", error); 
            resp.html('Account creation failed'); 
       }); 
    }else{ alert("Please generate keys"); } }); });