const clock = setInterval(timing, 100);





      function timing() {
        const date = new Date();

        // dom
        const displayDate = document.querySelector("#date");
        const displayTime = document.querySelector("#time");
        const dateNow = date.toLocaleDateString();

        displayDate.innerHTML = dateNow;
        // const timeNow = date.toLocaleTimeString();

        let hours = date.getHours();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours < 10 ? "0" + hours : hours;
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
        let sec = date.getSeconds();
        sec = sec < 10 ? "0" + sec : sec;

        let ms = Math.round(date.getMilliseconds() / 23);

        let addTime = `${hours} : ${min} : ${sec} : ${ms} ${ampm}`;
        displayTime.innerHTML = addTime;

   

        // console.log(addTime);
        // console.log(min);
        // console.log(sec);
        console.log(ms);
        // console.log(ampm);
      }


