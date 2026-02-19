let currentStep = 1;

function nextStep() {
    currentStep++;
    updateUI();
}

function updateUI() {
    // 1. 멘트 변경
    document.querySelectorAll('.msg').forEach(m => m.classList.remove('active'));
    document.getElementById(`msg-${currentStep}`)?.classList.add('active');

    // 2. 단계별 재료 등장 로직
    if (currentStep === 4) { // page4: 그릇 등장
        document.querySelector('.bowl').classList.add('active');
    }
    if (currentStep === 5) { // page5: 떡 등장
        document.querySelectorAll('.tteok').forEach(t => t.classList.add('active'));
    }
    if (currentStep === 6) { // page6: 국물(육수) 등장
        document.querySelector('.soup').classList.add('active');
    }
    if (currentStep === 7) { // page7: 고명 등장
        document.querySelector('.garnish-group').classList.add('active');
    }
    if (currentStep === 8) { // page8: 버튼 교체
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('popup-btns').classList.remove('hidden');
    }
}

// 팝업 로직
function openPopup(type) {
    const overlay = document.getElementById('popup-overlay');
    overlay.classList.remove('hidden');
    // type에 따라 제목과 설명 텍스트 교체 (데이터 모듈화)
}

function closePopup() {
    document.getElementById('popup-overlay').classList.add('hidden');
}