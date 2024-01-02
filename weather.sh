#! get zipcode
echo "Enter a zipcode: "
read zipcode
# echo ${zipcode}
api_key="885ce936e04e2173691aaccabdd38688"

#!api fetch
json_data=$(curl -s "https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${api_key}")
# echo ${json_data}

condition = $(echo "$json_data" | jq -r '.weather[0].main')
temperature = $(echo "$json_data" | jq -r '.main.temp')

#! Print the weather sentence
echo "Currently, the weather for ${zipcode} is ${condition} with a temperature of ${temperature} degrees."
