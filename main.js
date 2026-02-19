const content = {
    1: "안녕!",
    2: "설 잘 보냈니?",
    3: "내가 설날에 맛있게 먹은 음식을 알려줄게",
    4: "그 음식은 바로 떡국! (그릇 등장)",
    5: "쫄깃한 떡을 먼저 담고..",
    6: "따뜻한 육수를 부어줘.",
    7: "정성스러운 고명까지 올리면!",
    8: "올해 건강을 기원하는 떡국 완성!"
};

let step = 1;

function handleNext() {
    if (step >= 8) return;
    step++;
    
    // 멘트 변경
    document.getElementById('main-text').innerText = content[step];

    // 단계별 재료 순서 (Page 번호 기준)
    if (step === 4) document.querySelector('.bowl').classList.add('active');
    if (step === 5) document.querySelector('.tteok-group').classList.add('active');
    if (step === 6) document.querySelector('.soup').classList.add('active');
    if (step === 7) document.querySelector('.garnish-group').classList.add('active');
    
    if (step === 8) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('popup-btns').classList.remove('hidden');
        document.getElementById('popup-btns').classList.add('active');
    }
}

function openPopup(type) {
    const overlay = document.getElementById('popup-overlay');
    const title = document.getElementById('popup-title');
    overlay.style.display = 'flex';
    
    if (type === 'recipe') {
        title.innerText = "떡국 레시피";
        // 레시피 내용 추가
    } else {
        title.innerText = "만두 꿀팁";
        // 팁 내용 추가
    }
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}