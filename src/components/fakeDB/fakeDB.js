const setDataToDB = data => {
    localStorage.setItem('break-time',data);
};
const getDataFromBD = () =>{
    const storedTime =  localStorage.getItem('break-time');
    if(storedTime){
        return storedTime;
    }
}
export {
    setDataToDB,
    getDataFromBD
};