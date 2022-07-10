const unicIp = (arrayIp) =>{
  return Array.from(new Set(arrayIp)).length;
}

console.log(unicIp(listIPv4));

