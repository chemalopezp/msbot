
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }
})

// curl -v -X POST "https://speech.platform.bing.com/recognize?scenarios=ulm&appid=D4D52672-91D7-4C74-8AD8-42B1D98141A5&locale=en-US&device.os=macOS&version=3.0&format=json&requestid=b2c95ede-97eb-4c88-chem-80f32d6aee54&instanceid=b2c95ede-97eb-chema-81e4-80f32d6aee54" -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6Imh0dHBzOi8vc3BlZWNoLnBsYXRmb3JtLmJpbmcuY29tIiwic3Vic2NyaXB0aW9uLWlkIjoiOWMzYzA3MjczMWQzNDQyM2I3YmU1YWJhMWZmMzhjNTMiLCJwcm9kdWN0LWlkIjoiQmluZy5TcGVlY2guUHJldmlldyIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIiLCJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMiLCJhdWQiOiJ1cm46bXMuc3BlZWNoIiwiZXhwIjoxNDg1OTgxMDg5fQ.ZoRDzhpI9_yuhgrk7LNBWOaFbl3n0LmX7sd73NswzUI' -H 'Content-type: audio/wav; codec="audio/pcm"; samplerate=16000' --data-binary "/Users/joselopez/howard.wav"
