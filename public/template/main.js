const submitbtm = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const datahide = document.querySelector('.middle-layer');
const tempe = document.getElementById('tempe');
const day1 = document.getElementById('day');
const today_day = document.getElementById('today-day');
const date = new Date();
const months = ["jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const days = ["sun","Mon","Tue","wed","Thur","Fri","Sat"];
var month = date.getMonth();
var date1 = date.getDate();
var day = date.getDay();
console.log(days[day]);
day1.innerText = days[day];
today_day.innerText = `${date1} ${months[month]}`;
const getinfo = async (event)=>{
    event.preventDefault();
    let cityval = cityname.value;
    console.log(cityval);
    if(cityval === ""){
        city_name.innerText = `please enter the name of the city before search`
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8edfbf62202f3a2ec8128ae2a10a9889`
        const response = await fetch(url);
        const data1  =await response.json();
        const arrdata =  [data1];
        // console.log(arrdata[0]);
        city_name.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`;
        var x = arrdata[0].main.temp;
        x = x-273;
        x = Math.round(x);
        tempe.innerText = x;
        console.log(x);
        datahide.classList.remove('data_hide');
        }
        catch (error){
            console.log(error);
            city_name.innerText = `Enter the city name properly`
            datahide.classList.add('data_hide');
        }
    }
    // alert('hi');
}
submitbtm.addEventListener('click',getinfo)