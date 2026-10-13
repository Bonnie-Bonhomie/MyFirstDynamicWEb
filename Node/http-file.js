import http from 'http';

const server = http.createServer((request, response)=>{
   
    //Selection statement in ES module must be complete that is (if- else if )

    if(request.url === '/'){
        response.write("This is the home page \nthis is the response from the server");
        response.end();
    }
    else if(request.url === '/about'){
        response.write("This is the about page, \nthis is the response from the server");
        response.end();
    }
    else{
     response.end(`
       <h1>Oops!</h1> 
       <p>The page you are looking for does not exist or it can't be reach</p>
       <a href='/'>Click to go back home </a>`);
    }
    
   
})

server.listen(4000) // The 4000 is the port value and It can be change