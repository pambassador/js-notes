  // 输入数据
  let input = [
      "2018-4-6 03:00",
      "2018-4-6 04:05",
      "2018-4-6 5:00",
      "2018-4-6 06:00",
      "2018-4-6 7:00",
      "2018-4-6 10:00",
      "2018-4-6 11:00",
      "2018-4-7 3:00",
      "2018-4-7 4:00",
      "2018-4-7 5:00",
      "2018-4-7 6:00",
      "2018-4-7 07:09",
      "2018-4-8 3:00",
      "2018-4-8 4:00",
      "2018-4-8 5:00",
      "2018-4-8 06:30",
      "2018-4-8 7:00",
      "2018-4-9 23:00",
      "2018-4-10 00:00",
      "2018-4-12 6:00",
  ];
  // 期望输出
  let hopeOut = [
      ["2018-4-6 3:00", "2018-4-6 8:00"],
      ["2018-4-6 10:00", "2018-4-6 12:00"],
      ["2018-4-7 3:00", "2018-4-7 8:00"],
      ["2018-4-8 3:00", "2018-4-8 8:00"],
      ["2018-4-9 23:00", "2018-4-10 01:00"],
      ["2018-4-12 6:00", "2018-4-12 7:00"]
  ];

  function getTimeDuration(input) {
      let ret = [];
      //你的实现
      let temp = [input[0]];
      for(let i=1;i<input.length;i++){
        let startDate = new Date(input[i-1].replace(/-/g,"/"));
        let endDate = new Date(input[i].replace(/-/g,"/"));
        if((parseInt(endDate - startDate) / 1000 / 60 / 60) >= 2){
            temp.push(transDate(startDate));
            ret.push(temp);
            temp = [input[i]];
        }
        if(i==input.length-1){
            temp.push(transDate(endDate));
            ret.push(temp);
        }
      }
      return ret;
  }
  function transDate(date){
    date.setHours(date.getHours()+1);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    return `${year}-${month+1}-${day} ${hours}:00`
  }

  let out = getTimeDuration(input);
  console.log(out); 