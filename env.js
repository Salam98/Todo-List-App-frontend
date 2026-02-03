const BaseURL = 'http://192.168.1.19:8000';

export default BaseURL ;


// netstat -ano|findstr "port 8000"
// netsh interface portproxy add v4tov4 listenaddress = 192.168.1.19 listenport = 8000 connectaddress = 127.0.0.1 connectport = 8000
// netsh interface portproxy delete v4tov4 listenaddress = 192.168.1.30 listenport = 8000