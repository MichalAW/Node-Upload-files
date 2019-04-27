var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    var instruction = input.trim();
    
    if (!input) {
        return;
    };
    
    switch (instruction) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
        break;
        case '/sayhello':
            process.stdout.write('hello!\n');
        break;
        case '/getOSinfo':
        // system information
            OSinfo.print();
        default:
            process.stderr.write('Wrong instruction!\n');
    };
});