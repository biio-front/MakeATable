$(window).on('load',function(){

    //---------배열(그룹) 만들기--------------------------------------
    const B2Arr = new Array();  //2년차 형제
    const B1Arr = new Array();  //1년차 형제
    const S2Arr = new Array();  //2년차 자매
    const S1Arr = new Array();  //1년차 자매
    const B3Arr = new Array();  //중년 형제
    const S3Arr = new Array();  //중년 자매
    const B2SArr = new Array();  //2년차 형제 전봉
    const B1SArr = new Array();  //1년차 형제 전봉
    const S2SArr = new Array();  //2년차 자매 전봉
    const S1SArr = new Array();  //1년차 자매 전봉

    const b2 = '.2th_b li:nth-child';
    const b1 = '.1th_b li:nth-child';
    const s2 = '.2th_s li:nth-child';
    const s1 = '.1th_s li:nth-child';
    const b3 = '.Middle_b li:nth-child';
    const s3 = '.Middle_s li:nth-child';


    // HTML의 li에서 정보를 받아와 배열 만들기
        // 각 그룹별로 최대 100명으로 가정.
        // (ex. 1년차 s 수가 100명이 넘어간다면 숫자를 바꾸어야함)

    // 예외사항(class)가 없는 배열 만들기
    function makeArr(group_name, Arr){
        for(let i = 1; i <= 100; i++){
            // i번째 li가 없을 경우 break
            if($(`${group_name}(${i})`).length == 0) break;
            if($(`${group_name}(${i})`).hasClass('faci')||$(`${group_name}(${i})`).hasClass('spe')||$(`${group_name}(${i})`).hasClass('other')){
            }else{
                const element = $(`${group_name}(${i})`).text();
                Arr.push(element);
            }
        }
    }
    // 예외사항(class)가 없는 중년 배열 만들기
    function makeArrMid(group_name, Arr){
        for(let i = 1; i <= 100; i++){
            if($(`${group_name}(${i})`).length == 0) break;
            if($(`${group_name}(${i})`).hasClass('other')){
            }else{
                const element = $(`${group_name}(${i}) input`).val();
                Arr.push(element);
            }
        }
    }
    // 전문봉사(class=spe)인 배열 만들기
    function makeSpeArr(group_name, Arr){
        for(let i = 1; i <= 100; i++){
            if($(`${group_name}(${i})`).length == 0) break;
            if($(`${group_name}(${i})`).hasClass('spe')){
                const element = $(`${group_name}(${i})`).text();
                Arr.push(element);
            }
        }
    }

    makeArr(b2, B2Arr);
    makeArr(b1, B1Arr);
    makeArr(s2, S2Arr);
    makeArr(s1, S1Arr);
    makeArrMid(b3, B3Arr);
    makeArrMid(s3, S3Arr);
    makeSpeArr(b2, B2SArr);
    makeSpeArr(b1, B1SArr);
    makeSpeArr(s2, S2SArr);
    makeSpeArr(s1, S1SArr);

    

    //------------각 그룹별 명수--------------------------------------------
    const B2Len = B2Arr.length;
    const B1Len = B1Arr.length;
    const S2Len = S2Arr.length;
    const S1Len = S1Arr.length;
    const B3Len = B3Arr.length;
    const S3Len = S3Arr.length;
    const B2SLen = B2SArr.length;
    const B1SLen = B1SArr.length;
    const S2SLen = S2SArr.length;
    const S1SLen = S1SArr.length;
        

   
    //---------------랜덤배열 만들기 (랜덤으로 숫자입력)---------------------
        //Arr == 원래 배열 (순서대로)
        //Arr2 == 랜덤 배열

    var B2Arr2 = new Array();
    var B1Arr2 = new Array();
    var S2Arr2 = new Array();
    var S1Arr2 = new Array();
    var B3Arr2 = new Array();
    var S3Arr2 = new Array();

    function makeRandomArr(Arr2, Arr, Len){
        for(let i = 1; i <= Len; i++){
            const toNum = Arr.length;
            const j = Math.floor(Math.random() * toNum);
            Arr2.push(Arr[j]);
            Arr.splice(j,1);
        }
    }

    makeRandomArr(B2Arr2, B2Arr, B2Len);
    makeRandomArr(B1Arr2, B1Arr, B1Len);
    makeRandomArr(S2Arr2, S2Arr, S2Len);
    makeRandomArr(S1Arr2, S1Arr, S1Len);
    makeRandomArr(B3Arr2, B3Arr, B3Len);
    makeRandomArr(S3Arr2, S3Arr, S3Len);
    
    
    //---------------------표만들기--------------------------------------------------
    //Arr2에서 번호를 가져와야함!

    const RowNum = '#here tr:nth-child';
    const ColNum = 'td:nth-child';
    const Span = '>span:nth-child';

    var nowNumSpe1 = 0; var nowNumSpe2 = 0;
    // 2년차 형제 전봉,       1년차 형제 전봉 
    var nowNumSpe3 = 0; var nowNumSpe4 = 0;
    // 2년차 자매 전봉,       1년차 자매 전봉
    var nowNum1 = 0; var nowNum2 = 0; var nowNum5 = 0; 
    // 2년차 형제,     1년차 형제,      중년 형제  
    var nowNum3 = 0; var nowNum4 = 0; var nowNum6 = 0;
    // 2년차 자매,     1년차 자매,      중년 자매

    //모든 숫자의 길이를 6으로 맞춤. 

    // x는 테이블의 열 (아준, 아서러, 점준, 점설, 저준, 저설)
    // y는 테이블의 행 (요일)
    
    // 중년 명단 테이블에 넣기
    function makeTable_middle(){
        // 중년 형제
        for(let y = 1; y <= 7; y++){
            let x = 4;
            $(`${RowNum}(${y * 2 - 1})`).find(`${ColNum}(${x}) ${Span}(2)`)
            .html(B3Arr2[nowNum5]);
            nowNum5++;
        }
        // 중년 자매
        for(let y = 1; y <= 7; y++){
            let x = 3;
            $(`${RowNum}(${y * 2})`).find(`${ColNum}(${x}) ${Span}(3)`)
            .html(S3Arr2[nowNum6]);
            nowNum6++;
        }
    }

    
    // 전문봉사 번호 테이블에 넣기
    function makeTable_spe({Len, y_area, row_y, span_num, span_len, Arr2, nowNum, comma}){
        for(let i = 0; i < Len; i++){
            let x = Math.ceil(Math.random() * 4);
            if(x == 3){
                x = 5;
            } else if(x == 4){
                x = 6;
            }
            let y = Math.ceil(Math.random() * 3) + y_area;
    
            if($(`${RowNum}(${y * 2 + row_y})`).find(`${ColNum}(${x}) ${Span}(${span_num})`)
            .text().length != span_len){
                $(`${RowNum}(${y * 2 + row_y})`).find(`${ColNum}(${x}) ${Span}(${span_num})`)
                .html(Arr2[nowNum] + comma);
                nowNum++;
            } else{
                --i;
            }
        }
    }
    
    
    // 형제들 (2n - 1)
    var saveB2_x = 1;
    var saveB2_y = 1;
    var saveB1_x = 1;
    var saveB1_y = 1;

    function makeTable_Bro({start_x, start_y, Arr ,nowNum, Len, day, span_num, span_len, comma, save_x, save_y}){
        loop:
        for(var y = start_y; y <= 7; y++){
            for(var x = start_x; x <= 6; x++){
                if(nowNum < Len){
                    //점심 설거지
                    if(x == 4){
                        if(y % 2 == day){  //0 == 수, 금, 주 //1 == 화, 목, 토, 월
                            const wherePutDataFirst = $(`${RowNum}(${y * 2 - 1})`).find(`${ColNum}(${x}) ${Span}(1)`);
                            if(wherePutDataFirst.text().length != 8){
                                wherePutDataFirst.html(Arr[nowNum] + ', ');
                                nowNum++;
                            }
                        }
                    } else {
                        const wherePutData = $(`${RowNum}(${y * 2 - 1})`).find(`${ColNum}(${x}) ${Span}(${span_num})`);
                        if(wherePutData.text().length != span_len){
                            wherePutData.html(Arr[nowNum] + comma);
                            nowNum++;
                        }
                    }
                } else{
                    save_x = x;
                    save_y = y;
                    break loop;
                }
            }
        }
    }

    //자매들 (2n)
    var saveS2_y = 1;
    var saveS1_y = 1;

    // 2년차
    function makeTable_S2(start_y){
        loop:
            for(var y = start_y; y <= 7; y++){
                for(var x = 1; x <= 6; x++){
                    if(nowNum3 < S2Len){
                        const wherePutDataFirst = $(`${RowNum}(${y * 2})`).find(`${ColNum}(${x}) ${Span}(1)`);
                        const wherePutDataSecond = $(`${RowNum}(${y * 2})`).find(`${ColNum}(${x}) ${Span}(2)`);
                        if(x == 1){
                            if(wherePutDataFirst.text().length != 8){
                                wherePutDataFirst.html(S2Arr2[nowNum3] + ', ');
                                ++nowNum3;
                            }
                            if(wherePutDataSecond.text().length != 8){
                                if(nowNum3 < S2Len){
                                    wherePutDataSecond.html(S2Arr2[nowNum3] + ', ');
                                    nowNum3++;
                                } else{
                                    saveS2_y = y;
                                    break loop;
                                }
                            }
                        } else if(x == 3||x == 4||x == 5){
                            if(wherePutDataFirst.text().length != 8){
                                wherePutDataFirst.html(S2Arr2[nowNum3] + ', ');
                                ++nowNum3;
                            }
                        } else if(x == 2||x == 6){
                            if(y % 2 == 1){    //화, 목, 토, 월
                                if(wherePutDataFirst.text().length != 8){
                                    wherePutDataFirst.html(S2Arr2[nowNum3] + ', ');
                                    ++nowNum3;
                                }
                                if(wherePutDataSecond.text().length != 8){
                                    if(nowNum3 < S2Len){
                                        wherePutDataSecond.html(S2Arr2[nowNum3] + ', ');
                                        nowNum3++;
                                    } else{
                                        saveS2_y = y;
                                        break loop;
                                    }
                                }
                            } else{    //수, 금, 주 
                                if(wherePutDataFirst.text().length != 8){
                                    wherePutDataFirst.html(S2Arr2[nowNum3] + ', ');
                                    ++nowNum3;
                                }
                            }
                        }
                    } else{
                        saveS2_y = y;
                        break loop;
                    }
                }
            }
    }
    
    

    // 1년차
    function makeTable_S1(start_y){
        loop:
            for(var y = start_y; y <= 7; y++){
                for(var x = 1; x <= 6; x++){
                    if(nowNum4 < S1Len){
                        const wherePutDataThird = $(`${RowNum}(${y * 2})`).find(`${ColNum}(${x}) ${Span}(3)`);
                        const wherePutDataSecond = $(`${RowNum}(${y * 2})`).find(`${ColNum}(${x}) ${Span}(2)`);
                        if(x == 1){
                            if(wherePutDataThird.text().length != 6){
                                wherePutDataThird.html(S1Arr2[nowNum4]);
                                ++nowNum4;
                            }
                        } else if(x == 3){
                            if(wherePutDataSecond.text().length != 6){
                                wherePutDataSecond.html(S1Arr2[nowNum4] + ', ');
                                nowNum4++;
                            }
                        } else if(x == 4||x == 5){
                            if(wherePutDataSecond.text().length != 6){
                                wherePutDataSecond.html(S1Arr2[nowNum4] + ', ');
                            }
                            if(nowNum4 < S1Len){
                                if(wherePutDataThird.text().length != 6){
                                    wherePutDataThird.html(S1Arr2[++nowNum4]);
                                    ++nowNum4;
                                }
                            } else{
                                saveS1_y = y;
                                saveS1_span_1 = 3;
                                break loop;
                            }
                        } else if(x == 2|| x == 6){
                            if(y % 2 == 1){    //화, 목, 토, 월
                                if(wherePutDataThird.text().length != 6){
                                    wherePutDataThird.html(S1Arr2[nowNum4]);
                                    ++nowNum4;
                                }
                            } else{    //수, 금, 주
                                if(wherePutDataSecond.text().length != 6){
                                    wherePutDataSecond.html(S1Arr2[nowNum4] + ', ');
                                }
                                if(nowNum4 < S1Len){
                                    if(wherePutDataThird.text().length != 6){
                                        wherePutDataThird.html(S1Arr2[++nowNum4]);
                                        ++nowNum4;
                                    }
                                } else{
                                    saveS1_y = y;
                                    saveS1_span_1 = 3;
                                    break loop;
                                }
                            }
                        }
                    } else{
                        saveS1_y = y;
                        break loop;
                    }
                }
            }

    }
    
    makeTable_middle();
    makeTable_spe({
        Len: B2SLen, 
        y_area: 0, 
        row_y: -1, 
        span_num: 1, 
        span_len: 8, 
        Arr2: B2SArr, 
        nowNum: nowNumSpe1, 
        comma: ', '
    });
    makeTable_spe({
        Len: B1SLen, 
        y_area: 0, 
        row_y: -1, 
        span_num: 2, 
        span_len: 6, 
        Arr2: B1SArr, 
        nowNum: nowNumSpe2, 
        comma: ''
    });
    makeTable_spe({
        Len: S2SLen, 
        y_area: 0, 
        row_y: 0, 
        span_num: 1, 
        span_len: 8, 
        Arr2: S2SArr, 
        nowNum: nowNumSpe3, 
        comma: ', '
    });
    makeTable_spe({
        Len: S1SLen, 
        y_area: 0, 
        row_y: 0, 
        span_num: 3, 
        span_len: 6, 
        Arr2: S1SArr, 
        nowNum: nowNumSpe4, 
        comma: ''
    });
    makeTable_spe({
        Len: B2SLen, 
        y_area: 4, 
        row_y: -1, 
        span_num: 1, 
        span_len: 8, 
        Arr2: B2SArr, 
        nowNum: nowNumSpe1, 
        comma: ', '
    });
    makeTable_spe({
        Len: B1SLen, 
        y_area: 4, 
        row_y: -1, 
        span_num: 2, 
        span_len: 6, 
        Arr2: B1SArr, 
        nowNum: nowNumSpe2, 
        comma: ''
    });
    makeTable_spe({
        Len: S2SLen, 
        y_area: 4, 
        row_y: 0, 
        span_num: 1, 
        span_len: 8, 
        Arr2: S2SArr, 
        nowNum: nowNumSpe3, 
        comma: ', '
    });
    makeTable_spe({
        Len: S1SLen, 
        y_area: 4, 
        row_y: 0, 
        span_num: 3, 
        span_len: 6, 
        Arr2: S1SArr, 
        nowNum: nowNumSpe4, 
        comma: ''
    });
    makeTable_Bro({
        start_x: saveB2_x, 
        start_y: saveB2_y, 
        Arr: B2Arr2, 
        nowNum: nowNum1, 
        Len: B2Len, 
        day: 0, 
        span_num: 1, 
        span_len: 8, 
        comma: ', ',
        save_x: saveB2_x,
        save_y: saveB2_y
    });
    makeTable_Bro({
        start_x: saveB1_x, 
        start_y: saveB1_y, 
        Arr: B1Arr2, 
        nowNum: nowNum2, 
        Len: B1Len, 
        day: 1, 
        span_num: 2, 
        span_len: 6, 
        comma: '',
        save_x: saveB1_x,
        save_y: saveB1_y
    });
    makeTable_S2(saveS2_y);
    makeTable_S1(saveS1_y);



    //---------------랜덤배열 만들기2 --------------중년, 전봉은 필요x-----------------
    makeArr(b2, B2Arr);
    makeArr(b1, B1Arr);
    makeArr(s2, S2Arr);
    makeArr(s1, S1Arr);

    var B2Arr2 = new Array();
    var B1Arr2 = new Array();
    var S2Arr2 = new Array();
    var S1Arr2 = new Array();

    makeRandomArr(B2Arr2, B2Arr, B2Len);
    makeRandomArr(B1Arr2, B1Arr, B1Len);
    makeRandomArr(S2Arr2, S2Arr, S2Len);
    makeRandomArr(S1Arr2, S1Arr, S1Len);

    var nowNum1 = 0; var nowNum2 = 0;
    var nowNum3 = 0; var nowNum4 = 0;

    
    makeTable_Bro({
        start_x: saveB2_x, 
        start_y: saveB2_y, 
        Arr: B2Arr2, 
        nowNum: nowNum1, 
        Len: B2Len, 
        day: 0, 
        span_num: 1, 
        span_len: 8, 
        comma: ', ',
        save_x: saveB2_x,
        save_y: saveB2_y
    });
    makeTable_Bro({
        start_x: saveB1_x, 
        start_y: saveB1_y, 
        Arr: B1Arr2, 
        nowNum: nowNum2, 
        Len: B1Len, 
        day: 1, 
        span_num: 2, 
        span_len: 6, 
        comma: '',
        save_x: saveB1_x,
        save_y: saveB1_y
    });
    makeTable_S2(saveS2_y);
    makeTable_S1(saveS1_y);

    

    //---------------랜덤배열 만들기2 --------------형제들만 (몇명은 일주일에 봉사 3번)-----------------
    makeArr(b2, B2Arr);
    makeArr(b1, B1Arr);

    var B2Arr2 = new Array();
    var B1Arr2 = new Array();

    makeRandomArr(B2Arr2, B2Arr, B2Len);
    makeRandomArr(B1Arr2, B1Arr, B1Len);
    
    var nowNum1 = 0; var nowNum2 = 0;

    makeTable_Bro({
        start_x: saveB2_x, 
        start_y: saveB2_y, 
        Arr: B2Arr2, 
        nowNum: nowNum1, 
        Len: B2Len, 
        day: 0, 
        span_num: 1, 
        span_len: 8, 
        comma: ', ',
        save_x: saveB2_x,
        save_y: saveB2_y
    });
    makeTable_Bro({
        start_x: saveB1_x, 
        start_y: saveB1_y, 
        Arr: B1Arr2, 
        nowNum: nowNum2, 
        Len: B1Len, 
        day: 1, 
        span_num: 2, 
        span_len: 6, 
        comma: '',
        save_x: saveB1_x,
        save_y: saveB1_y
    });
});