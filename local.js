/**
 * 存储自定义商户(id)数据到localStroage中
 * getter saveToLocal(id,key,value){}
 * setter loadFromLocal(id,key,def){}
 */
export function saveToLocal(id,key,value){
  let seller = window.localStorage.__seller__;  //数据存放的地方  
  if(!seller){    //判断是否存在__seller__值，没有则创建__seller__对象数据结构
    seller = {};
    seller[id] = {};
  }else{          //如果__seller__ 存在时，通过JSON.parse()解析为对象
    seller = JSON.parse(seller);
    if(!seller[id]){  //判断seller中是否存在当前id，不存在则创建该id对象并存入值
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);  
  //localStroage接受的是String类型，存值时通过JSON.stringify()将对象序列化为JSON存入本地中
};

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;  //数据存放的地方  
  if (!seller) {  //判断是否存在__seller__值，没有则返回默认值
    return def;
  }
  seller = JSON.parse(seller);  
  if (!seller[id]) {  //判断是否存在id，没有则返回默认值
    return def;
  }
  let ret = seller[id][key];  
  return ret || def;  
}