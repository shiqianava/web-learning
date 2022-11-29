let buf = Buffer.alloc(5, 'abcde');
console.log(buf);
console.log( String(buf) );
console.log( buf.toString() );
console.log( new String(buf) );