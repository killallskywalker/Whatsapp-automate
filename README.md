# Whatsapp-automate
FAAS For Lazy/Busy Person/Husband/Boyfrend who need to make sure they always sending night wish/morning wish to their beloved one . By using
AWS Lambda,Cloudwatch event and Twillio For Whatsapp , we can do a simple job just to send whatsapp to our beloved one . 

# How To Use 
1. npm install 
2. add serverless.env.yml to set twilio credential
   ```TWILIO_SID``` and ```TWILIO_AUTH``` . 

# Test 
You can test the function by using ```serverless invoke local -f sendWish```

# Deploy 
1.to deploy local ```sls offline start ```  
2.to aws ```sls deploy```
   
