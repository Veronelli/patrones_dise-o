interface HttpAdapter {
    get(): Object;
    post(): Object;
    put(): Object;
    delete(): Object;
}

class RestHttpRequest implements HttpAdapter{
    get(): Object {
        return {"response": "GET"};
    }
    post(): Object {
        return {"response": "POST"};
    }
    put(): Object {
        return {"response": "PUT"};
    }
    delete(): Object {
        return {"response": "DELETE"};
    }

}

interface FactoryHttpAdapter{
    httpConnection(): HttpAdapter;

}

class BaseFactoryHttpAdapter implements FactoryHttpAdapter{
    httpConnection(): HttpAdapter {
        throw new Error("Method not implemented.");
    }

}

class FactoryRestHttpAdapter extends BaseFactoryHttpAdapter{
    httpConnection(): HttpAdapter{
        return new RestHttpRequest();
    }

}

function appFactoryHttpAdapter(factory: new ()=> FactoryHttpAdapter): HttpAdapter{
    return new factory().httpConnection();
}

let app = appFactoryHttpAdapter(FactoryRestHttpAdapter);
console.log(app.get())