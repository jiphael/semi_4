
const profile = document.querySelector("#category-profile");
const payment = document.querySelector("#category-payment");
const favorites = document.querySelector("#category-favorites");
const review = document.querySelector("#category-review");
const QA = document.querySelector("#category-QA");

const container = document.querySelector(".containerH");
 
const menu =[];

menu.push(profile);
menu.push(payment);
menu.push(favorites);
menu.push(review);
menu.push(QA);

let user = {
    name : '홍길동',
    age : '25' ,
    email : 'gildong@naver.com' ,
    nickname : '홍길동123',
    tel : '010-1234-1234',
    favorites : [
        '코딩1' , '코딩2'
    ] ,
    review : {
        title : '어려워용' ,
        description : '진짜 어려움'
    } ,
    QA : {
        title : '제목이안됨' ,
        description : '내용이안됨'
    }
}

// if 문으로 0개 일시 출력문구 변경


profile.addEventListener('click', ()=>{


    menu.forEach((a)=>{
        a.classList.remove('selected');
    })

    profile.classList.add('selected');

    container.innerHTML=`<div id="main-1">
                <div>내 프로필</div>
            </div>
            <div id="main-2">
                <div id="main-2-1">닉네임(별명)</div>
                <div id="main-2-2"><p>${user.nickname}</p><button id="main-2-2-write" class="fa-regular fa-pen-to-square"></button></div>
            </div>
            <div id="main-3">
                <div id="main-3-1">프로필이미지</div>
                <div id="main-3-2">
                    <img src="img/profile-default.jpg" id="profile-img">
                    <label for="main-3-2-btn-2">
                        <div id="main-3-2-btn-1" class="fa-solid fa-camera"></div>
                    </label>
                  <input type="file" name="main-3-2-btn-2" id="main-3-2-btn-2"></div>
            </div>
            <div id="main-4">
                <div id="main-4-1">이메일(로그인ID)</div>
                <div id="main-4-2">${user.email}</div>
            </div>
            <div id="main-5">
                <div id="main-5-1">전화번호</div>
                <div id="main-5-2">${user.tel}</div>
            </div>`;

});


payment.addEventListener('click', ()=>{

    menu.forEach((a)=>{
        a.classList.remove('selected');
    })

    payment.classList.add('selected');

    container.innerHTML=`<div id="payment-main-1">
                <div>결제 내역</div>
            </div>
            <div id="payment-main-2">
                <div id="payment-main-2-1" class="payment-main-2-1">VOD</div>
                <div id="payment-main-2-1">온.오프라인</div>
                <div id="payment-main-2-1">전자책</div>
            </div>
            <div id="payment-main-3">
                <div id="payment-main-3-1">
                    <p> default : '결제 내역이 없어요'</p>
                </div>
            </div>`;

    // container.insertAdjacentHTML("beforebegin", 
    //     `<div class="containerH"> <!-- 메인 내용 -->
    //         <div id="payment-main-1">
    //             <div>결제 내역</div>
    //         </div>
    //         <div id="payment-main-2">
    //             <div id="payment-main-2-1" class="payment-main-2-1">VOD</div>
    //             <div id="payment-main-2-1">온.오프라인</div>
    //             <div id="payment-main-2-1">전자책</div>
    //         </div>
    //         <div id="payment-main-3">
    //             <div id="payment-main-3-1">
    //                 <p> default : '결제 내역이 없어요'</p>
    //             </div>
    //         </div>
    //     </div>`
    // )
});

favorites.addEventListener('click', ()=>{

    menu.forEach((a)=>{
        a.classList.remove('selected');
    })

    favorites.classList.add('selected');

    container.innerHTML=`<div id="favorites-main-1">
                <div>내 찜 클래스</div>
            </div>
            <div id="favorites-main-2">
                <div id="favorites-main-2-1">찜한 클래스 : ${user.favorites.length}개</div>
            </div>
            <div id="favorites-main-3">
                <div id="favorites-main-3-1">
                    <div id="favorites-main-3-1-1">
                        <img src="img/class.jpg">
                    </div>
                    <div id="favorites-main-3-1-2">
                        <p>VOD</p>
                        <p>취업에 필수! 포트폴리오 10분만에 노션 만들기</p>
                        <p>월 <b>667</b>원</p>
                    </div>
                    <div id="favorites-main-3-1-3">
                        <button>♥</button>
                    </div>
                </div>
            </div>`;
});


review.addEventListener('click', ()=>{

    menu.forEach((a)=>{
        a.classList.remove('selected');
    })

    review.classList.add('selected');

    container.innerHTML=`<div id="review-main-1">내 리뷰
            </div>
            <div id="review-main-2">
                <div id="review-main-2-1">리뷰 작성하러 가기</div>
            </div>
            <div id="review-main-3">
                <div id="review-main-3-1">
                    <p>작성한 리뷰가 없어요</p>
                    <div id="review-main-3-1-1"></div> <!-- 작성하면 추가-->
                </div>
            </div>`;
});

QA.addEventListener('click', ()=>{

    menu.forEach((a)=>{
        a.classList.remove('selected');
    })

    QA.classList.add('selected');

    container.innerHTML=`<div id="qa-main-1">내가 작성한 Q&A <p><b>0</b></p>
            </div>
            <div id="qa-main-2">
                <div id="qa-main-2-1">Q&A 작성하러 가기</div>
            </div>
            <div id="qa-main-3">
                <div id="qa-main-3-1">
                    <p>작성한 Q&A가 없어요</p>
                    <div id="qa-main-3-1-1"></div> <!-- 작성하면 추가-->
                </div>
            </div>`;

});

