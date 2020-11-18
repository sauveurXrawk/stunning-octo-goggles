

const $f = (func) => func;

const $d = (dispatch,type, object) => dispatch({ type: type, object: object });

const $dd = (dispatch,type, object, action) => dispatch({type: type, object:object, data:action});

//#region local bucket storage
const $ls = (data) => { 

    if(data){
        let storage = $lg(data.name);
        if(storage){
            let result = [...storage.result, data.bucket]
            sessionStorage.setItem(data.name, JSON.stringify({result:result}))
        }else{
            sessionStorage.setItem(data.name, JSON.stringify({result:[data.bucket]}))
        };
    }

}

const $setLocalStorage = (name, data) => (sessionStorage.setItem(name, JSON.stringify({result:data})))
    
 

const $lg = (name) => {
    let result =[]
    try{
        result = JSON.parse(sessionStorage.getItem(name))
    }catch{
        result = null
    }
    return result
};

const $gbd = (name) => {
    try{
        return $lg(name).result
    }catch{
        return null
    }
}

const $dls = (name) => (sessionStorage.removeItem(name));

//#endregion

const $try = (func, message) => {

    try{
        console.info("were working on your funtion...",func)
        func()
    }
    catch(err){
        console.error(message,err)
    }
}


const states = {
    sChange: "stateChange",
    ssChange: "selectStateChange"
  }
  

export {$f,$d,$dd,$try,$ls,$gbd,$dls,$setLocalStorage, states}