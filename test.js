var ios = require('node-iOS');
ios.device.orientation(function(err,resp) { 
    if (err) console.log(err);
    console.log(typeof resp);
    console.log(resp); 
});
